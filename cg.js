let i=1;
let buttons = document.querySelectorAll(".card-btn");
function startGame(button){
    f=shuffle(l,f);
    console.log(f);
    i=1;
    flipBack();
}
function flipBack(){
    for(let j=0;j<10;j++){
        buttons[j].querySelector("img").src = "0.png";
    }
}

let l=["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png"];
let f=[];
function shuffle(l,f){
    let x=null;
    for(let i=0;i<10;i++){
        x=Math.floor(Math.random() * (10-i)) ;
        f[i]=l[x];
        l = l.filter(item => item !== l[x]);

    }
    return f;
}



function check(i,e,f){
    if (f[i]==e){return true;}
    else{return false;}
}
function flipCard(button){
    let index = Array.from(buttons).indexOf(button);
    let img = button.querySelector("img")
    let back = "0.png"
    let w=i.toString()+".png";
    if(img.src.includes(back) && w==f[index] ){
        img.src = f[index]
        i++;
    }
    else if(img.src.includes(back) && w!=f[index]){
        img.src = f[index]
        setTimeout(() => {
        flipBack();
        }, 1000);
        i=1;
    }
    if(i>10){
        alert("Congratulations! You win!");
    }
}


function game(f){
    
}
