btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');
btn4 = document.getElementById('btn4');

// mbtn1 = document.getElementsByClassName("fa-minus")[0];
// mbtn1 = document.getElementById('mbtn1');
// mbtn2 = document.getElementsByClassName("fa-minus")[1];
// mbtn3 = document.getElementsByClassName("fa-minus")[2];
// mbtn4 = document.getElementsByClassName("fa-minus")[3];

item_content1 = document.getElementsByClassName("bservices_item_content")[0];
item_content2 = document.getElementsByClassName("bservices_item_content")[1];
item_content3 = document.getElementsByClassName("bservices_item_content")[2];
item_content4 = document.getElementsByClassName("bservices_item_content")[3];

item_title1 = document.getElementsByClassName("item_content_title")[0];
item_title2 = document.getElementsByClassName("item_content_title")[1];
item_title3 = document.getElementsByClassName("item_content_title")[2];
item_title4 = document.getElementsByClassName("item_content_title")[3];

item_suptitle1 = document.getElementsByClassName("item_content_suptitle")[0];
item_suptitle2 = document.getElementsByClassName("item_content_suptitle")[1];
item_suptitle3 = document.getElementsByClassName("item_content_suptitle")[2];
item_suptitle4 = document.getElementsByClassName("item_content_suptitle")[3];

btn1.onclick = function () {
    // item_content1.classList.toggle('active');
    item_content1.classList.add('active');
    item_content2.classList.remove('active');
    item_content3.classList.remove('active');
    item_content4.classList.remove('active');

    item_title1.classList.add('active');
    item_title2.classList.remove('active');
    item_title3.classList.remove('active');
    item_title4.classList.remove('active');

    item_suptitle1.classList.add('active');
    item_suptitle2.classList.remove('active');
    item_suptitle3.classList.remove('active');
    item_suptitle4.classList.remove('active');
};

// mbtn1.onclick = function () {
//     // item_content1.classList.toggle('active');
//     item_content1.classList.remove('active');
//     item_content2.classList.remove('active');
//     item_content3.classList.remove('active');
//     item_content4.classList.remove('active');

//     item_title1.classList.remove('active');
//     item_title2.classList.remove('active');
//     item_title3.classList.remove('active');
//     item_title4.classList.remove('active');

//     item_suptitle1.classList.remove('active');
//     item_suptitle2.classList.remove('active');
//     item_suptitle3.classList.remove('active');
//     item_suptitle4.classList.remove('active');
// };


btn2.onclick = function () {
    item_content2.classList.add('active');
    item_content1.classList.remove('active');
    item_content3.classList.remove('active');
    item_content4.classList.remove('active');

    item_title2.classList.add('active');
    item_title1.classList.remove('active');
    item_title3.classList.remove('active');
    item_title4.classList.remove('active');

    item_suptitle2.classList.add('active');
    item_suptitle1.classList.remove('active');
    item_suptitle3.classList.remove('active');
    item_suptitle4.classList.remove('active');
};

btn3.onclick = function () {
    item_content3.classList.add('active');
    item_content1.classList.remove('active');
    item_content2.classList.remove('active');
    item_content4.classList.remove('active');

    item_title3.classList.add('active');
    item_title1.classList.remove('active');
    item_title2.classList.remove('active');
    item_title4.classList.remove('active');

    item_suptitle3.classList.add('active');
    item_suptitle1.classList.remove('active');
    item_suptitle2.classList.remove('active');
    item_suptitle4.classList.remove('active');
};

btn4.onclick = function () {
    item_content4.classList.add('active');
    item_content1.classList.remove('active');
    item_content2.classList.remove('active');
    item_content3.classList.remove('active');

    item_title4.classList.add('active');
    item_title1.classList.remove('active');
    item_title2.classList.remove('active');
    item_title3.classList.remove('active');

    item_suptitle4.classList.add('active');
    item_suptitle1.classList.remove('active');
    item_suptitle2.classList.remove('active');
    item_suptitle3.classList.remove('active');
};