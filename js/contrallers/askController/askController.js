const app = require('../../bootstrapApp');

app.controller('askController',['$scope','$location',"$http",function($scope,$location,$http){
    
    $http({
        method: 'GET',
        url: 'https://cnodejs.org/api/v1/topics',
        params:{
            page:1,
            limit:10,
            tab:"ask",
        }
    }).then(function successCallback(response) {
            $scope.lists=response.data.data
            console.log(response.data.data)
            $scope.length =  $scope.lists.length   
            $scope.num=1;
        }, function errorCallback(response) {
           
    });
    $scope.formatDate=function(date){
        if(date){
          return  date.split('T').join(' ').split('.')[0]
        }
      }
      $scope.next=function(){
        $http({
            method: 'GET',
        url: 'https://cnodejs.org/api/v1/topics',
        params:{
            page:$scope.num+1,
            limit:10
        }
        }).then(function successCallback(response){
            $scope.lists=response.data.data
            console.log(response.data.data)
            $scope.length =  $scope.lists.length  
            $scope.num++;  
            console.log('num',$scope.num)
        }, function errorCallback(response) {
        })
    }
    $scope.prev=function(){
        if($scope.num==1){
            $scope.num==1
        }else{
            $http({
                method: 'GET',
                url: 'https://cnodejs.org/api/v1/topics',
                params:{
                    page:$scope.num+1,
                    limit:10
                }
            }).then(function successCallback(response){
                $scope.lists=response.data.data
                console.log(response.data.data)
                $scope.length =  $scope.lists.length  
                $scope.num--;  
                console.log('num',$scope.num)
            }, function errorCallback(response) {
            })
        }
    }
    $scope.addPages=function(){
        if(!($scope.pages*1)){
            alert("请输入数字")
        }else if($scope.pages*1<1){
            alert("请输入正确的页数")
        }else{
            
            $http({
                method: 'GET',
                url: 'https://cnodejs.org/api/v1/topics',
                params:{
                    page:$scope.pages*1,
                    limit:10
                }
            }).then(function successCallback(response){
                
                $scope.lists=response.data.data
                console.log(response.data.data)
                $scope.length =  $scope.lists.length  
                $scope.num = $scope.pages*1;  
                console.log('num',$scope.num)
            }, function errorCallback(response) {
            })
        }
    } 
}])