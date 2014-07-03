function changeImage(current) {
    var imagesNumber = 9;

    for (i=1; i<=imagesNumber; i++) {
        if (i == current) {
            document.getElementById("normal" + current).style.display = "block";
        } else {
            document.getElementById("normal" + i).style.display = "none";
        }
    }
}
