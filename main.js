var dogs = [];

var dogContainer = document.getElementById("dogContainer");

function dogList(dogs) {
    var dogBuilder = "";
    var currentDog;
    for (var i = 0; i < dogs.length; i++) {
        currentDog = dogs[i];
        dogBuilder += `<div class="dogs">`;
        dogBuilder += `<h3>${dogs[i].name}</h3>`;
        dogBuilder += `<p>${dogs[i].color}</p>`
        dogBuilder += `</div>`
    }
    dogContainer.innerHTML = dogBuilder;
};



function useForDogs() {

    var dogs = JSON.parse(this.responseText).dogs;
    console.log("dogs", dogs)
    dogList(dogs);
}

function shitsBroke() {
    console.log("what did you do?")
}

function useForBreeds() {

    var breeds = JSON.parse(this.responseText).breeds;
    console.log("breeds", breeds)
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", useForDogs);
myRequest.open("GET", "dogs.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", useForBreeds);
myRequest2.open("GET", "breeds.json");
myRequest2.send();

