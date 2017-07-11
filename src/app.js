define(['angular','angular-route','constant/config','service/all.service','directive/all.directive','filter/all.filter','controller/all.controller','domReady!'],function(angular){
    var app=angular.module('app',['app.constant','app.service','app.directive','app.filter','app.controller','ngRoute']);
    app.config(['$routeProvider', function($routeProvider) {
        /* $routeProvider 就相当于交通警察，根据when和otherwise指挥路由走向 */
        $routeProvider
            .when('/', {
                // 当请求的“URL” / , 找当前定义控制器和视图
                controller: 'test',
                template: '<h1>{{name}}</h1>'
            })
            .when('/base', {
                // 当请求的“URL” / , 找当前定义控制器和视图
                controller: 'base',
                template: '<h1>{{color}}</h1>'
            })
            .when('/test/:id', {
                // 当请求的“URL” / , 找当前定义控制器和视图
                controller: 'test',
                template: '<h1>{{name}}</h1>'
            })
            .when('/floor1/1', {
                controller: 'Floor1',
                templateUrl: 'tmpl'
            })
            /* 这里用:id这种形式来保存路由参数，以便后来用$routeParams可以取到 */
            .when('/floor2/:id/:name/:age', {
                controller: 'Floor2',
                templateUrl: 'tmpl'
            })
            .otherwise({
                /* 都不匹配，定向到根目录 */
                redirectTo: '/'
            });
    }]);
    angular.bootstrap(document,['app']);
    return app;
});
