'use strict';

/* Controllers */

function EntityCtrl($scope) {
	var ids = [];
	for (var i = 0; i < 5; i++) {
		var id = Math.random();
		ids[i] = id;
	}
	console.log(ids);
	$scope.types = ["Text", "Checkbox", "Radio", "Textarea", "Collection"];

	$scope.fields = [{
		id : ids[0],
		name : '',
		type : 'Text',
		children : []
	}, {
		id : ids[1],
		name : '',
		type : 'Text',
		children : []
	}, {
		id : ids[2],
		name : '',
		type : 'Text',
		children : []
	}, {
		id : ids[3],
		name : '',
		type : 'Text',
		children : []
	}, {
		id : ids[4],
		name : '',
		type : 'Text',
		children : []
	}];

	$scope.addMore = function(fields) {
		id = Math.random();
		ids.push(id);
		fields.push({
			id : id,
			name : '',
			type : 'Text',
			children : []
		});
	}

	$scope.addChildren = function(field) {
		id = Math.random();
		ids.push(id);
		var child_node = {
			id : id,
			name : '',
			type : 'Text',
			children : []
		};
		field.children.push(child_node);

	}
}

// declare a module

var myAppModule = angular.module('myApp', []);

// configure the module.
// in this example we will create a greeting filter

myAppModule.filter('greet', function() {
	return function(name) {
		return 'Hello, ' + name + '!';
	};
}); 






