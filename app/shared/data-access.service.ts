/// <reference path="../../typings/tsd.d.ts" />

module main.shared {
    
    interface IDataAccessService {
        getProductResource(): ng.resource.IResourceClass<IProductResource>;
    }
    
    // We want an interface for the return type of $resource
    interface IProductResource extends ng.resource.IResource<main.domain.IProduct> {
        
    }
    
    export class DataAccessService implements IDataAccessService {
        constructor(private $resource: ng.resource.IResourceService){
            
        }
        
        getProductResource(): ng.resource.IResourceClass<IProductResource> {
            return this.$resource('/api/products/:productId');
        }
    } 
    
    angular
        .module('main.shared')
        .service('dataAccessService', DataAccessService)
        
}