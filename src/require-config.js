require.config({
    baseUrl:'./',
});

require.config({
    paths:{
        'jquery':"src/jquery.min",
        'angular':'src/angular.min',
        'angular-route':'src/angular-route',
        'text':'node_modules/_text@2.0.15@text/text',
        'domReady':'src/domReady',
    },
    pkgs:[{
        name:'constant',location:'constant/',
        name:'service',location:'service/',
        name:'directive',location:'directive/',
        name:'filter',location:'filter/',
        name:'controller',location:'controller/',
    }],
    shim:{
        'angular':{
            exports:'angular'
        },
        'angular-route':['angular']
    },
    deps : ['src/app']
});


