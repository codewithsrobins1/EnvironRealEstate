// Display Home When Hovering Over Card Photo
//onmouseover
function mouseOver(){
 document.getElementById("imgHover").src = "/img/modernPage1.jpg";
};

//onmouseout
function noMouseOver(){
  document.getElementById("imgHover").src = "/img/modern.jpg"
}

mouseOver();

document.getElementById("imgModern").addEventListener('hover', mouseOver() );

// https://five-demo.squarespace.com/
