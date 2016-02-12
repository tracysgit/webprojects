(function() {

    "use strict";
    angular.module("projectManagement").controller("ProductListCtrl", ["productResource", ProductListCtrl]);


    function ProductListCtrl(productResource) {
        var vm = this;
        
        productResource.query(function(data){
            vm.products = data;
        });
 
        //------ Show/hide the images on the product list ------
        vm.showImage = true;
        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        };


    }



}());