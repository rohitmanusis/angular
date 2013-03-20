'use strict';

/* Controllers */

function EntityCtrl($scope) {
	$scope.types = ["Text", "Checkbox", "Radio", "Textarea", "Collection"];
	$scope.field = [{
		name : 'root',
		type : 'Collection',
		childs : []
	}];

	$scope.fields = $scope.field;

	$scope.add_child = function(parent_node) {
		var child_node = {
			name : '',
			type : 'TEXT',
			childs : []
		};

		if (parent_node.childs) {
			parent_node.childs.push(child_node);
		} else {
			parent_node.childs = [child_node];
		}

	};

	$scope.deleteChild = function(parent_node) {
		parent_node.childs.length = 0;
	};
	
	$scope.add_parent = function(fields) {
		fields.push({
			name : '',
			type : 'TEXT',
			childs : []
		});
	}

}
