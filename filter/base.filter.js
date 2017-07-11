define(['angular','filter/common.filter'],function (angular,filterModule) {
    "use strict";
    filterModule.filter('filter1',['WEB','WEB_NAME',function(WEB,WEB_NAME){
        return function(string){
            return string+" "+WEB+" "+WEB_NAME;
        }
    }]);
    return filterModule;
});
