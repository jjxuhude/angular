define(['angular','service/common.service'],function (angular,serviceModule) {
    serviceModule.factory('$service1',function(){
        return '$service1';
    });

    serviceModule.factory('$service2',function () {
        var $this=this;
        this.name="";
        this.setName=function($name){
            $this.name=$name;
        };
        this.getName=function(){
            return $this.name;
        };
        return this;
    });
    return serviceModule;
});
