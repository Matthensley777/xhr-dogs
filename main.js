var dogs = [];

var dogContainer = document.getElementById("dogContainer");

function dogBreeds(dogs) {
    var dogBuilder = "";
    for (var i = 0; i < dogs.length; i++) {
        dogBuilder += `<div class="dogs">`;
        dogBuilder += `<h3>${dogs.name}</h3>`;
        dogBuilder += `<p>${dogs.color}</p>`
        dogBuilder += `<p>${dogs.add-on-price}</p>`
        dogBuilder += `</div>`
    }
    dogContainer.innerHTML = dogBuilder;
};

function useForDogs() {

    var dogs = JSON.parse(this.responseText).dogs;
    console.log("dogs", dogs)
    dogBreeds();
}

function shitsBroke() {
    console.log("what did you do?")
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", useForDogs);
myRequest.open("GET", "dogs.json");
myRequest.send();

console.log(myRequest)