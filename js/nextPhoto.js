var actualPhoto = $("img.actualcard").prop("src");
var i = 1;

function updateActualPhoto() {
    $("img.actualcard").prop("src", arrayPhotos[i]);
    actualPhoto = $("img.actualcard").prop("src");
    i++
}

function checkIndexLength() {  
    if (i >= arrayPhotos.length) {
        i = 0;
    }
}

function animateCard() {
    $("img.card").addClass("card-out");
    setTimeout(function() {
    $("img.card").removeClass("card-out");
    }, 100);
}

function displayNextPhoto() {
    animateCard();
    updateActualPhoto();
    checkLovedPhoto();
    checkIndexLength();
}