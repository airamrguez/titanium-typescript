interface String  {
	Join (separator: string, ...args: string[]): string;
	Indent (level: number): string;
}

String.prototype.Join = function (separator, ...args) {
	var argsArray = Array.prototype.slice.call(arguments, 1);
	if (separator == null) separator = '';
	return argsArray.join(separator);
};

/// <b>Indent</b>
/// @brief Attach tabs to prettify the output.
String.prototype.Indent = function (level: number): string {
	var message: string = this.toString();
	var fmtMessage : string = '';
	for (var i : number = 0; i < level; i++) {
		fmtMessage += '\t';
	}
	fmtMessage += message;
	return fmtMessage;
}
