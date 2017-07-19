angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

    .state('login', {
    url: '/login/:id',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('regis', {
    url: '/regis/:id',
    templateUrl: 'templates/regis.html',
    controller: 'regisCtrl'
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('heart', {
    url: '/heart',
    templateUrl: 'templates/heart.html',
    controller: 'heartCtrl'
  })

  .state('blsugar', {
    url: '/blsugar',
    templateUrl: 'templates/blsugar.html',
    controller: 'blsugarCtrl'
  })

  .state('egfr', {
    url: '/egfr',
    templateUrl: 'templates/egfr.html',
    controller: 'egfrCtrl'
  })

  .state('diary', {
    url: '/diary',
    templateUrl: 'templates/diary.html',
    controller: 'diaryCtrl'
  })

  .state('diary_set', {
    url: '/diary_set',
    templateUrl: 'templates/diary_set.html',
    controller: 'diarySetCtrl'
  })

  .state('diary_round', {
    url: '/diary_round',
    templateUrl: 'templates/diary_round.html',
    controller: 'diaryRoundCtrl'
  })

  .state('diary_d_add', {
    url: '/diary_d_add',
    templateUrl: 'templates/diary_d_add.html',
    controller: 'diaryDayAddCtrl'
  })

  .state('diary_r_add', {
    url: '/diary_r_add',
    templateUrl: 'templates/diary_r_add.html',
    controller: 'diaryRoundAddCtrl'
  })

  .state('status', {
    url: '/status',
    templateUrl: 'templates/status.html',
    controller: 'statusCtrl'
  })

  .state('camera', {
    url: '/camera',
    templateUrl: 'templates/camera.html',
    controller: 'cameraCtrl'
  })

  .state('result', {
    url: '/result',
    templateUrl: 'templates/result.html',
    controller: 'resultCtrl'
  })

  .state('help', {
    url: '/help',
    templateUrl: 'templates/help.html',
    controller: 'helpCtrl'
  })

  .state('type_p', {
    url: '/type_p',
    templateUrl: 'templates/type_p.html',
    controller: 'typePatientCtrl'
  })
  
  .state('status_barcode', {
    url: '/status_barcode',
    templateUrl: 'templates/status_barcode.html',
    controller: 'statusBarcodeCtrl'
  })

$urlRouterProvider.otherwise('/type_p')


});