'use strict';
angular.module('mformModule',[])
	.directive('mform',function(){
		return{
			restrict : 'C',	
			controller: function($scope, $element){
				$scope.formOptions = [
							{name : 'Name',type :'text',value:""},
							{name : 'DOB',type: 'date',value:""},
							{name : 'Gender',type: 'radio',value:""},
							{name : 'Checkbox',type: 'checkbox',value:true},
							{name : 'Textarea', type: 'textarea',value:""}
						];
				$scope.submit =  function(data){
					console.log(data);
				}
			},
			
			template : 	'<form style ="border:1px solid; background:#EEEEEE" class="form-inline">'+	
						'<ul>'+
						'<li ng-repeat = "field in formOptions" ng-switch on="field.type">'+
							'{{field.name}} : <input ng-switch-default ng-model="field.value" type ="{{field.type}}"/>'+
							
							'<span ng-switch-when = "radio">'+
								'<input ng-model="field.value" name= "field.name" type ="{{field.type}}" value="male"/> Male'+
								'<input ng-model="field.value" name= "field.name" type ="{{field.type}}" value="female"/>Female'+
							'</span>'+
							'<textarea ng-model = "field.value" ng-switch-when = "textarea" rows="4" cols="20" name ={{field.name}} type ="{{field.type}}">'+
							'</textarea>'+
						'</li>'+
						'<li>'+
						'<button ng-click = "submit(formOptions)"/>'+
						'Submit</button>'+
						'</li>'+
						'</ul>'+
						'</form>'
		};
})

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
