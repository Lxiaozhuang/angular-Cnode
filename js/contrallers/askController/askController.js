const app = require('../../bootstrapApp');

app.controller('askController',['$scope','$location',"$http",function($scope,$location,$http){
    
    $http({
        method: 'GET',
        url: 'https://cnodejs.org/api/v1/topics',
        params:{
            page:1,
            limit:20,
            tab:"ask",
        }
    }).then(function successCallback(response) {
        $scope.lists=response.data.data
            console.log(response.data.data)
            
        }, function errorCallback(response) {
           
    });
    $scope.formatDate=function(date){
        if(date){
          return  date.split('T').join(' ').split('.')[0]
        }
      }

}])