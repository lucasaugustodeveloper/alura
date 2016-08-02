angular.module('starter')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('listagem');

    $stateProvider
      .state('listagem', {
        url: '/listagem',
        templateUrl: 'views/listagemCarros.html',
        controller: 'listController'
      })
      .state('detail', {
        url: '/detail/:carro',
        templateUrl: 'views/detail.html',
        controller: 'detailController'
      })
      .state('checkout', {
        url: '/checkout/:carro',
        templateUrl: 'views/checkout.html',
        controller: 'checkoutController'
      });

  });
