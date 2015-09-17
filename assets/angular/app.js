var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../partials/home.html',
      controller: 'home'
    })
    .when('/createBook', {
      templateUrl: '../partials/createBook.html',
      controller: 'createBook'
    })
    .when('/sign-in', {
      templateUrl: '../partials/sign-in.html',
      controller: 'sign-in'
    })
    .when('/sign-up', {
      templateUrl: '../partials/sign-up.html',
      controller: 'sign-up'
    })
    .when('cart', {
      templateUrl: '../partials/cart.html',
      controller: 'cart'
    })
    .when('/checkout', {
      templateUrl: '../partials/checkout.html',
      controller: 'checkout'
    })
    .when('/thanks', {
      templateUrl: '../partials/thanks.html',
      controller: 'thanks'
    })
    .when('/contact', {
      templateUrl: '../partials/contact.html',
      controller: 'contact'
    })
    .when('/account', {
      templateUrl: '../partials/account.html',
      controller: 'account'
    })
    .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
})
