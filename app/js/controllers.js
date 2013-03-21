'use strict';
/* Controllers */

/*<form m-form='formOptions'></form>  
formOptions is the variable we are going to bind to where we will initialize our form options.
var formOptions = {
	elements: [{name: 'name', type: 'text', required: true}, 
			{name: 'dob', type: 'date'}]
};


template: "<form>
	<ng-repeat>
		<ul>
		<li><label></label>
		{if type ="text"}
			use text template
		{/if}	
		<li>
		</ul>
	</ng-repeat> 

</form>";
*/
function EntityCtrl($scope) {
	var id = Math.floor(Math.random() * 100000);
	$scope.types = ["Text", "Checkbox", "Radio", "Textarea", "Collection"];

	$scope.fields = [{
		id : id,
		name : '',
		type : 'Text',
		fields : [],

	}];

	$scope.add_child = function(parent_node) {
		var id = Math.floor(Math.random() * 100000);
		var child_node = {
			id : id,
			name : '',
			type : 'TEXT',
			fields : [],

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
			fields : [],

		});
	};

	$scope.check_child_length = function(child) {
		var child_length = 0;
		$scope.child_length = child.length;
	};

	$scope.delete_node = function(index, parent) {
		var r = confirm("Warning! you're going to delete the node and its child.");
		if (r == true) {
			if (!parent) {
				parent = $scope;
			}
			parent.fields.splice(index, 1);
		}
	};
	var visible = [];
	$scope.settings = function(index, parent) {
		var position = visible.indexOf(index);
		if (position === -1) {
			visible.push(index);
			return;
		}
		visible.splice(position, 1);
		//$scope.showHide = !$scope.showHide;
	};
	$scope.shouldShow = function(index, parent) {
		console.log(index);
		return visible.indexOf(index) != -1;
	};

}
