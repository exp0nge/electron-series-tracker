var angApp = angular.module('app', [])

angApp.controller('MainCtrl', 
	function(){
		var vm = this;
		//window.localStorage.setItem('test', 'Hello World');
		vm.currentTime = window.localStorage.getItem('test');
	})