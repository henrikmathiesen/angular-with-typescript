/// <reference path="../../typings/tsd.d.ts" />

module main.shared {
    
    interface IStrongTypedDirectiveCtrl {
        name: string;
        msg: string;
    }
    
    interface IStrongTypedDirectiveScope extends ng.IScope {
        strongTypedDirectiveCtrl:IStrongTypedDirectiveCtrl;
    }
    
    // can not inject $scope to top function, but can inject it in controller
    function strongTypedDirective(): ng.IDirective {
        return <ng.IDirective> {
            restrict: 'E',
            replace: true,
            scope: {},
            template: [
                '<div>',
                    '<div>{{::strongTypedDirectiveCtrl.msg}}</div>',
                '</div>'
            ].join(''),
            link: function (scope: IStrongTypedDirectiveScope, $element: ng.IAugmentedJQuery, attrs: ng.IAttributes) {
                console.log("=== LINK, SCOPE ===");
                console.log(scope.strongTypedDirectiveCtrl);
                console.log("=== /LINK, SCOPE ===");
            },
            controller: function ($scope: IStrongTypedDirectiveScope) {
                var strongTypedDirectiveCtrl:IStrongTypedDirectiveCtrl  = this;
                
                strongTypedDirectiveCtrl.msg = "You shall not pass!";
                
                if(strongTypedDirectiveCtrl.name === "Henry") {
                    strongTypedDirectiveCtrl.msg = "You shall pass";
                }
                
                console.log("=== CTRL, SCOPE ===");
                console.log($scope.strongTypedDirectiveCtrl);
                console.log("=== /CTRL, SCOPE ===");
            },
            controllerAs: 'strongTypedDirectiveCtrl',
            bindToController: {
                name: '@'
            }
        }
    }
    
    angular
        .module('main.shared')
        .directive('strongTypedDir', strongTypedDirective);
    
}