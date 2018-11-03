let app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/test.html',
    controller: 'studentsCtrl',
    controllerAs: 'students'
  });

})