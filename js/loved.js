

var savedPhotos = [];
var localStorageValue = localStorage.getItem("savedPhotos");
if (localStorageValue) {
    savedPhotos = JSON.parse(localStorageValue);
}

function lovedImg() {
    if ($(".loveButton").hasClass("loved")) {
        unlovedImg();
    } else {
        $(".love").addClass("loved");
        $(".loved").removeClass("love");
        savePhotos();
    }
}

function unlovedImg() {
    if($(".loveButton").hasClass("loved")) {
        $(".loved").addClass("love");
        $(".love").removeClass("loved");
        removePhotos();
    }
}

function savePhotos() {
    savedPhotos.push(actualPhoto);
    console.log("Foto salva:", actualPhoto);
    localStorage.setItem("savedPhotos", JSON.stringify(savedPhotos));
}

function removePhotos() {
    var index = savedPhotos.indexOf(actualPhoto);
    if (index !== -1) {
        savedPhotos.splice(index, 1);
    }
    console.log("Foto removida:", actualPhoto);
    localStorage.setItem("savedPhotos", JSON.stringify(savedPhotos));
}

function checkLovedPhoto() {
    if (savedPhotos.includes(actualPhoto)) {
        $(".loveButton").addClass("loved");
        $(".loveButton").removeClass("love");
    } else {
        $(".loveButton").addClass("love");
        $(".loveButton").removeClass("loved");
    }
  }

$(function () {
    checkLovedPhoto();
});

