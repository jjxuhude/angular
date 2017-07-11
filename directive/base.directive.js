define(['angular','directive/common.directive'],function (angular,directiveModule) {
    "use strict";
    directiveModule.directive('jT1',function(){
        return {
            restrict:'AE',
            templateUrl:'view/list.html',
            replace:true,
            //scope:{'color':'='},
            controller:['$scope','$element','$service2',function ($scope,$element,$service2) {
                // $scope.users=[
                //     {'id':4,'name':'user04'},
                //     {'id':5,'name':'user05'},
                //     {'id':6,'name':'user06'},
                // ];
                $scope.getName=function(name,$element){
                    $service2.setName(name);
                    console.log($service2.getName());
                }

            }]
        }
    });
    return directiveModule;
});