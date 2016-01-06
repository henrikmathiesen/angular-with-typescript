/// <reference path="../../typings/tsd.d.ts" />

interface IMainModel {
    title: string;
}

class MainCtrl implements IMainModel {
    title: string;
    
    constructor(){
        this.title = "Acme Product Management"
        console.log("main ctrl");
    }
}

angular
    .module('main')
    .controller('main', MainCtrl);