var app = angular.module("app",[]);

app.controller("mainController",function maincontroller(){
  var vm = this;
  vm.nombre = "abogados";

vm.cambiarNombre = function(){
    vm.nombre = "asd";
}
});
app.controller("contactoController",function(){
var vm =this;

vm.enviar = function(informacion){
console.log(informacion);
vm.informacion = informacion;
}
});
