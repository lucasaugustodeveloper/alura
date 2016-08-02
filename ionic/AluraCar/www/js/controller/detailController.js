angular.module('starter')
  .controller('detailController', function($stateParams, $scope) {

    $scope.detailCar = angular.fromJson($stateParams.carro);

    $scope.acessorios = [
      {name: 'Freio ABS', price: 800},
      {name: 'MP3/MP4 Player', price: 1000},
      {name: 'Ar Condicionador', price: 1200}
    ];

    $scope.mudou = function(acessorio, isActive) {
      if(isActive) {
        $scope.detailCar.preco = $scope.detailCar.preco + acessorio.price;
      } else {
        $scope.detailCar.preco = $scope.detailCar.preco - acessorio.price;
      }
    };
  });
