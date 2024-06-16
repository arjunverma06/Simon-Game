// let div=document.querySelector(".container");
// let ul=document.querySelector(".list");
// let lis=document.querySelectorAll("li");
// div.addEventListener("click",function(){
//     console.log("div was clicked")
// })
// ul.addEventListener("click",function(event){
//     event.stopPropagation()
//     console.log("ul was clicked")
// })
// for(li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation()
//         console.log("li was clicked")
//     })
// }
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");

// let input = document.querySelector("input");

// btn.addEventListener("click", function () {
//   let item = document.createElement("li");
//   let btndelete = document.createElement("button");
//   btndelete.innerText = "delete";
//   btndelete.classList.add("delete");
//   item.innerText = input.value;
//   item.appendChild(btndelete);
//   // let li =document.querySelector("li")

//   ul.appendChild(item);
//   input.value = "";
// });
// ul.addEventListener("click", function (event) {
//   if(event.target.nodename=="BUTTON"){
//     let items=event.target.parentElement;
//     items.remove();
//   }
//   console.log("button clicked");
// })
// let bd = document.querySelectorAll(".delete ");
// for (let bn of bd) {
//   bn.addEventListener("click", function () {
//     console.log("task was deleted");
//     let para=this.parentElement;;
//     console.log(para)
//     para.remove();
//     // event.target.parentNode.remove();
//   });
// }
let gameSeq=[];
let userSeq=[];
let level = 0;
let Started = false;
let h2=document.querySelector("h2");
let btns = ["red", "green", "yellow", "purple"];
document.addEventListener("keypress", function () {
  if(Started==false){
    console.log("game started")
    Started=true;
    levelup();

  }  
});
function gameflash(btn){
 btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },300);

}
function userflash(btn){
  btn.classList.add("userflash");
   setTimeout(function(){
     btn.classList.remove("userflash");
   },300);
 
 }

function levelup(){
  userSeq=[];
  level++;
  h2.innerText=`level ${level}`;
  let rndx=Math.floor(Math.random()*3);
  let randclr=btns[rndx];
  let randbtn=document.querySelector(`.${randclr}`);
  gameSeq.push(randclr);
  console.log(gameSeq);
  // console.log(randclr);
  // console.log(randbtn);
  // console.log(rndx);
  gameflash(randbtn);
}
function check(idx){
  // console.log("curr level",level)
  // let idx=level-1;
  if(gameSeq[idx]==userSeq[idx]){
    if(userSeq.length==gameSeq.length){
     setTimeout(levelup,1000)
    }   // console.log("correct");
  }
  else{
    h2.innerHTML=`Game over your score is <b>${level}</b> <br> press any key to restart`
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";

    },150)

      let high=document.querySelector("h3");
      high.innerHTML=`Your  maximum highest score is <b>${level}</b>`
      
     
  
  
    reset();
      //  highScore();
    
   }

   
 
}
function btnpress(){
 
  let btn=this;
  // gameflash(btn);
  userflash(btn)
  console.log(this)
  let userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userColor);
  check(userSeq.length-1);
  

}
let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
  btn.addEventListener("click",btnpress)
}
function reset(){
  userSeq=[];
  gameSeq=[];
  level=0;
  Started=false;
  l

 

  // h2.innerText="press any key to start";
}

