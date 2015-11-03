var app = angular.module('app', [])

app.controller('MainCtrl', 
	function(){
		var vm = this;
		vm.currentTime = new Date();
	})