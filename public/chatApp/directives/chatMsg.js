angular.module('chatmsgDirective',[])


.directive('messageItem', function(chat, $compile) {
    return {
        restrict: "E",
        controller: function($scope, $element) {
            $scope.$on('userMessage', function(e, data){
                console.log("event emitted " + data.usermessage);
                $scope.msg = data.usermessage;
                var el  = $compile('<p>'+$scope.msg+'</p>')($scope);
                $element.parent().append( el );
            });
            $scope.$on('serverMessage', function(e, data){
                console.log("event emitted " + data.servermessage);
                $scope.sMsg = data.servermessage;
                var el  = $compile('<p>'+$scope.sMsg+'</p>')($scope);
                $element.parent().append( el );
            });
        }
    }
});