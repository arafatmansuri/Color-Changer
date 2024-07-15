// document.getElementById("box1").addEventListener('click',() => {
//   document.body.style.backgroundColor = "rgba(171, 227, 58, 0.602)";
// });
// document.getElementById("box2").addEventListener('click',() => {
//   document.body.style.backgroundColor = "rgb(255, 98, 0)";
// });
// document.getElementById("box3").addEventListener('click',() => {
//   document.body.style.backgroundColor = "rgb(174, 165, 165)";
// });
// document.getElementById("box4").addEventListener('click',() => {
//   document.body.style.backgroundColor = "red";
// });
// document.getElementById("box5").addEventListener('click',() => {
//   document.body.style.backgroundColor = "purple";
// });

const button = document.querySelectorAll(".box");
let body= document.body;

button.forEach((box) => {
  box.addEventListener('click',(color) => {
        if(color.target.id == "box1"){
          body.style.backgroundColor = "rgba(171, 227, 58, 0.602)";
          body.style.color= "black";
        }
        else if(color.target.id == "box2"){
          body.style.backgroundColor = "rgb(255, 98, 0)";
          body.style.color= "black";
        }
        else if(color.target.id == "box3"){
          body.style.backgroundColor = "rgb(174, 165, 165)";
          body.style.color= "black";
        }
        else if(color.target.id == "box4"){
          body.style.backgroundColor = "black";
          body.style.color= "white";
        }
        else if(color.target.id == "box5"){
          body.style.backgroundColor = "purple";
          body.style.color= "black";
        }
  });
});
