/// @file Generator.ts
/// @author Airam Rodríguez Rivero (C) 2013
/// @mail airamrguezrivero@gmail.com
/// The way I compile:
/// tsc -m commonjs -t ES5 -sourcemap References.ts
/// node Generator.js api.json > titanium.d.ts

/// <reference path='Util.ts' />
import fs = require('fs');
import _  = require('underscore');
import _s = require('underscore.string')

module Generator {
	interface TiParameter {
		name     : string;
		type     : any;
		optional : boolean;
	}

	interface TiReturnType {
		type : any;
	}

	interface TiMethod {
		parameters : Array<TiParameter>;
		returns    : any;
		name       : string;
	}

	interface TiProperty {
		name : string;
		type : any;
	}

	interface TiObject {
		properties : Array<TiProperty>;
		methods    : Array<TiMethod>;
		name       : string;
		extends    : string;
	}

	interface TypeField {
		type : string;
	}

	/// @class <b>Module</b>
	/// @brief This is a generic representation of Typescript elements as modules, interfaces
	///        or classes.
	export class Module {
		static NEWLINE                       : string = '\r\n';
		/// <b>MODULE_FUNCTION_TEMPLATE</b>
		/// Function representation inside a Typescript module.
		static MODULE_FUNCTION_TEMPLATE      : string = 'export function {{declaration}}';
		/// <b>MODULE_PROPERTY_TEMPLATE</b>
		/// Variable representation inside a Typescript module.
		static MODULE_PROPERTY_TEMPLATE      : string = 'export var {{declaration}}';
		/// <b>INTERFACE_FUNCTION_TEMPLATE</b>
		/// Interface functions representation inside a Typescript module.
		static INTERFACE_FUNCTION_TEMPLATE   : string = '{{declaration}}';
		/// <b>INTERFACE_PROPERTY_TEMPLATE</b>
		/// Interface properties representation inside a Typescript module.
		static INTERFACE_PROPERTY_TEMPLATE   : string = '{{declaration}}';
		/// <b>MODULE_TEMPLATE</b>
		/// Module representation inside a Typescript module.
		static MODULE_TEMPLATE               : string = '{{moduleType}} module {{name}} {' + Module.NEWLINE +
		                                                '{{moduleContent}}' + Module.NEWLINE;
		/// <b>INTERFACE_TEMPLATE</b>
		/// Interface representation inside a Typescript module.
		static INTERFACE_TEMPLATE            : string = '{{entityType}} {{name}} {{inheritsFrom}} {' + Module.NEWLINE +
		                                                '{{moduleContent}}' + Module.NEWLINE;
		static ENUM_TEMPLATE                 : string = '{{enumModifier}} enum {{name}} {' + Module.NEWLINE +
		                                                '{{moduleContent}}' + Module.NEWLINE;

		/// All the submodules.
		private modules      : Array<Module>;
		private properties   : Array<string>;
		private methods      : Array<string>;
		private identifiers  : Array<string>;
		private inheritsFrom : string;
		private isGeneric    : boolean;
		private extendsFrom  : Module;

		constructor (public Name: string, inheritsFrom : string = 'Object', isGeneric: boolean = false) {
			this.modules = [];
			this.properties = [];
			this.methods = [];
			this.identifiers = [];
			this.isGeneric = isGeneric;
			this.extendsFrom = null;
		}

		/// Getters
		get Properties   () : Array<string>              { return this.properties;   }
		get Methods      () : Array<string>              { return this.methods;      }
		get Identifiers  () : Array<string>              { return this.identifiers;  }
		get Modules      () : Array<Module>              { return this.modules;      }
		get InheritsFrom () : string                     { return this.inheritsFrom; }
		get IsGeneric    () : boolean                    { return this.isGeneric;    }
		get ExtendsFrom  () : Module                     { return this.extendsFrom;  }

