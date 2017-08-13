angular.module('chatFactory',[])

.factory('chat', function($http, $log){
    var chatSev = {};
    chatSev.postMessage = function(message, cb) {
        $http({
            url:'/msg',
            method:'POST',
            data: {message:message}
        }).then(function(res){
           cb(res.data);
        }, function(res){
            $log.error("error");
        });
    }
    return chatSev;
})

