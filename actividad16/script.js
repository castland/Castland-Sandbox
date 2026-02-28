let box1 = document.getElementById("cubo1");
let box2 = document.getElementById("cubo2");
let box3 = document.getElementById("cubo3");
let box4 = document.getElementById("cubo4");

/* 
box1.style.backgroundColor = "black";
box2.style.backgroundColor = "pink";
box3.style.backgroundColor = "purple";
box4.style.backgroundColor = "cyan";
*/

box1.addEventListener("click", function() {
    box1.style.backgroundColor = "black";
    console.log("Click en cubo 1");
});

box2.addEventListener("click", function() {
    box2.style.backgroundColor = "pink";
    console.log("Click en cubo 2");
});

box3.addEventListener("click", function() {
    box3.style.backgroundColor = "purple";
    console.log("Click en cubo 3");
});

box4.addEventListener("click", function() {
    box4.style.backgroundColor = "cyan";
    console.log("Click en cubo 4");
});

