({
    baseUrl:'./',
    appDir: './',
    dir:'build',
    modules: [
        {name: "src/app"},
    ],
    fileExclusionRegExp: /^(r\.js|build\.js|node_modules)$/,
    optimizeCss: 'standard',
    removeCombined:true,
    paths:{
        'jquery':"src/jquery.min",
        'angular':'src/angular.min',
        'angular-route':'src/angular-route',
        'text':'node_modules/_text@2.0.15@text/text',
        'domReady':'src/domReady',
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'angular-route':['angular']
    },
})