var dogs = [];
var breeds = [];

function useForDogs() {

    var dogs = JSON.parse(this.responseText).dogs;
    console.log("dogs", dogs)
    gotBreedz(dogs);
    dogList(dogs);
}

function shitsBroke() {
    console.log("what did you do?")
}


var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", useForDogs);
myRequest.open("GET", "dogs.json");
myRequest.send();

function gotBreedz(dogz) {
    var myRequest2 = new XMLHttpRequest();
    myRequest2.addEventListener("load", useForBreeds);
    myRequest2.open("GET", "breeds.json");
    myRequest2.send();

    function useForBreeds() {
        var breeds = JSON.parse(this.responseText).breeds;
    combineArray(dogz, breeds);
    }
}

function combineArray(dogz, breeds) {
    dogz.forEach(function(dog) {
        var currentBreedId = dog["breed-id"];
        breeds.forEach(function(breed) {
            if(currentBreedId === breed.id){
        dog["dogBreed"] = breed.name;
        dog["basePrice"] = breed["base-price"];
        dog["description"] = breed.description;
        dog["finalPrice"] = dog.basePrice + dog["add-on-price"];
            }
        });
    console.log("onedog", dog)
    });
    console.log("alldogs", dogz)
    dogList(dogz);
}

var dogContainer = document.getElementById("dogContainer");

function dogList(dogs) {
    var dogBuilder = "";
    var currentDog;
    for (var i = 0; i < dogs.length; i++) {
        currentDog = dogs[i];
        dogBuilder += `<div class="dogs">`;
        dogBuilder += `<h3>Name: ${dogs[i].name}</h3>`;
        dogBuilder += `<img class="image" src="${dogs[i].url}">`
        dogBuilder += `<div>Color: ${dogs[i].color}</div>`
        dogBuilder += `</div>`
    }
    dogContainer.innerHTML = dogBuilder;
};


















