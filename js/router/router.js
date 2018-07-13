const app = require('../bootstrapApp')

app.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider.state("all",{
            url: '/',   
            templateUrl:'../tpl/all.html',
            controller:'allController'
        }).state("detail",{
            url:'/detail',
            params:{"testID":null},
            templateUrl:'../tpl/detail/detail.html',
            controller:'detailController'
        }).state("ask",{
            url:'/ask',
            templateUrl:'../tpl/ask/ask.html',
            controller:'askController'
        }).state("good",{
            url:'/good',
            templateUrl:'../tpl/good/good.html',
            controller:'goodController'
        }).state("share",{
            url:'/share',
            templateUrl:'../tpl/share/share.html',
            controller:'shareController'
        }).state("job",{
            url:'/job',
            templateUrl:'../tpl/job/job.html',
            controller:'jobController'
        }).state("dev",{
            url:'/dev',
            templateUrl:'../tpl/dev/dev.html',
            controller:'devController'
        }).state("login",{
            url:'/login',
            templateUrl:'../tpl/login/login.html',
            controller:'loginController'
        })
}])