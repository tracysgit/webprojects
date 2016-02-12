(function() {

    "use strict";
    angular.module("projectManagement").controller("adoptListCtrl", ["adoptResource", adoptListCtrl]);


    function adoptListCtrl(adoptResource) {
        var vm = this;
        
        adoptResource.query(function(data){
            vm.animals = data;
        });
 
        //------ Show/hide the images on the list ------
        vm.showImage = true;
        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        };

        
    }



}());