		/// Setters
		set InheritsFrom (extendsFromModuleName: string) { this.inheritsFrom = extendsFromModuleName; }
		set IsGeneric    (generic: boolean)              { this.isGeneric = generic; }
		set ExtendsFrom  (module: Module)                { this.extendsFrom = module; }

		/// Tells whether the current representation is a Typescript Module or not.
		public IsModule (): boolean {
			return (!_.isEmpty(this.Modules));
		}

		public IsEnum (): boolean {
			if (_.isEmpty(this.Properties)) {
				return false;
			}
			var flag: boolean = false;
			for (var i: number = 0; i < this.Methods.length; i++) {
				if (!this.IsInherited(this.Methods[i])) {
					return false;
				}
			}
			for (i = 0; i < this.Properties.length; i++) {
				if (!this.IsInherited(this.Properties[i])) {
					var match = this.Properties[i].split(':').slice(0, 1);
					if (!_.isNull(match)) {
						match = _.first(match).match(/[a-z]/);
						if (!_.isNull(match)) {
							return false;
						}
					}
				};
			}
			return true;
		}

		/// <b>DoRender</b>
		/// @brief Render the current module.
		/// @return the current module renderized.
		Render (): string {
			return this.DoRender (0, '');
		}

		/// <b>DoRender</b>
		/// @brief Do the render of the current module using a level of indentations and
		///        all the submodules definitions.
		/// @param[in] level that will be used to indent the rendered output.
		/// @param[in] definitions of the submodules already renderized.
		/// @return the current module renderized.
		private DoRender (level : number, definitions: string) : string {
			var subModulesRender : string = '';
			var template = _.template (Module.MODULE_TEMPLATE);
			if (this.IsEnum()) {
				definitions += this.RenderEnum(level) + '}'.Indent(level) + Module.NEWLINE;
			} else if (!this.IsModule()) {
				definitions += this.RenderInterface(level) + '}'.Indent(level) + Module.NEWLINE;
			} else {
				var subModulesDefs: string = '';
				_.each (this.Modules, (submodule: Module) => {
					subModulesDefs += submodule.DoRender(level + 1, '');
				});
				definitions += this.RenderModule(level) + subModulesDefs + '}'.Indent(level) + Module.NEWLINE;
			}
			return definitions;
		}

		/// <b>RenderModule</b>
		/// @brief Render the current module.
		/// @param[in] level that will be used to indent the rendered output.
		/// @return the current module renderized.
		private RenderModule (level: number): string {
			var propertyTemplate: Function = _.template(Module.MODULE_PROPERTY_TEMPLATE);
			var methodTemplate: Function = _.template(Module.MODULE_FUNCTION_TEMPLATE);
			var template: Function = _.template(Module.MODULE_TEMPLATE);
			var content: string = this.RenderPropertiesAndMethods(level + 1, propertyTemplate, methodTemplate);
			var moduleType: string = (level === 0) ? 'declare' : 'export';
			return template ({
								moduleType: moduleType,
								name: _.last(this.Name.split('.')),
								moduleContent: content
							}).Indent(level);
		}

		/// <b>RenderInterface</b>
		/// @brief Render the current interface.
		/// @param[in] level that will be used to indent the rendered output.
		/// @return the current interface renderized.
		private RenderInterface (level: number): string {
			var propertyTemplate: Function = _.template(Module.INTERFACE_PROPERTY_TEMPLATE);
			var methodTemplate: Function = _.template(Module.INTERFACE_FUNCTION_TEMPLATE);
			var template: Function = _.template(Module.INTERFACE_TEMPLATE);
			var content: string = this.RenderPropertiesAndMethods(level + 1, propertyTemplate, methodTemplate);
			var generic: string = this.IsGeneric ? '' : '';
			var moduleRoute : Array<string> = this.Name.split('.');
			var name: string = _.last (moduleRoute);
			var entityType: string = (level === 0) ? 'declare class' : 'export interface';
			return template ({
								entityType: entityType,
								name: name + generic,
								inheritsFrom: this.RenderInterfaceInheritsPart(),
								moduleContent: content
							}).Indent(level);
		}

