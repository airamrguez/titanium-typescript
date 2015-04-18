# Titanium Typescript

Ambient declarations for the **Titanium Appcelerator API v3.1.3.GA**.

	var ROWS: number = 10;
	var children: Array<Titanium.UI.View> = button.getChildren();
		
	var window: Titanium.UI.Window = Titanium.UI.createWindow({
		title: 'example',
		backgroundColor: 'white'
	});
	
	var tableView: Titanium.UI.TableView = Titanium.UI.createTableView();
	var dataSource: Array<Titanium.UI.TableViewRow> = [];
	
	for (var i: number = 0; i < ROWS; i++) {
		dataSource.push(Titanium.UI.createTableViewRow({
			title: 'Row ' + i,
			hasChild: false
		}));
	}
	
	tableView.data = dataSource;

# Build

To build the project:

    tsc -m commonjs -t ES5 -sourcemap References.ts

The above command line generates the file Generator.js. To generate the _Titanium Mobile_ definitions:

    node Generator.js api.json > titanium.d.ts

# Known issues

*	In `Titanium.Map.View` there is a conflict with the property `animate` and two methods with the same id. The property `animate` has been taken out from the definition.
*	In `Database.ResultSet` the property `fieldCount` has been removed. Instead you can use the method `getFieldCount()`.

# Future work

For future work, it would be interesting to implement **interface inheritance** in order to avoid
repeated inherited methods or properties in subclasses.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/airamrguez/titanium-typescript/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

