/// <reference path="../../typings/tsd.d.ts" />

module main.animate {
    
    interface IAnimate {
        
    }
    
    class AnimateCtrl implements IAnimate {
        constructor() {
            console.log("AnimateCtrl!");
            console.log(this);
        }
        
    }
    
    angular
        .module('main.animate')
        .controller('animate', AnimateCtrl);
    
}