		private RenderInterfaceInheritsPart(): string {
			var parentIsEnum: boolean = false;
			if (!_.isNull(this.ExtendsFrom)) {
				parentIsEnum = this.ExtendsFrom.IsEnum();
			}
			if (parentIsEnum || this.InheritsFrom === 'Object') {
				return '';
			}
			return 'extends ' + this.InheritsFrom;
		}

		private RenderEnum (level: number): string {
			var template: Function = _.template(Module.ENUM_TEMPLATE);
			var content: string = this.RenderEnumEntries(level + 1);
			var moduleRoute : Array<string> = this.Name.split('.');
			var name: string = _.last (moduleRoute);
			var enumModifier: string = level === 0 ? 'declare' : 'export';
			return template ({
								enumModifier: enumModifier,
								name: name,
								moduleContent: content
							}).Indent(level);
		}

		private RenderEnumEntries (level: number): string {
			var sep: string = '';
			var content: string = '';
			var that = this;
			var nonInheritedProperties = _.select(this.Properties, (property: string) => {
				return !that.IsInherited(property);
			});
			_.each(nonInheritedProperties, (property: string) => {
				content += sep + _s.trim(_.first(property.split(':'))).Indent(level);
				sep = ',' + Module.NEWLINE;
			});
			return content;
		}

		/// <b>RenderPropertiesAndMethods</b>
		/// @brief Render the properties and methods of a particular module.
		/// @param[in] level that will be used to indent the rendered output.
		/// @param[in] propertyTemplate the template that will be used to render properties.
		/// @param[in] methodTemplate the template that will be used to render methods.
		/// @return the properties and methods of a particular module renderized according to
		///         the specified templates.
		private RenderPropertiesAndMethods (level: number, propertyTemplate: Function, methodTemplate: Function): string {
			var content: string = '';
			var lineSep: string = '';
			var isInterface: boolean = !this.IsModule();
			_.each (this.Properties, (property: string) => {
				if (!this.IsInherited(property) && isInterface || !isInterface) {
					var renderedProperty: string = propertyTemplate({declaration: property});
					content += lineSep + renderedProperty.Indent(level);
					lineSep = Module.NEWLINE;
				}
			});


			// TODO There is a problem when a subinterface override a method
			// adding more parameters. For instance, DocumentView extends Titanium.UI.View
			// adding parameters to the method show (). The way to make this work is to add
			// ... args to the parent show method. :S

			_.each (this.Methods, (method: string) => {
				if (!this.IsInherited(method) && isInterface || !isInterface) {
					var renderedMethod: string = methodTemplate({declaration: method});
					content += lineSep + renderedMethod.Indent(level);
					lineSep = Module.NEWLINE;
				}
			});
			return content;
		}

		private IsInherited (identifier: string): boolean {
			var iterator: Module = this.extendsFrom;
			while (iterator !== null) {
				if (_.contains(iterator.Properties, identifier) || _.contains(iterator.Methods, identifier)) {
					return true;
				}
				iterator = iterator.extendsFrom;
			}
			return false;
		}
	}

	export class Mapper {
		/// Template used to render a method.
		static METHOD_GENERIC_TEMPLATE    : string = '{{Name}} {{MethodSignature}};';
		/// Template used to render the parameters part of a method.
		static METHOD_PARAMETERS_TEMPLATE : string = '{{OpenDelimiter}}{{MethodParameters}}{{CloseDelimiter}}';
		/// Template used to render the return part of a method.
		static METHOD_RETURN_TEMPLATE     : string = '{{ReturnTypeSeparator}} {{ReturnType}}';

		/// <b>RootModule</b>
		/// @brief A logical representation of a module (module, interface or class).
		private static RootModule : Module = new Module ('Root');

