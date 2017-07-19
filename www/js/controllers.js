angular.module('app.controllers', [])

  .config(
    function ($ionicConfigProvider) {
      $ionicConfigProvider.views.maxCache(5);

      // note that you can also chain configs
      $ionicConfigProvider.backButton.text('กลับ').icon('ion-ios-arrow-back');
    })

  .controller('regisCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $ionicPopup, $ionicHistory) {

      $scope.gender = [{
          id: "1",
          value: "ชาย",
          bg: "btn-male",
          url: "img/male-disabled.png",
          hover_url: "img/male.png"
        },
        {
          id: "2",
          value: "หญิง",
          bg: "btn-female",
          url: "img/female-disabled.png",
          hover_url: "img/female.png"
        }
      ];

      
      $scope.male = false;
      $scope.female = false;
      $scope.activeButton = function () {
        $scope.male = !$scope.isActive;
        $scope.female = $scope.isActive;
        if ($scope.male == true) {
          $scope.gender = 1;
          console.log($scope.gender);
        } else if ($scope.female == true) {
          $scope.gender = 2;
          console.log($scope.gender);
        } else {
          console.warn("error condition");
        }
      }
      $scope.activeButton1 = function () {
        $scope.male = $scope.isActive;
        $scope.female = !$scope.isActive;
        if ($scope.male == true) {
          $scope.gender = 1;
          console.log($scope.gender);
        } else if ($scope.female == true) {
          $scope.gender = 2;
          console.log($scope.gender);
        } else {
          console.warn("error condition");
        }
      }

      $scope.forgotBdate = function () {
        $scope.data = {};
        var myPopup = $ionicPopup.show({
          template: '<input type="text" ng-model="data.bdate">',
          title: 'ปี พ.ศ. เกิด',
          //subTitle: 'Please use normal things',
          scope: $scope,
          buttons: [{
              text: 'ยกเลิก',
              type: 'button-light'
            },
            {
              text: '<b>บันทึก</b>',
              type: 'button-positive',
              onTap: function (e) {
                if (!$scope.data.bdate) {
                  e.preventDefault();
                } else {
                  return $scope.data.bdate;
                }
              }
            }
          ]
        });

        myPopup.then(function (res) {
          $state.go('regis');
        });
      }


      $scope.regis = function () {
        var alertPopup = $ionicPopup.alert({
          title: 'บันทึกข้อมูล',
          template: 'เรียบร้อย!'
        });

        alertPopup.then(function (res) {
          $state.go('menu', {
            id: '1'
          });
        });
      };

      $ionicHistory.nextViewOptions({
        disableBack: true
      });

    }
  ])

  .controller('loginCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $ionicHistory) {
      //no back
      $ionicHistory.nextViewOptions({
        disableBack: true
      });

    }
  ])

  .controller('menuCtrl', ['$scope', '$stateParams', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicHistory) {


    }
  ])

  .controller('heartCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $ionicPopup) {
      $scope.saveheart = function () {
        var alertPopup = $ionicPopup.alert({
          title: 'บันทึกข้อมูล',
          template: 'เรียบร้อย!'
        });

        alertPopup.then(function (res) {
          $state.go('menu');
        });
      };

    }
  ])

  .controller('blsugarCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $ionicPopup) {
      $scope.saveblsugar = function () {
        var alertPopup = $ionicPopup.alert({
          title: 'บันทึกข้อมูล',
          template: 'เรียบร้อย!'
        });

        alertPopup.then(function (res) {
          $state.go('menu');
        });
      };

    }
  ])

  .controller('egfrCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state) {
      // $scope.gender = [{
      //     id: "1",
      //     value: "ชาย",
      //     bg: "btn-male",
      //     url: "img/male-disabled.png",
      //     active_url: "img/male.png"
      //   },
      //   {
      //     id: "2",
      //     value: "หญิง",
      //     bg: "btn-female",
      //     url: "img/female-disabled.png",
      //     active_url: "img/female.png"
      //   }
      // ];

      $scope.male = false;
      $scope.female = false;
      $scope.activeButton = function () {
        $scope.male = !$scope.isActive;
        $scope.female = $scope.isActive;
        if ($scope.male == true) {
          $scope.gender = 1;
          console.log($scope.gender);
        } else if ($scope.female == true) {
          $scope.gender = 2;
          console.log($scope.gender);
        } else {
          console.warn("error condition");
        }
      }
      $scope.activeButton1 = function () {
        $scope.male = $scope.isActive;
        $scope.female = !$scope.isActive;
        if ($scope.male == true) {
          $scope.gender = 1;
          console.log($scope.gender);
        } else if ($scope.female == true) {
          $scope.gender = 2;
          console.log($scope.gender);
        } else {
          console.warn("error condition");
        }
      }

      $scope.saveEgfr = function () {
        $state.go('menu');
      }
    }
  ])

  .controller('diaryCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state) {
      $scope.diaryset = function () {
        $state.go('diary_set');
      }
      $scope.savediary = function () {
        $state.go('diary_set');
      }
    }
  ])

  .controller('diarySetCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {
      $scope.data = {};
      $scope.setchoice = [{
          id: "1",
          value: "บันทึกน้ำยาล้างไต (ต่อรอบ)"
        },
        {
          id: "2",
          value: "บันทึกน้ำยาล้างไต (ต่อวัน)"
        }
      ];

      $scope.setchoiceChange = function (item) {
        console.log("Selected setchoice, id:", item.id, "value:", item.value);
      };
    }
  ])

  .controller('diaryRoundCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('diaryDayAddCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('diaryRoundAddCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('statusCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $ionicPopup, $ionicHistory) {

      $scope.menu = function () {
        $state.go('menu');
      }
      //3 menus: post,get,amt
      $scope.savepost = function () {
        var alertPopup = $ionicPopup.alert({
          title: 'แจ้งเตือน',
          template: 'อยู่ในระหว่างกำลังพัฒนา'
        });

        alertPopup.then(function (res) {
          $state.go('status');
        });

      }
      $scope.saveget = function () {
        $scope.data = {};
        var myPopup = $ionicPopup.show({
          template: '<input type="number" ng-model="data.amt">',
          title: 'จำนวนน้ำยาที่ได้รับ(ถุง)',
          //subTitle: 'Please use normal things',
          scope: $scope,
          buttons: [{
              text: 'ยกเลิก',
              type: 'button-light',
              onTap: function (e) {
                return true;
              }
            },
            {
              text: '<b>บันทึก</b>',
              type: 'button-positive',
              onTap: function (e) {
                if (!$scope.data.amt) {
                  e.preventDefault();
                } else {
                  return $state.go('status_barcode');
                }
              }
            }
          ]
        });
      }

      $scope.saveamount = function () {
        $scope.data = {};

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
          template: '<input type="number" ng-model="data.wifi">',
          title: 'จำนวนน้ำยาที่เหลือ(ถุง)',
          //subTitle: 'Please use normal things',
          scope: $scope,
          buttons: [{
              text: 'ยกเลิก',
              type: 'button-light'
            },
            {
              text: '<b>บันทึก</b>',
              type: 'button-positive',
              onTap: function (e) {
                if (!$scope.data.wifi) {
                  //don't allow the user to close unless he enters wifi password
                  e.preventDefault();
                } else {
                  return $scope.data.wifi;
                }
              }
            }
          ]
        });

        myPopup.then(function (res) {
          $state.go('status');
        });
      }

      //no back
      $ionicHistory.nextViewOptions({
        historyRoot: false
      });

    }
  ])

  .controller('statusBarcodeCtrl', ['$scope', '$stateParams', '$ionicPopup', '$state', 'Camera', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicPopup, $state, Camera) {

      $scope.takePicture = function (options) {

        var options = {
          quality: 75,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 300,
          targetHeight: 300,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
        };

        Camera.getPicture(options).then(function (imageData) {
          $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function (err) {
          console.log(err);
        });

      };

      $scope.saveimg = function () {
        var alertPopup = $ionicPopup.alert({
          title: 'บันทึกรูปภาพ',
          template: 'เรียบร้อย!'
        });

        alertPopup.then(function (res) {
          $state.go('status');
        });
      };

    }
  ])

  .controller('cameraCtrl', ['$scope', '$stateParams', '$ionicPopup', '$state', 'Camera', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicPopup, $state, Camera) {

      $scope.takePicture = function (options) {

        var options = {
          quality: 75,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 300,
          targetHeight: 300,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
        };

        Camera.getPicture(options).then(function (imageData) {
          $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function (err) {
          console.log(err);
        });

      };


      $scope.saveimg = function () {
        var alertPopup = $ionicPopup.alert({
          title: 'บันทึกรูปภาพ',
          template: 'เรียบร้อย!'
        });

        alertPopup.then(function (res) {
          $state.go('menu');
        });
      };

    }
  ])

  .controller('resultCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('helpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {


    }
  ])

  .controller('typePatientCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state) {
      $scope.data = {};
      $scope.setchoice = [{
          id: "1",
          value: "บุคคลทั่วไป",
          subvalue: "General",
          imgpath: "img/Wkp5kuLuTfmGrBkKHp7s_type1.jpg"
        },
        {
          id: "2",
          value: "เบาหวานหรือความดันโลหิตสูง",
          subvalue: "DM &amp; HT",
          imgpath: "img/ATNBNlwQAaxlLuucsQpP_type2.jpg"
        },
        {
          id: "3",
          value: "โรคไตเรื้อรังหรือผู้ป่วยฟอกเลือด",
          subvalue: "CKD &amp; HD",
          imgpath: "img/q4tnbBViSZKPs8u1GrCi_type3.jpg"
        },
        {
          id: "4",
          value: "ผู้ป่วยล้างไตทางช่องท้อง",
          subvalue: "CAPD",
          imgpath: "img/Dg862C61TUKbEMM9Qy8y_type4.jpg"
        }
      ];

      $scope.general = function () {
        $state.go('regis', {
          id: '1'
        });
      }
      $scope.dmht = function () {
        $state.go('login', {
          id: '2'
        });
      }
      $scope.ckdhd = function () {
        $state.go('login', {
          id: '3'
        });
      }
      $scope.capd = function () {
        $state.go('login', {
          id: '4'
        });
      }
    }
  ])
