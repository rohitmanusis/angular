'use strict';

var app = angular.module("App", []);
app.directive("justRemove", function() {
	console.log('enter in delete');
    return function(scope, element, attrs) {
        element.bind("$destroy", function() {
            console.log("element removed");
        });
    };
});

