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

      // get the id
      $scope.id = $stateParams.id;
      console.log("Type Patient:", $scope.id);

      // $scope.gender = [{
      //     id: "1",
      //     value: "ชาย",
      //     bg: "btn-male",
      //     url: "img/male-disabled.png",
      //     hover_url: "img/male.png"
      //   },
      //   {
      //     id: "2",
      //     value: "หญิง",
      //     bg: "btn-female",
      //     url: "img/female-disabled.png",
      //     hover_url: "img/female.png"
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
      // get the id
      $scope.id = $stateParams.id;
      console.log("Type Patient:", $scope.id);
      //no back
      $ionicHistory.nextViewOptions({
        disableBack: true
      });

    }
  ])

  .controller('menuCtrl', ['$scope', '$stateParams', '$ionicHistory', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicHistory, $state) {

      // get the id
      $scope.id = $stateParams.id;
      console.log("Type Patient:", $scope.id);

      $scope.buttonRow = [];

      $scope.allButtons = [{
          "ref": "heart",
          "src": "img/dIFJqsiZQ0ayUWSaFu46_S_5628419180894.jpg"
        },
        {
          "ref": "blsugar",
          "src": "img/FmVYDEiTm2jrUSDTrt8g_bs.png"
        },
        {
          "ref": "egfr",
          "src": "img/kLoqFvw9Rcijk2lpdaiw_S_5628416637045.jpg"
        },
        {
          "ref": "diary",
          "src": "img/cCNNksmuTpSvGZSp8zmw_icon_dpd.png",
          "disable": true
        },
        {
          "ref": "status",
          "src": "img/jxgVy9wtQq2xx8KB3tWB_status_drug.png",
          "disable": true
        }, {
          "ref": "camera",
          "src": "img/nCSG6GQvTgmBZNhcYBmj_wound_cam.png",
          "disable": true
        }, {
          "ref": "result",
          "src": "img/JHqg9gFkQluzaraFVrj4_ckdresult-01.png"
        }, {
          "ref": "help",
          "src": "img/AFHSRosFQGSi4X5VTjyo_howtopng.png"
        }, {
          "ref": "null",
          "src": "" //หารูป transparent
        }
      ]

      let currentIndex = 0;
      for (var index = 0; index < 3; index++) {
        if (currentIndex >= $scope.allButtons.length) {
          break;
        }
        let a = currentIndex;
        for (var j = a; j < a + 3; j++) {
          var element = $scope.allButtons[j];
          if ($scope.buttonRow[index] == null) $scope.buttonRow[index] = [];
          if ($scope.id < 4) {
            if (!element.disable) $scope.buttonRow[index].push(element);

          } else $scope.buttonRow[index].push(element);
          console.info(j, currentIndex, element);
          currentIndex++;
          if (currentIndex >= $scope.allButtons.length) {
            break;
          }
        }

      }

      $scope.menugo = function (data) {
        //console.log(data);

        if (data == "heart") {
          $state.go('heart');
        } else if (data == "blsugar") {
          $state.go('blsugar');
        } else if (data == "egfr") {
          $state.go('egfr');
        } else if (data == "diary") {
          $state.go('diary');
        } else if (data == "status") {
          $state.go('status');
        } else if (data == "camera") {
          $state.go('camera');
        } else if (data == "result") {
          $state.go('result');
        } else if (data == "help") {
          $state.go('help');
        }

      }

    } //end function
  ])
  .controller('blankCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $ionicPopup) {}
  ])

  .controller('heartCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $ionicPopup) {


      $scope.bpInt =  { "value" : $stateParams.bpInt };
      $scope.bpLow =  { "value" : $stateParams.bpLow };
      $scope.hrate =  { "value" : $stateParams.hrate };
      $scope.weight =  { "value" : $stateParams.weight };

      $scope.water =  { "value" : $stateParams.water };
      $scope.urine =  { "value" : $stateParams.urine };
      
      $scope.saveheart = function () {
        
        var alertPopup = $ionicPopup.alert({
          title: 'ผลสรุป',
          template: 'ผลสรุปค่าความดัน' +
            '<br> ' + $scope.bpInt.value +' '+ $scope.bpLow.value +
            '<br>อัตราการเต้นของหัวใจ' +
            '<br> ' + $scope.hrate.value +
            '<br>ค่า BMI' +
            '<br> ' + $scope.weight.value +
            '<br>กดเพื่ออ่านความรู้เพิ่มเติม' +
            '<br>กดเพื่ออ่านเรื่องลดเค็มลดโรค'
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

  .controller('diaryCtrl', ['$scope', '$stateParams', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $ionicPopup) {

      // get the diarytype
      $scope.diarytype = $stateParams.diarytype;
      console.log("diarytype:", $scope.diarytype);

      $scope.diaryset = function () {
        $state.go('diary_set');
      }
      $scope.savediary = function () {
        if (!$scope.diarytype) {
          console.warn("$scope.diarytype not found");
          var alertPopup = $ionicPopup.alert({
            title: 'แจ้งเตือน',
            template: 'ยังไม่ได้ตั้งค่าการบันทึก'
          });

          alertPopup.then(function (res) {
            $state.go('diary');
          });

        } else {
          if ($scope.diarytype == 1) {
            $state.go('diary_round');
          } else if ($scope.diarytype == 2) {
            $state.go('diary_d_add');
          }
        }
      }

    }
  ])

  .controller('diarySetCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state) {
      $scope.data = {};
      $scope.setchoice = [{
          diarytype: "1",
          value: "บันทึกน้ำยาล้างไต (ต่อรอบ)"
        },
        {
          diarytype: "2",
          value: "บันทึกน้ำยาล้างไต (ต่อวัน)"
        }
      ];

      $scope.setchoiceChange = function (item) {
        console.log("diarytype:", item.diarytype, "value:", item.value);
        $state.go('diary', {
          "diarytype": item.diarytype
        });
      };
    } //end function
  ])

  .controller('diaryRoundCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state) {

      $scope.in_vol = $stateParams.in_vol;
      $scope.out_vol = $stateParams.out_vol;
      console.info('in:' + $stateParams.in_vol + ' out:' + $stateParams.out_vol);
      $scope.round = [{ in: [],
        out: []
      }];
      $scope.addItem = function (item) {

        $scope.round.push(item);
        $scope.item = { in: [],
          out: []
        };
      };
      $scope.currentDate = new Date();

      $scope.saveround = function () {
        $state.go('diary');
      }
      $scope.addround = function () {
        $state.go('diary_r_add');
      }

    } //end function
  ])

  .controller('diaryDayAddCtrl', ['$scope', '$stateParams', '$ionicPopup', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $ionicPopup, $state) {
      $scope.currentDate = new Date();

      $scope.hide_loss = function () {
        $scope.isDisabled = true;
        if ($scope.loss) {
          $scope.isDisabled1 = false;
        }
      }
      $scope.hide_profit = function () {
        $scope.isDisabled1 = true;
        if ($scope.profit) {
          $scope.isDisabled = false;
        }
      }

      $scope.saveday = function () {
        var alertPopup = $ionicPopup.alert({
          title: 'บันทึกข้อมูล',
          template: 'เรียบร้อย!'
        });

        alertPopup.then(function (res) {
          $state.go('diary');
        });
      }

      
    } //end function
  ])

  .controller('diaryRoundAddCtrl', ['$scope', '$stateParams', '$state', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state, $ionicHistory) {

      $scope.addround = function () {
        $state.go('diary_round', {
          in_vol: '2000',
          out_vol: '2000'
        });
      }
      //no back
      $ionicHistory.nextViewOptions({
        historyRoot: false
      });

    } //end function
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
          template: '<input type="number" ng-model="data.amtwarn">',
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
                if (!$scope.data.amtwarn) {
                  e.preventDefault();
                } else {
                  return $scope.data.amtwarn;
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

    } //end function
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
