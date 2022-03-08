'use strict';

angular.module('myApp.dsr', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dsr', {
    templateUrl: 'dsr/dsr.html',
    controller: 'DSRCtrl'
  });
}])

.controller('DSRCtrl', [function() {
  console.log('Start ----- JS do DSR');
  
  const script = document.createElement('script');
  script.async = true;
  script.type = 'text/javascript';                
  script.src = 'https://privacyflow.development.tec.br/api/v1/dsr/token/620a4d8436a50e001d0f2ac0';
  
  document.head.appendChild(script);
  console.log(script);
  console.log('Finish ----- JS do DSR');

  // const Scripts = [
  //   {name: 'DSRScript', src: 'https://privacyflow.development.tec.br/api/v1/dsr/token/620a4d8436a50e001d0f2ac0'}
  // ]

  // Scripts.forEach((script) => {
  //   this.scripts[script.name] = {
  //     loaded: false,
  //     src: script.src
  //   };
  // });
}]);
