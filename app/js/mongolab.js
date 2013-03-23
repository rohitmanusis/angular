/*angular.module('mongolab',['ngResource']).
	factory('Mongo', function($resource){
		var Mongo = $resource('http://localhost\\:3000/index.js',
					{},
					{mongodata: {method : 'GET'}
					}
				);
		
		Mongo.prototype.mongodata = function(){
			
		}
	});
var nodejs = $resource('http://localhost\\:3000/index.js',
					{},
					{getData :{
						method : 'POST',
						params : 'entity'
					}});

*/