		/// <b>Map</b>
		/// @brief Parse a Titanium JSON specification and convert it to Typescript ambient declarations.
		/// @param[in] path where the file with the JSON specification is located.
		public static Map (path: string): void {
			fs.readFile (path, (err, data) => {
				if (err) {
					console.error ('Error opening file \'' + path + '\'');
				} else {
					_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;
					try {
						var json = JSON.parse(data.toString('utf-8'));
						_.each (json, (tiObject : TiObject) => {
							Mapper.ComputeTiObject (tiObject);
						});
						_.each (Mapper.RootModule.Modules, (m: Module) => {
							console.log (m.Render ());
						});
					} catch (invalidJson) {
						console.error (invalidJson);
					}
				}
			});
		}

		/// <b>ComputeTiObject</b>
		/// @brief Converts a Titanium object in JSON format to a flatten Typescript representation.
		/// @param[in] tiObject is the object to convert.
		private static ComputeTiObject (tiObject : TiObject) {
			var name : string = tiObject.name;
			var atModule = Mapper.ComputeModule (name);
			if (_.isNull(atModule)) {
				throw 'Internal error. Could not find or allocate module.';
			}
			_.each (tiObject.methods, (tiMethod: TiMethod) => {
				var methodOverloads: Array<string> = Mapper.ComputeTiMethod (atModule, tiMethod);
				_.each (methodOverloads, (overload: string) => {
					atModule.Methods.push (overload);
				});
			});
			_.each (tiObject.properties, (tiProperty : TiProperty) => {
				// In some interfaces there are identifiers that are used for methods
				// and properties. In Typescript this is a compiler error. For instance,
				// in the interface Titanium.Map.View there is a property called animate
				// and two methods with the same name.
				// Other example is the fieldCount property/ method at Database.ResultSet
				if (!_.contains(atModule.Identifiers, tiProperty.name)) {
					atModule.Properties.push (Mapper.ComputeTiProperty (tiProperty));
				}
			});
			atModule.InheritsFrom = tiObject.extends;
			if (atModule.InheritsFrom !== 'Object') {
				atModule.ExtendsFrom = Mapper.ComputeModule (atModule.InheritsFrom);
			}
		}

		/// <b>ComputeModule</b>
		/// @brief Creates or return a module representation of the current JSON object
		///        being analyzed.
		/// @param[in] name is the module name
		/// @return a Module object to represent that module.
		private static ComputeModule (name: string) : Module {
			var interfaceModules = name.split ('.');
			var rootModule = Mapper.RootModule;
			for (var i = 0; i < interfaceModules.length; i++) {
				var moduleName = Mapper.SanitizeName(interfaceModules[i]);
				var moduleObj = Mapper.GetModuleByNameFromModule (moduleName, rootModule);
				if (_.isNull(moduleObj)) {
					moduleObj = new Module (moduleName);
					rootModule.Modules.push (moduleObj);
				}
				rootModule = moduleObj;
			}
			return rootModule;
		}

