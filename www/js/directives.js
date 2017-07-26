angular.module('app.directives', [])

.directive('heartDirective', [function(bpInt){
 return{
        restrict: 'A',
        link: function($scope, $element,$attr){
            $timeout(function(){
                    $element.on('tap', function(){
                      //the function you want to perform on tap
			alert("Just been Clicked");
                    });
            });
        }
    };
}]);