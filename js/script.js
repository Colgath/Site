(function() {
  var app = angular.module('checklist', []);

  app.controller('ListController', function(){
    this.tasks = tasks;
	
	this.removeTask = function(task) {
      tasks.splice(task,1);	  
    };
  });

  app.controller('ChecklistController', function() {
    this.task= {};

    this.addTask = function(tasks) {
      tasks.push(this.task);
      this.task = {};
    };
  });

var tasks = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	}, {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	}, {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	}
  ];
  
})();
