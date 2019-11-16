// Display Home When Hovering Over Card Photo
// //onmouseover
// function mouseOver(){
//   var image = document.getElementById("imgHover");
//
//   image.src = "/img/modPage1.jpg"
// };
//
// //onmouseout
// function noMouseOver(){
//   var image = document.getElementById("imgHover");
//
//   image.src = "/img/modern.jpg"
// };
//
// document.getElementById("imgModern").addEventListener("mouseenter", mouseOver());
// document.getElementById("imgModern").addEventListener("mouseleave", noMouseOver());


//onmouseover
function mouseOver(){
  //List the Image ID that will Change the Item when Hovered
  var hoverItems = []

  //If Hovered Over Modern, Change Image
  document.getElementById("imgHover").src = "/img/modernPage1.jpg"

  //If Hovered Over Contemporary, Change Image

  //If Hovered Over Mediterranean, Change Image

  //If Hovered Over Luxury, Change Image

};

//onmouseout
function noMouseOver(){
  document.getElementById("imgHover").src = "/img/modern.jpg"
};
