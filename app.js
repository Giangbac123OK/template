var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "home.html",
      controller: "HomeController"
    })
    .when("/about", {
      templateUrl: "about.html",
      controller: "AboutController"
    })
    .otherwise({
      redirectTo: "/"
    });
});
