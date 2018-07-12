const app = require('../bootstrapApp');

app.controller('allController',['$scope','$location',"$http","local",function($scope,$location,$http,local){
    
        $http({
            method: 'GET',
            url: 'https://cnodejs.org/api/v1/topics',
            params:{
                page:1,
                limit:10
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
          $scope.addId = function(id){
              local.setObject('testID',id)
          }
    
}])
