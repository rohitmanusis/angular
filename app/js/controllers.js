'use strict';

/* Controllers */

function EntityCtrl($scope) {
	$scope.types = ["Text", "Checkbox", "Radio", "Textarea", "Collection"];
	$scope.field = {
		name : 'root',
		type : 'Collection',
		childs : []
	};

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

}

/*function EntityCtrl($scope) {
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
 */
