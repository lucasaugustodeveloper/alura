angular.module('starter')
  .controller('listController', function($scope) {

    $scope.listCar = [
      {name: 'BMW', modelo: '120i'},
      {name: 'Onix', modelo: '1.6'},
      {name: 'Fiesta', modelo: '2.0'},
      {name: 'C3', modelo: '1.0'},
      {name: 'Uno', modelo: 'Fire'},
      {name: 'Sentra', modelo: '2.0'},
      {name: 'Astra Sedan', modelo: '1.8'},
      {name: 'Vectra Turbo', modelo: '2.0'},
      {name: 'Hilux', modelo: '4x4'},
      {name: 'Montana Cabine Dupla', modelo: '2.0'},
      {name: 'Outlander', modelo: '2.4'},
      {name: 'Fusca 1500', modelo: '1985'}
    ];

  });