		/// <b>ComputeTiMethod</b>
		/// @brief Flats a method in a JSON format to a Typescript representation.
		/// @param[in] atModule is the module where this method is located.
		/// @param[in] tiMethod is the JSON method representation.
		/// @return a Typescript representation of the tiMethod method.
		private static ComputeTiMethod (atModule: Module, tiMethod: TiMethod) : Array<string> {
			var methodOverloads : Array<string> = [];
			var name : string = tiMethod.name;
			atModule.Identifiers.push(name);
			var methodGenericTemplate = _.template (Mapper.METHOD_GENERIC_TEMPLATE);
			var methodParametersTemplate = _.template (Mapper.METHOD_PARAMETERS_TEMPLATE);
			var methodReturnTemplate = _.template (Mapper.METHOD_RETURN_TEMPLATE);
			var signatures : Array<string> = Mapper.ComputeMethodSignature (tiMethod.parameters);
			var returnType : Array<string> = Mapper.ComputeMethodReturnTypes (tiMethod.returns);
			var renderizedSignatures = Mapper.RenderMethodParameters (methodParametersTemplate, signatures);
			var renderizedReturnTypes: Array<string>;
			if (returnType.length === 1) {
				renderizedReturnTypes = Mapper.RenderMethodReturnTypes (methodReturnTemplate, returnType);
			} else if (returnType.length > 1) {
				renderizedReturnTypes = Mapper.RenderMethodReturnTypes (methodReturnTemplate, ['any']);
			}
			if (signatures.length !== renderizedSignatures.length) {
				throw 'Internal error. Method overload replication failed.';
			}
			Mapper.Replicate (renderizedSignatures, renderizedReturnTypes, '');
			var signatureStr : string = '';
			var sep : string = '';
			// Flat the signatures structure.
			_.each (renderizedSignatures, (signature: string) => {
				var renderized = methodGenericTemplate ({Name: name, MethodSignature: signature});
				methodOverloads.push (renderized);
			});
			return methodOverloads;
		}

		/// <b>RenderMethodReturnTypes</b>
		/// @brief Attach the return types to the methods prototypes.
		/// @param template the template to render the method signature.
		/// @param returnTypes a list with all the return types.
		/// @return a list with all the rendered method overload signatures.
		private static RenderMethodReturnTypes (template: Function, returnTypes: Array<string>): Array<string> {
			var renderResult: Array<string> = [];
			if (returnTypes.length === 0) {
				renderResult.push (template ({ReturnTypeSeparator: ':', ReturnType: 'void'}));
			} else {
				_.each (returnTypes, (retType: string) => {
					var render = template ({ReturnTypeSeparator: ':', ReturnType: retType});
					renderResult.push (render);
				});
			}
			return renderResult;
		}

		/// <b>RenderMethodParameters</b>
		/// @brief Render all the method overload signatures.
		/// @param template the template to render the method signature.
		/// @param signatures a list with the method signatures.
		/// @return a list with all the rendered method overload signatures without the return types.
		private static RenderMethodParameters (template: Function, signatures : Array<string>) : Array<string> {
			var renderResult : Array<string> = [];
			if (signatures.length === 0) {
				renderResult.push (template({OpenDelimiter: '(', MethodParameters: '', CloseDelimiter: ')'}));
			} else {
				_.each (signatures, (signature: string) => {
					var render = template({OpenDelimiter: '(',
						MethodParameters: signature,
						CloseDelimiter: ')'
					});
					renderResult.push (render);
				});
			}
			return renderResult;
		}

		/// <b>ComputeMethodSignature</b>
		/// @brief Compute all the method overload signatures without the return types.
		/// @param tiParameterList all the parameters on the signature.
		/// @return a list with all the method overload signatures without the return types.
		private static ComputeMethodSignature (tiParameterList: Array<TiParameter>) : Array<string> {
			var signatures : Array<string> = [''];
			var stickyOptionalFlag: boolean = false;
			_.each (tiParameterList, (tiParameter : TiParameter) => {
				stickyOptionalFlag = (tiParameter.optional || stickyOptionalFlag);
				var parameterOveloads : Array<string> = Mapper.ComputeMethodParameter (tiParameter, stickyOptionalFlag);
				Mapper.Replicate (signatures, parameterOveloads, ',');
			});
			return signatures;
		}

