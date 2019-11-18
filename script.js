// Display Home When Hovering Over Card Photo
// //onmouseover
// function mouseOver(){
//   //List the Image IDs that will Change the Item when Hovered
//   var mod = document.getElementById("imgModern");
//   var contemp = document.getElementById("imgContemp");
//   var med = document.getElementById("imgMed");
//   var lux = document.getElementById("imgLux");
//
//   //If Hovered Over Modern, Change Image
//   if (mod) {
//     document.getElementById("imgHover").src = "/img/modernPage1.jpg"
//   }
//   //If Hovered Over Contemporary, Change Image
//   if (contemp) {
//     document.getElementById("imgHover").src = "/img/contempPage1.jpg"
//   }
//   //If Hovered Over Mediterranean, Change Image
//   if (med) {
//     document.getElementById("imgHover").src = "/img/medPage1.jpg"
//   }
//   //If Hovered Over Luxury, Change Image
//   if (lux) {
//     document.getElementById("imgHover").src = "/img/luxPage1.jpg"
//   }
// };
//
// //onmouseout
// function noMouseOver(){
//   document.getElementById("imgHover").src = "/img/modern.jpg"
// };


//THIS IS NOT CLEAN**********
//If Hovered Over Modern, Change Image
function mouseOver(){
  document.getElementById("imgHover").src = "/img/modernPage1.jpg"
};

//If Hovered Over Contemporary, Change Image
function mouseOver2(){

  document.getElementById("imgHover").src = "/img/contempPage1.jpg"
};

//If Hovered Over Mediterranean, Change Image
function mouseOver3(){
  document.getElementById("imgHover").src = "/img/medPage1.jpg"
};

//If Hovered Over Luxury, Change Image
function mouseOver4(){
  document.getElementById("imgHover").src = "/img/luxuryPage1.jpg"
};

//onmouseout
function noMouseOver(){
  document.getElementById("imgHover").src = "/img/modernPage2.jpg"
};
