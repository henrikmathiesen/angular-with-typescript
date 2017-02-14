module main.animate {

    interface IAnimate extends ng.IScope {
        selectorToAnimate: string;
        animationClass: string;
        clickIconsToggle: string;
    }
    
    function animate(): ng.IDirective {
        return <ng.IDirective>{
            restrict: 'A',
            scope: {
                selectorToAnimate: '@',
                animationClass: '@',
                clickIconsToggle: '@'
            },
            link: function(scope: IAnimate, $element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void {

                $element.on('click', function(e) {
                    e.preventDefault();

                    angular
                        .element(scope.selectorToAnimate)
                        .toggleClass(scope.animationClass);

                    $element
                        .toggleClass(scope.clickIconsToggle);
                });
            }
        }
    }

    angular
        .module('main.animate')
        .directive('atAnimate', animate);
}



/*
    @ Attribute string binding
	= Two-way model binding
	& Callback method binding
*/
