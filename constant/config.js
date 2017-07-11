define(['angular'],function(angular){
    "use strict";
    var constantModule=angular.module('app.constant',[]);
    constantModule.constant('WEB','http://www.hao123.com');
    constantModule.constant('WEB_NAME','444');
    return constantModule;
});
