var angApp = angular.module('app', [])

angApp.controller('MainCtrl', 
	function(){
		var vm = this;
		vm.triggerAddSeriesPanel = function(){
			if (vm.addSeriesPanel)
				vm.addSeriesPanel = false;
			else
				vm.addSeriesPanel = true;	
		}
		/**
		 * Series Data Structure Definition
		 * pk: increment
		 * title: String
		 * release = DateTime
		 * shelve = Boolean
		 * watched = Boolean
		 * link = String
		 */
		vm.seriesList = window.localStorage.getItem('seriesList');
		if (vm.seriesList == null)
			vm.seriesList = []
		vm.addSeries = function() {
			vm.seriesList.push({
				'title': vm.titleInput
			});
		}
	})