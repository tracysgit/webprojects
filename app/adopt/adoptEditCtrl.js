(function() {

    "use strict";
    angular
        .module("projectManagement")
        .controller("adoptEditCtrl", ["animal", "$state", "adoptService", adoptEditCtrl]);


    function adoptEditCtrl(animal, $state, adoptService) {
        var vm = this;
        vm.animal = animal;
        vm.priceOption = "percent";
        
        vm.marginPercent = function(){
            return adoptService.calculateMarginPercent(vm.animal.price, vm.animal.cost);
        };
        
        // Calculate the price based on a markup
        vm.calculatePrice = function(){
            var price = 0;
            if (vm.priceOption == 'amount'){
                price = adoptService.calculatePriceFromMarkupAmount(vm.animal.cost, vm.markupAmount);
            }
            if (vm.priceOption == 'percent'){
                price = adoptService.calculatePriceFromMarkupPercent(vm.animal.cost, vm.markupPercent);
            }
            vm.animal.price = price;
        };
        
        
        if(vm.animal && vm.animal.animalId){
            vm.title = "Adopt-a-Dog Edit:  " + vm.animal.animalName;
        } else {
            vm.title = "Add New Animal";
        }
        
        vm.open = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            
            vm.opened = !vm.opened;
        };
        
        vm.submit = function(){
            vm.animal.$save(function(data){
                toastr.success("Save Successful");
            });
        };
        
        vm.cancel = function(){
            $state.go('adopt');
        };
        
        vm.addTags = function(tags){
            if(tags){
                var array = tags.split(',');
                vm.animal.tags = vm.animal.tags ? vm.animal.tags.concat(array) : array;
                vm.newTags = "";
            } else {
                alert("Please enter one or more tags separated by commas");
            }
        };
        
        vm.removeTag = function(idx){
            vm.animal.tags.splice(idx, 1);  
        };
        
    }

}());