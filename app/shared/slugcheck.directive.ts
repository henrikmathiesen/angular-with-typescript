/// <reference path="../../typings/tsd.d.ts" />

// From Pluralsight Course
// https://app.pluralsight.com/library/courses/using-typescript-large-angularjs-apps/table-of-contents
//
// Directives are widget like components that are self contained and used through the DOM
// Therefor the code for directives are not used in other parts of the app
// As a result they take on a hybrid approach when writing them in typescript
//
// Since we wont expose the directive to other parts of the app, we do NOT write an interface
// There is also little benefit in writing the directive as a class


// An iifi for clouser
// - return an anonymous object instead of following the Pluralsight course pattern, else ng-annoate wont work

(() : void => {
    
    function slugCheck($timeout: ng.ITimeoutService): ng.IDirective {
        return <ng.IDirective> {
            restrict: 'A',
            scope: {},
            link: function(scope: ng.IScope, $element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
                console.log("SCOPE in link function");
                console.log(scope);
                console.log("/SCOPE in link function");
                $element.on('click', ():void => {
                    $timeout(function(){
                        console.log("using the timeout service");
                    }, 250);
                })
            },
            controller: function($scope: any){
                console.log("SCOPE in controller");
                console.log($scope);
                console.log("/SCOPE in controller");
            },
            controllerAs: 'ctrl',
            bindToController: true
        };
    }
    
    angular
        .module('main.shared')
        .directive('atSlugCheck', slugCheck);
    
})();