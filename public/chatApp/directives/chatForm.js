angular.module('chatformDirective',[])

.directive('chatForm', function(){
    return {
       templateUrl: 'chatApp/templates/chatForm.html',
       controller: function($scope, $rootScope, chat) {
            $scope.message = "";
            $scope.sendMsg = function() {
                console.log($scope.message);
                if($scope.message){
                    $rootScope.$emit('userMessage',{usermessage: $scope.message});
                    chat.postMessage($scope.message, function(data){
                        var result = data.result;
                        var output = result.fulfillment.speech
                        console.log(result.fulfillment.speech);
                        $rootScope.$emit('serverMessage',{servermessage: output});
                    });
                }
                $scope.message = "";
            }
       }
    }
});