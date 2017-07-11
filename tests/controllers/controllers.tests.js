/**
 * Created by JR on 7/7/2017.
 */
describe('Controllers', function(){
  var scope;

  // load the controller's module
  beforeEach(module('starter.controllers'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('AccountCtrl', {$scope: scope});
  }));


  it('comprobar password minimó 8 digitos', function(){
    var pass = "colombia";
    expect(scope.validatePassword(pass)).toEqual(true);
  });

  it('validar password menos 8 digitos', function(){
    var pass = "gateway";
    expect(scope.validatePassword(pass)).toEqual(false);
  });

  it('validar email correcto', function(){
    var mail = "holamundo@gmail.com";
    expect(scope.validateEmail(mail)).toEqual(true);
  });

  it('validar email incorrecto', function(){
    var mail = "holamundo@gmail";
    expect(scope.validateEmail(mail)).toEqual(false);
  });

});
