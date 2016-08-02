angular.module('starter')
  .controller('listController', function($scope, carroService) {

    carroService.obterCarros().then(function(dados) {
      $scope.listCar = dados;
    });
  });
