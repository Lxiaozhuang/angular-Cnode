import app from '../bootstrapApp';
app.factory('local',['$window',function($window){
    return{     //储存单个属性
        set :function(key,value){
            $window.sessionStorage[key] = value;
        },      //读取单个属性
        get :function(key,defaultValue){
            return $window.sessionStorage[key] ||defaultValue
        },      //储存对象；以JSON格式储存
        setObject:function(key,value){
            $window.sessionStorage[key] = JSON.stringify(value)
        },      //读取对象
        getObject:function(key){
            return JSON.parse($window.sessionStorage[key] ||'{}');
        },
        removeObject: function (key) {
            $window.sessionStorage.removeItem(key);
        },
        setLo :function(key,value){
            $window.localStorage[key]=value;
        },        //读取单个属性
        getLo:function(key,defaultValue){
            return  $window.localStorage[key] || defaultValue;
        },        //存储对象，以JSON格式存储
        setLoObject:function(key,value){
            $window.localStorage[key]=JSON.stringify(value);
        },        //读取对象
        getLoObject: function (key) {
            return JSON.parse($window.localStorage[key] || '{}');
        },
        removeLoObject: function (key) {
            $window.localStorage.removeItem(key);
        }
    }
}])