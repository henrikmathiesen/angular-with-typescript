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

(() : void => {
    
    function slugCheck($timeout: ng.ITimeoutService): ng.IDirective {
        var directive = <ng.IDirective> {
            restrict: 'A',
            scope: {},
            link: function(scope: ng.IScope, $element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {
                $element.on('click', ():void => {
                    console.log("WATCHING");
                })
            }
        };
        
        return directive;
    }
    
    angular
        .module('main.shared')
        .directive('atSlugCheck', slugCheck);
    
})();