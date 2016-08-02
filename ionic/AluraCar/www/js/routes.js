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
        url: '/detail',
        templateUrl: 'views/detail.html',
        controller: 'detailController'
      });

  });
