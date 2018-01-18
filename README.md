chunyunloading.js

交流QQ：2394473986

Demo

<loading-view></loading-view>

'use strict';
angular.module('demoApp', [
    'chunyun.loading.module',
])
    .controller('DemoControllers', ['$loadingViewService', '$http',
        function ( $loadingViewService, $http) {
            $scope.demoFun = function () {
                $loadingViewService.open();
                $http({method: 'GET', url: ''}).
                success(function (response, status, headers, config) {
                    $loadingViewService.close();
                });
            }

    }]);