		/// <b>Replicate</b>
		/// @brief Given a list of strings do all combinations with a new list of parameters
		/// @param[out] replicationVector is the vector which all samples will be attached to.
		/// @param[in] replicateSamples contains the new samples to replicate.
		/// @param[in] separator is the way you stick both parts.
		private static Replicate (replicationVector : Array<string>, replicateSamples : Array<string>, separator : string) {
			var newReplicationVectorSize = replicationVector.length * replicateSamples.length;
			var startIndex = replicationVector.length;
			// Initialize the capacity of signatures when an overload has taken place to allocate
			// all new signature combinations.
			for (var i : number = startIndex; i < newReplicationVectorSize; i++) {
				replicationVector [i] = replicationVector [newReplicationVectorSize - 1 - i] || '';
			}
			// Replicate the new overloads throught the rest of parameters combinations.
			var amountOfReplicateSamples = replicateSamples.length;
			for (var i : number = replicationVector.length - 1; i > -1 ; i--) {
				var sample = replicateSamples[i % amountOfReplicateSamples];
				if (_.isNull(replicationVector[i]) || _.isUndefined(replicationVector[i]) || _.isEmpty(replicationVector[i])) {
					replicationVector[i] = sample;
				} else {
					replicationVector[i] += separator + ' ' + sample;
				}
			}
		}

		/// <b>ComputeMethodReturnTypes</b>
		/// @brief Returns a list with all the posible return types.
		/// @param[in] tiReturnType can be an array or just a simple JSON object.
		/// @return a list with all the posible return types.
		private static ComputeMethodReturnTypes (tiReturnType: TiReturnType) : Array<string> {
			var returnTypes : Array<string> = [];
			if (_.isArray (tiReturnType)) {
				_.each (tiReturnType, (returnType: TypeField) => {
					returnTypes.push (Mapper.SanitizeModuleRoute(Mapper.ComputeType (returnType.type)));
				});
			} else {
				returnTypes.push (Mapper.SanitizeModuleRoute(Mapper.ComputeType (tiReturnType.type)));
			}
			return returnTypes;
		}

		/// <b>SanitizeModuleRoute</b>
		/// @brief Given a route, sanitize every part of it.
		/// @param[in] route to sanitize.
		/// @return a sanitized module route.
		private static SanitizeModuleRoute(route: string): string {
			var pathParts: Array<string> = route.split('.');
			var type: string = '';
			var moduleSep: string = '';
			_.each(pathParts, (part: string) => {
				type += moduleSep + Mapper.SanitizeName (part);
				moduleSep = '.';
			});
			return type;
		}

		/// <b>ComputeMethodParameter</b>
		/// @brief This method takes the information relative a method parameter, id est,
		///        its name, type and availability.
		/// @tiParameter[in] the parameter in JSON format.
		/// @shouldBeOptional[in] tells whether the parameter should be marked as optional or not.
		///       When a parameter appears as optional in a list, then all the neightbours at
		///       right must also be optional.
		/// @return a list with all the overloads for this parameter.
		private static ComputeMethodParameter (tiParameter : TiParameter, shouldBeOptional: boolean) : Array<string> {
			var parameters : Array<string> = [];
			var name : string = Mapper.SanitizeParameterName(tiParameter.name);
			var type : Array<string> = Mapper.ComputeListOfTypes (tiParameter.type);
			var optional : boolean = tiParameter.optional;
			var stickyOptionalFlag: boolean = false;
			var optionalStr: string;
			_.each (type, (t : string) => {
				optionalStr = (shouldBeOptional || optional) ? '?' : '';
				parameters.push (name + optionalStr + ': ' + Mapper.SanitizeModuleRoute(t));
			});
			return parameters;
		}

		/// <b>ComputeTiProperty</b>
		/// @brief Extracts a property from the JSON.
		/// @param[in] tiProperty is the param in JSON format.
		/// @return the tiProperty flattened.
		private static ComputeTiProperty (tiProperty : TiProperty) : string {
			var name : string = tiProperty.name;
			var type : string = Mapper.ComputePropertyType (tiProperty.type);
			return name + ' : ' + type + ';';
		}

