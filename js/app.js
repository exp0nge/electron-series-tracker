var angApp = angular.module('app', [])

angApp.controller('MainCtrl', 
	function(){
		var vm = this;
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
		vm.triggerAddSeriesPanel = function(){
			vm.addSeriesPanel = true;	
		}
		vm.addSeries = function() {
			vm.seriesList.append(vm.titleInput, {
				'title': vm.titleInput,
				'release': vm.releaseDateTimeInput,
				'shelve': vm.shelveInput,
				'watched': vm.watchedInput,
				'link': vm.linkInput
			});
		}
	})