'use strict';
var app = angular.module("App", []);
app.directive("justRemove", function() {
    return function(scope, element, attrs) {
        element.bind("$destroy", function() {
            console.log("element removed");
        });
    };
});

/* Controllers */

function EntityCtrl($scope) {
	var id = Math.floor(Math.random() * 100000);
	$scope.types = ["Text", "Checkbox", "Radio", "Textarea", "Collection"];

	$scope.fields =[{
		id : id,
		name : 'root',
		type : 'Collection',
		fields : []
	}];


	$scope.add_child = function(parent_node) {
		var id = Math.floor(Math.random() * 100000);
		var child_node = {
			id : id,
			name : '',
			type : 'TEXT',
			fields : []
		};

		if (parent_node.fields) {
			parent_node.fields.push(child_node);
		} else {
			parent_node.fields = [child_node];
		}

	};

	$scope.delete_child = function(parent_node) {
		parent_node.fields.length = 0;
	};

	$scope.add_parent = function(fields) {
		var id = Math.floor(Math.random() * 100000);
		fields.push({
			id : id,
			name : '',
			type : 'TEXT',
			fields : []
		});
	};

	$scope.check_child_length = function(child) {
		var child_length = 0;
		$scope.child_length = child.length;
		console.log($scope.child_length);
	};

	$scope.delete_node = function(index, parent) {
		console.log(parent);
		if(!parent) {
			parent = $scope;
		}
		console.log(parent.fields);
		parent.fields.splice(index, 1);
	};
	
}
