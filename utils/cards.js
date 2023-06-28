var imageno = 1;
displayimg(imageno);

function nextimg(n) {
    displayimg(imageno += n)
}

function currentSlide(n) {
    displayimg(imageno = n)
}

function displayimg(n) {
    var i;
    var image = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");

    if (n > image.length) {
        imageno = 1;
    }

    if (n < 1) {
        imageno = image.length;
    }

    for (i = 0;i < image.length;i++) {
        image[i].style.display = "none";
    }

    for (i = 0;i < dots.length;i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    image[imageno - 1].style.display = "block";
    dots[imageno - 1].className += " active"
}



btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');


item_content1 = document.getElementsByClassName("cards_item_content")[0];
item_content2 = document.getElementsByClassName("cards_item_content")[1];
item_content3 = document.getElementsByClassName("cards_item_content")[2];

item_title1 = document.getElementsByClassName("item_content_title")[0];
item_title2 = document.getElementsByClassName("item_content_title")[1];
item_title3 = document.getElementsByClassName("item_content_title")[2];

item_suptitle1 = document.getElementsByClassName("item_content_suptitle")[0];
item_suptitle2 = document.getElementsByClassName("item_content_suptitle")[1];
item_suptitle3 = document.getElementsByClassName("item_content_suptitle")[2];


btn1.onclick = function () {
    // item_content1.classList.toggle('active');
    item_content1.classList.add('active');
    item_content2.classList.remove('active');
    item_content3.classList.remove('active');

    item_title1.classList.add('active');
    item_title2.classList.remove('active');
    item_title3.classList.remove('active');

    item_suptitle1.classList.add('active');
    item_suptitle2.classList.remove('active');
    item_suptitle3.classList.remove('active');
};


btn2.onclick = function () {
    item_content2.classList.add('active');
    item_content1.classList.remove('active');
    item_content3.classList.remove('active');

    item_title2.classList.add('active');
    item_title1.classList.remove('active');
    item_title3.classList.remove('active');

    item_suptitle2.classList.add('active');
    item_suptitle1.classList.remove('active');
    item_suptitle3.classList.remove('active');
};

btn3.onclick = function () {
    item_content3.classList.add('active');
    item_content1.classList.remove('active');
    item_content2.classList.remove('active');

    item_title3.classList.add('active');
    item_title1.classList.remove('active');
    item_title2.classList.remove('active');

    item_suptitle3.classList.add('active');
    item_suptitle1.classList.remove('active');
    item_suptitle2.classList.remove('active');
};