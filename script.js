let userscore = document.querySelector(".user-score");
let score1=0;
let score2=0;

let compscore = document.querySelector(".comp-score");

let result = document.querySelector("button");

const choice = document.querySelectorAll(".choices");

const draw=(useroutput,comp)=>{
    score1++;
    userscore.innerText = score1;
    score2++;
    compscore.innerText = score2;
    result.innerText = "Draw" ;  


}
const winstatement=(userwin)=>{
    if(userwin == "true"){
        score1++;
        userscore.innerText = score1;
        result.innerText = "You won the game" ;   }
        else{
            score2++;
            compscore.innerText = score2;
            result.innerText = "Comp won the game" ;  
        }
}
const compoutput=()=>{
    let str=["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return str[index];

}

const winner=(useroutput)=>{
    let comp = compoutput();
   console.log(comp,"is comp choice");
   if(useroutput === comp){
    draw(useroutput,comp);
   }
   else {
     let userwin = "true";
     if(useroutput === "rock"){
        //scissors,paper
        userwin = (comp === "scissors") ? "true":"false";
        winstatement(userwin);

     }
      else if (useroutput === "paper")
        {
           //scissors,rock
           userwin = (comp === "scissors") ? "false":"true";
           winstatement(userwin);
        }
     
    else
     {
        //rock,paper
        userwin = (comp === "rock" )? "false":"true";

        winstatement(userwin);
    }
    
     }
   }

choice.forEach((i)=>{
    console.log(i);
    i.addEventListener("click",()=>{
        const idname = i.getAttribute("id");
    console.log(idname ,"is userchoice");
    winner(idname);

    })
    

})