module main.shared {
    
    export interface IDataAccessService {
        getProductResource(): any;
    }
    
    // We want an interface for the return type of $resource
    // interface IProductResource extends ng.resource.IResource<main.domain.IProduct> {
    // }
    
    class DataAccessService implements IDataAccessService {
        constructor(private $resource: ng.resource.IResourceService){
            
        }
        
        getProductResource(): any {
            return this.$resource('/api/products/:productId');
        }
    } 
    
    angular
        .module('main.shared')
        .service('dataAccessService', DataAccessService)
        
}
