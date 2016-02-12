(function() {

   "use strict";
   var app = angular.module("projectManagement", 
        ["common.services", 
        "ui.router", 
        /*  "ui-mask", 
        "ui-bootstrap", 
        "angularCharts", */
        "adoptResourceMock", 
        "productResourceMock"]); 
    
 // to hook into real API data, remove the 'productResourceMock' dependency above.

    app.config(["$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "app/welcomeView.html"
                })
                .state("adopt", {
                    url: "/adopt",
                    templateUrl: "app/adopt/adoptListView.html",
                    controller: "adoptListCtrl as vm"
                })
                .state("adoptDetail", {
                    url: "/adopt/detail/:animalId",
                    templateUrl: "app/adopt/adoptDetailView.html",
                    controller: "adoptDetailCtrl as vm",
                    resolve: { 
                         adoptResource: "adoptResource",
                         animal: function(adoptResource, $stateParams){
                             var animalId = $stateParams.animalId;
                             return adoptResource.get({animalId: animalId}).$promise;
                         }    
                    }  
                })
                .state("adoptEdit", {
                    abstract: true,
                    url: "/adopt/edit/:animalId",
                    templateUrl: "app/adopt/adoptEditView.html",
                    controller: "adoptEditCtrl as vm",
                    resolve: { 
                         adoptResource: "adoptResource",
                         animal: function(adoptResource, $stateParams){
                             var animalId = $stateParams.animalId;
                             return adoptResource.get({animalId: animalId}).$promise;
                         }    
                    }
                })
                .state("adoptEdit.info", {
                    url: "/info",
                    templateUrl: "app/adopt/adoptEditInfoView.html"
                })
                .state("calculator", {
                    url: "/jquery/calculator",
                    templateUrl: "app/projects/calculatorView.html",
                    controller: "calculatorCtrl as vm"
                })
                .state("sketchpad", {
                    url: "/jquery/sketchpad",
                    templateUrl: "app/projects/sketchpadView.html",
                    controller: "sketchpadCtrl as vm"
                })
                .state("imageSlider", {
                    url: "/jquery/imageSlider",
                    templateUrl: "app/projects/imageSliderView.html",
                    controller: "imageSliderCtrl as vm"
                })
                .state("randomQuotes", {
                    url: "/jquery/randomQuotes",
                    templateUrl: "app/projects/randomQuotesView.html",
                    controller: "randomQuotesCtrl as vm"
                })
                .state("todoList", {
                    url: "/jquery/todoList",
                    templateUrl: "app/projects/todoListView.html",
                    controller: "todoListCtrl as vm"
                })
                .state("restaurantSearch", {
                    url: "/json/restaurantSearch",
                    templateUrl: "app/projects/restaurantSearchView.html",
                    controller: "restaurantSearchCtrl as vm",
             })
                .state("localWeather", {
                    url: "/json/localWeather",
                    templateUrl: "app/projects/localWeatherView.html",
                    controller: "localWeatherCtrl as vm"
                })
                .state("productList", {
                    url: "/products",
                    templateUrl: "app/products/productListView.html",
                    controller: "ProductListCtrl as vm"
                })
                .state("productEdit", {
                    abstract: true,
                    url: "/products/edit/:productId",
                    templateUrl: "app/products/productEditView.html",
                    controller: "ProductEditCtrl as vm",
                    resolve: { 
                         productResource: "productResource",
                         product: function(productResource, $stateParams){
                             var productId = $stateParams.productId;
                             return productResource.get({productId: productId}).$promise;
                         }    
                    }
                })
                .state("productEdit.info", {
                    url: "/info",
                    templateUrl: "app/products/productEditInfoView.html"
                })
                .state("productEdit.price", {
                    url: "/price",
                    templateUrl: "app/products/productEditPriceView.html"
                })
                .state("productEdit.tags", {
                    url: "/tags",
                    templateUrl: "app/products/productEditTagsView.html"
                })
                .state("productDetail", {
                    url: "/products/:productId",
                    templateUrl: "app/products/productDetailView.html",
                    controller: "ProductDetailCtrl as vm",
                    resolve: { 
                         productResource: "productResource",
                         product: function(productResource, $stateParams){
                             var productId = $stateParams.productId;
                             return productResource.get({productId: productId}).$promise;
                         }    
                    }  
                });

        }]
    );
    
  /*  var onHomePage = false;
    if($stateProvider.state == "home"){
         onHomePage = true;
    } 
    console.log(onHomePage); */
    
}());