(function() {
    "use strict";
    angular
        .module("common.services")
        .factory("adoptResource", ["$resource", adoptResource]);
        
    function adoptResource($resource){
        return $resource("/api/adopt/:animalId");
    }    
        
}());