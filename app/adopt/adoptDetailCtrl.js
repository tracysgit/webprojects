(function() {

    "use strict";
    angular
        .module("projectManagement")
        .controller("adoptDetailCtrl", ["animal", "adoptService", adoptDetailCtrl]);


    function adoptDetailCtrl(animal, adoptService) {
        var vm = this;
        
        vm.animal = animal;  
        
        vm.title = "Adopt-a-Dog:  " + vm.animal.animalName;
        vm.marginPercent = adoptService.calculateMarginPercent(vm.animal.price, vm.animal.cost);
        
        if(vm.animal.tags){
            vm.animal.tagList = vm.animal.tags.toString();
        }

    }

}());