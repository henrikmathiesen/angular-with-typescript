/// <reference path="../../typings/tsd.d.ts" />

module main.animate {
    
    interface IAnimate {
        
    }
    
    class AnimateCtrl implements IAnimate {
        constructor() {
            console.log("AnimateCtrl!");
        }
    }
    
    angular
        .module('main.animate')
        .controller('animate', AnimateCtrl);
    
}