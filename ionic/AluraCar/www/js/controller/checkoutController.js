angular.module('starter')
  .controller('checkoutController', function($scope, $stateParams, $ionicPopup, $state, carroService) {

    $scope.checkoutCarro = angular.fromJson($stateParams.carro);

    $scope.pedido = {};
    $scope.finalizarPedido = function() {

      var pedidoFinalizado = {
        params: {
          carro: $scope.checkoutCarro.nome,
          preco: $scope.checkoutCarro.preco,
          nome : $scope.pedido.nome,
          endereco: $scope.pedido.endereco,
          email: $scope.pedido.email
        }
      }

      carroService.salvarPedido(pedidoFinalizado).then(function(dados) {

        $ionicPopup.alert({
          title: 'Parabéns',
          template: 'Sua compra foi finalizada com sucesso'
        }).then(function() {
          $state.go('listagem');
        });
      }, function(erro) {
        $ionicPopup.alert({
          title: 'Ocorreu um erro',
          template: 'Todos os campos são obrigatorios'
        });
      });

    };
  });