		/// <b>ComputeListOfTypes</b>
		/// @brief Given a collection of types this method returns a list with
		///        all these types sanitized.
		/// @param[in] type a list or just a single type.
		/// @return a vector of sanitized types.
		private static ComputeListOfTypes (type: any) : Array<string> {
			var types : Array<string> = [];
			if (_.isArray(type)) {
				_.each (type, (t : string) => {
					types.push (Mapper.ComputeType(t));
				});
			} else {
				types.push (Mapper.ComputeType(<string> (type)));
			}
			return types;
		}

		/// <b>ComputePropertyType</b>
		/// @brief This method returns a valid type for a given property.
		/// @param[in] the property type.
		/// @return the property type sanitized.
		private static ComputePropertyType (type : any) : string {
			if (_.isArray(type)) {
				return 'any';
			}
			return Mapper.ComputeType (<string>(type));
		}

		/// <b>SanitizeParameterName</b>
		/// @brief Unfortunately, in the Titanium Mobile documentation there are some
		/// parameters name that are in conflict with some reserved keywords.
		/// @param[in] paramName is the param to sanitize, escaping it whenever is in
		///                      conflict.
		/// @return the paramName sanitized.
		private static SanitizeParameterName(paramName: string): string {
			if (paramName === 'default') {
				paramName = '_' + paramName;
			}
			if (paramName === 'function') {
				paramName = '_' + paramName;
			}
			return paramName;
		}

		/// <b>ComputeType</b>
		/// @brief This method returns a valid Typescript type.
		///        It will be a really interesting feature to add functionality
		///        to manage the generic types. Here I'm only concerced about
		///        handling the Dictionary generic type.
		/// @param[in] type is the type to be converted.
		/// @return a valid type name.
		private static ComputeType (type: string) : string {
			if (!_.isNull(type.match('Callback<.*>'))) {
				return '(...args : any[]) => any';
			}
			var genericMatch = type.split('/^Dictionary(\\<.*)(\\>$)/');
			if (genericMatch.length > 0) {
			 	var moduleName = 'Dictionary';
				var atModule = Mapper.ComputeModule (moduleName);
				if (!_.isNull(atModule)) {
					atModule.IsGeneric = true;
				}
			 	// TODO Manage the type that is being using as instance of the generic type.
			 }
			switch (type) {
				case 'Fuction':
				case 'Callback':
				case 'Callback<Object>':
					return '(...args : any[]) => any';
				case 'Object':
					return 'any';
				case 'Array':
					return 'Array<any>';
				case 'Number':
				case 'Boolean':
				case 'String':
					return type.toLowerCase ();
				case 'Dictionary':
					return 'Dictionary<Object>';
				case 'Array<Dictionary>':
					return 'Array<Dictionary<Object>>';
				default:
					return Mapper.SanitizeModuleRoute(type);
			}
		}

		/// <b>SanitizeName</b>
		/// @brief Given a word make it valid to work as an identifier.
		/// @param name is the name to convert to an identifier.
		/// @return a valid identifier.
		private static SanitizeName (name: string): string {
			var match = name.match(/^\d/); // Matchs a digit at the beginning of the name
			if (!_.isNull(match)) {		   // Null when there wasn't a match.
				name = '_' + name;
			}
			if (name === 'Dictionary') {
				name = 'Dictionary<Object>';
			}
			return name;
		}

		/// <b>GetModuleByNameFromModule</b>
		/// @brief Given a module name, returns the logical module object.
		/// @param[in] name the module name.
		/// @param[in] rootModule the extendsFrom module where this module is located.
		/// @return the module that contains the module with name <i>name</i>.
		private static GetModuleByNameFromModule (name: string, rootModule: Module) : Module {
			return _.first(_.where (rootModule.Modules, {Name: name})) || null;
		}
	}
}

function main () {
	if (process.argv.length !== 3) {
		console.log ('   Usage:');
		console.log ('      node ' + process.argv[1] + ' JSON_File');
	} else {
		Generator.Mapper.Map(process.argv[process.argv.length - 1]);
	}
}

main();
