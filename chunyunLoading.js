(function( factory ) {
    if ( typeof define === 'function' && define.amd ) {
        define( [ 'jquery','angular'], factory );
    } else {
        factory( jQuery,angular);
    }
})(function(jQuery,angular){
    var loadingModule = angular.module('chunyun.loading.module',[]);
    loadingModule.directive('loadingView', ['$rootScope', '$loadingViewService', function($rootScope, $loadingViewService) {
        return {
            restrict: 'E',
            scope: {
            },
            compile: function (element, attr) {
                return function ($scope, $element, $attrs) {
                    var html = '<div>'
                        + '<div style="position: fixed;top: 0;right: 0;bottom: 0;left: 0; z-index: 101; background-color: #2F2F2F;opacity:0.5;">'
                        + '</div>' +
                        '<img id="loadingViewImgId" alt="" style="position: fixed; top: 400px; left: 45%; margin-top: -9px; margin-left: -41px;' +
                        'border-radius: 0;background: #dadada;height: 18px;box-shadow: none;overflow: hidden;z-index: 102;" src="gif.gif"/>'
                    '</div>';
                    var panel = jQuery($element).append(html);
                    jQuery(panel).hide();
                    $loadingViewService.setElement(panel);
                }
            }
        };
    }]).service('$loadingViewService',
        [ function(){
            var panelElement;
            var service = {
                open: function(settings){
                    if(!panelElement) return;
                    jQuery(panelElement).show();
                },
                close: function(){
                    if(!panelElement) return;
                    jQuery(panelElement).hide();
                },
                setElement: function(element){
                    panelElement = element;
                }
            };
            return service;
        }]);
});