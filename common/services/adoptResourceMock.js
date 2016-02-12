(function() {
    "use strict";

    var app = angular
        .module("adoptResourceMock", ["ngMockE2E"]);

    app.run(function($httpBackend) {
        var animals = [{
            "animalId": 1,
            "animalName": "Arthur",
            "animalCode": "GDN-0011",
            "entryDate": "01/09/16",
            "description": "Goofy, energetic and lovable. Arthur has a lot of personality and loves to fetch a ball. He is estimated to be 6 years old, and will keep you hopping.",
            "cost": 9.00,
            "price": 90.00,
            "category": "dog",
            "breed": "Beagle mix",
            "age": "adult",
            "adultWeight": 40,
            "goodWith": "kids, dogs",
            "tags": ["dog", "adult", "short hair"],
            "imageUrl": "images/adopt/arthur.jpg"
        }, {
            "animalId": 2,
            "animalName": "Barney",
            "animalCode": "GDN-0014",
            "entryDate": "01/15/16",
            "description": "Sweet, silly, and loves to walk. Barney is very charismatic and knows it. We think he is 1 to 2 years old. Barney likes to be brushed and sheds very little.",
            "cost": 9.00,
            "price": 120.00,
            "category": "dog",
            "breed": "Pomeranian",
            "age": "young",
            "adultWeight": 20,
            "goodWith": "kids, dogs, cats",
            "tags": ["dog", "young", "long hair"],
            "imageUrl": "images/adopt/barney.jpg"
        }, {
            "animalId": 3,
            "animalName": "Boris",
            "animalCode": "GDN-0028",
            "entryDate": "01/16/16",
            "description": "Cuddly, vocal and even-tempered. This little guy would love to become a part of your family. Boris will make a great friend.",
            "cost": 9.00,
            "price": 200.00,
            "category": "dog",
            "breed": "Husky",
            "age": "puppy",
            "adultWeight": 80,
            "goodWith": "kids, dogs, cats",
            "tags": ["dog", "puppy", "medium hair"],
            "imageUrl": "images/adopt/boris.jpg"
        }, {
            "animalId": 4,
            "animalName": "Fritz",
            "animalCode": "GDN-0031",
            "entryDate": "01/16/16",
            "description": "Observant, eager to please, and a good companion. Fritz likes to have a job and will carry his own leash on walks. He doesn't shed much.",
            "cost": 9.00,
            "price": 120.00,
            "category": "dog",
            "breed": "English sheepdog",
            "age": "adult",
            "adultWeight": 80,
            "goodWith": "kids, dogs",
            "tags": ["dog", "adult", "long hair"],
            "imageUrl": "images/adopt/fritz.jpg"
        }, {
            "animalId": 7,
            "animalName": "Sheldon",
            "animalCode": "GDN-0011",
            "entryDate": "01/02/16",
            "description": "Serious, quiet, likes to work. Sheldon must have spent time around cats and farm animals, because he is very calm around other species.",
            "cost": 9.00,
            "price": 120.00,
            "category": "dog",
            "breed": "Labradoodle",
            "age": "adult",
            "adultWeight": 65,
            "goodWith": "kids, dogs, cats, chickens",
            "tags": ["dog", "adult", "medium hair"],
            "imageUrl": "images/adopt/sheldon.jpg"
        }/* ,{
            "animalId": 6,
            "animalName": "Rusty",
            "animalCode": "GDN-0055",
            "entryDate": "01/04/16",
            "description": "Friendly, smart, and funny",
            "cost": 9.00,
            "price": 120.00,
            "category": "dog",
            "breed": "golden retriever",
            "age": "young",
            "adultWeight": 70,
            "tags": ["dog", "young", "medium hair"],
            "imageUrl": "images/adopt/rusty.jpg"
        }, {
            "animalId": 7,
            "animalName": "Otto",
            "animalCode": "GDN-0076",
            "entryDate": "12/08/15",
            "description": "Quiet, low-key and relaxed",
            "cost": 9.00,
            "price": 120.00,
            "category": "dog",
            "breed": "dalmatian",
            "age": "adult",
            "adultWeight": 75,
            "tags": ["dog", "adult", "short hair"],
            "imageUrl": "images/adopt/otto.jpg"
        }*/];

        var adoptUrl = "/api/adopt";

        $httpBackend.whenGET(adoptUrl).respond(animals);

        var editingRegex = new RegExp(adoptUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function(method, url, data) {

            var animal = {
                "animalId": 0
            };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < animals.length; i++) {
                    if (animals[i].animalId == id) {
                        animal = animals[i];
                        break;
                    }
                }
            }

            return [200, animal, {}];

        });

        $httpBackend.whenPOST(adoptUrl).respond(function(method, url, data) {

            var animal = angular.fromJson(data);

            if (!animal.animalId) {
                // new animal ID
                animal.animalId = animals[animals.length - 1].animalId + 1;
                animals.push(animal);
            } else {
                // updated animal
                for (var i = 0; i < animals.length; i++) {
                    if (animals[i].animalId == animal.animalId) {
                        animals[i] = animal;
                        break;
                    }
                }
            }

            return [200, animal, {}];

        });
        
        //Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();

    });

}());