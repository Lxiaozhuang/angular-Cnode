const app = require('../../bootstrapApp');
app.controller("detailController",["$scope",'$location',"$http","$compile","$stateParams","local",function($scope,$location,$http,$compile,$stateParams,local){
    var id = $stateParams.testID
    $stateParams.testID ? id=$stateParams.testID : id =local.getObject("testID");
    
    // 1.先查询testID是否为null，如果是null、则使用本地的id
    //2.如果不是null就先替换本地的id，然后使用本地id来请求
    $http({
        method: 'GET',
        url: 'https://cnodejs.org/api/v1/topic/'+id
            
    }).then(function successCallback(response) {
        $scope.details=response.data.data;
        console.log(response.data.data);
        var html =$scope.details.content;
        var template = angular.element(html);
        var mobileDialogElement = $compile(template)($scope);
        angular.element($("#contents")).append(mobileDialogElement);
    }, function errorCallback(response) {
           
    });
    $scope.formatDate=function(date){
        if(date){
          return  date.split('T').join(' ').split('.')[0];
        }
      }
}])