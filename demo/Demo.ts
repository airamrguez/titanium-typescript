/// <reference path='../titanium.d.ts' />

function main () {
	var ROWS: number = 10;
	var j : Titanium.XML.Node;
	/*j.text;*/
	Titanium.bubbleParent;
	var label : Titanium.UI.Label;
	var button: Titanium.UI.Button = Titanium.UI.createButton();
	var view : Titanium.UI.View = Titanium.UI.createView();
	button.add (view);
	button.top = 3;
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



    var animation: Titanium.UI.Animation = Titanium.UI.createAnimation({
        curve: Titanium.UI.ANIMATION_CURVE_EASE_OUT
    });
    animation.curve = Titanium.UI.ANIMATION_CURVE_EASE_IN;

    Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.GRAY;



    button.addEventListener('singletap', function(){});

    
}

main();