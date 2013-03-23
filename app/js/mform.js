'use strict';

var mform = angular.module('mForm', []);
mform.directive('mForm', function($templateCache){

		$templateCache.put('mform.checkbox.html', '<input type="checkbox" class="{{element.class}}" ng-model="element.value" />')
		$templateCache.put('mform.text.html', '<input type="input" ng-model="element.value" />')
		$templateCache.put('mform.textarea.html', '<input type="input" ng-model="element.value" />')
		$templateCache.put('mform.text.html', '<input type="input" ng-model="element.value" />')

		$templateCache.put('mform.html', '<form class="form-horizontal">' +
		'<div class="control-group" ng-repeat="element in formOptions.elements">' +
		'<label class="control-label" for="{{element.name}}">{{element.name}}</label>' +
		'<div class="controls" ng-include="element.template">' +
		'</div></div></form>');

		return{
			restrict : 'A',	
			compile: function(element, attrs) {
				return function($scope, element, attrs) {
					$scope.formOptions = $scope.$eval(attrs.mForm);
					for(var i in $scope.formOptions.elements) {
						var element = $scope.formOptions.elements[i];
						if(!element.template) {
							element.template = "mform." + element.type + ".html";
						}
					}
				}
			},
			templateUrl: 'mform.html'
		};
});