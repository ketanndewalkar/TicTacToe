let pattern = [[1,2,3],[4,5,6],[7,8,9],[1,4,6],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let A = [1,1,1,1,1,1,1,1,1];
let what = 1;
let i = 0;
let o = [];
let x = [];
let name1 = "O";
let name2 = "X";


function func(i,name){
if(i.indexOf(1)!=-1 && i.indexOf(2)!=-1 && i.indexOf(3)!=-1){
    alert(`${name} Player won!!!!`);
    location.reload();
}else if(i.indexOf(4)!=-1 && i.indexOf(5)!=-1 && i.indexOf(6)!=-1){
    alert(`${name} Player won!!!!`);
    location.reload();

} else if(i.indexOf(7)!=-1 && i.indexOf(8)!=-1 && i.indexOf(9)!=-1){
    alert(`${name} Player won!!!!`);
    location.reload();

} else if(i.indexOf(1)!=-1 && i.indexOf(4)!=-1 && i.indexOf(7)!=-1){
    alert(`${name} Player won!!!!`);
    location.reload();

} else if(i.indexOf(2)!=-1 && i.indexOf(5)!=-1 && i.indexOf(8)!=-1){
    alert(`${name} Player won!!!!`);
    location.reload();

} else if(i.indexOf(3)!=-1 && i.indexOf(6)!=-1 && i.indexOf(9)!=-1){
    alert(`${name} Player won!!!!`);
    location.reload();

}else if(i.indexOf(1)!=-1 && i.indexOf(5)!=-1 && i.indexOf(9)!=-1){
    alert(`${name} Player won!!!!`);
    location.reload();

} else if(i.indexOf(3)!=-1 && i.indexOf(5)!=-1 && i.indexOf(7)!=-1){
    alert(`${name} Player won!!!!`);
    location.reload();

} 
}

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let box3 = document.querySelector("#box3");
let box4 = document.querySelector("#box4");
let box5 = document.querySelector("#box5");
let box6 = document.querySelector("#box6");
let box7 = document.querySelector("#box7");
let box8 = document.querySelector("#box8");
let box9 = document.querySelector("#box9");
let box10=document.querySelector("#butt");

let bgi1 = document.querySelector("#box1").style.backgroundImage;
let bgi2 = document.querySelector("#box2").style.backgroundImage;
let bgi3 = document.querySelector("#box3").style.backgroundImage;
let bgi4 = document.querySelector("#box4").style.backgroundImage;
let bgi5 = document.querySelector("#box5").style.backgroundImage;
let bgi6 = document.querySelector("#box6").style.backgroundImage;
let bgi7 = document.querySelector("#box7").style.backgroundImage;
let bgi8 = document.querySelector("#box8").style.backgroundImage;
let bgi9 = document.querySelector("#box9").style.backgroundImage;

box1.addEventListener("click",() =>{
    if(A[0]==1 && what==1){
        box1.style.backgroundImage ="url('circle.png')";
        what=0;
        A[0]=0;
        o.push(1);
        i++;
        console.log(o);
        func(o,name1);
    }
    else if(A[0]==1 && what==0){
        box1.style.backgroundImage ="url('X.png')";
        what=1;
        A[0]=1;
        x.push(1);
        i++;
        func(x,name2);
}
})
box2.addEventListener("click",() =>{
    if(A[1]==1 && what==1){
        box2.style.backgroundImage ="url('circle.png')";
        what=0;
        A[1]=0;
        i++;
        o.push(2);
        func(o,name1);
    }
    else if(A[1]==1 && what==0){
        box2.style.backgroundImage ="url('X.png')";
        what=1;
        A[1]=0;
        i++;
        x.push(2);
        func(x,name2);
}
})
box3.addEventListener("click",() =>{
    if(A[2]==1 && what==1){
        box3.style.backgroundImage ="url('circle.png')";
         what=0;
         A[2]=0;
         i++;
         o.push(3);
         func(o,name1);
    }
    else if(A[2]==1 && what==0){
        box3.style.backgroundImage ="url('X.png')";
        what=1;
        A[2]=0;
        i++;
        x.push(3);
        func(x,name2);
}
})
box4.addEventListener("click",() =>{
    if(A[3]==1 && what==1){
        box4.style.backgroundImage ="url('circle.png')";
         what=0;
         A[3]=0;
         i++;
         o.push(4);
        func(o,name1);
    }
    else if(A[3]==1 && what==0){
        box4.style.backgroundImage ="url('X.png')";
        what=1;
        A[3]=0;
        i++;
        x.push(4);
        func(x,name2);
}
})

box5.addEventListener("click",() =>{
    if(A[4]==1 && what==1){
        box5.style.backgroundImage ="url('circle.png')";
         what=0;
         A[4]=0;
         i++;
         o.push(5);
         func(o,name1);
    }
    else if(A[4]==1 && what==0){
        box5.style.backgroundImage ="url('X.png')";
        what=1;
        A[4]=0;
        i++;
        x.push(5);
        func(x,name2);
}
})

box6.addEventListener("click",() =>{
    if(A[5]==1 && what==1){
        box6.style.backgroundImage ="url('circle.png')";
        what=0;
        A[5]=0;
        i++;
        o.push(6);
        func(o,name1);
    }
    else if(A[5]==1 && what==0){
        box6.style.backgroundImage ="url('X.png')";
        what=1;
        A[5]=0;
        i++;
        x.push(6);
        func(x,name2);
}
})

box7.addEventListener("click",() =>{
    if(A[6]==1 && what==1){
        box7.style.backgroundImage ="url('circle.png')";
        what=0;
        A[6]=0;
        i++;
        o.push(7);
        func(o,name1);
    }
    else if(A[6]==1 && what==0){
        box7.style.backgroundImage ="url('X.png')";
        what=1;
        A[6]=0;
        i++;
        x.push(7);
        func(x,name2);
}
})

box8.addEventListener("click",() =>{
    if(A[7]==1 && what==1){
        box8.style.backgroundImage ="url('circle.png')";
         what=0;
         A[7]=0;
         i++;
         o.push(8);
         func(o,name1);
    }
    else if(A[7]==1 && what==0){
        box8.style.backgroundImage ="url('X.png')";
        what=1;
        A[7]=0;
        i++;
        x.push(8);
        func(x,name2);
}
})

box9.addEventListener("click",() =>{
    if(A[8]==1 && what==1){
        box9.style.backgroundImage ="url('circle.png')";
         what=0;
         A[8]=0;
         i++;
         o.push(9);
         func(o,name1);
    }
    else if(A[8]==1 && what==0){
        box9.style.backgroundImage ="url('X.png')";
        what=1;
        A[8]=0;
        i++;
        x.push(9);
        func(x,name2);
}
})
box10.addEventListener("click",() => {
    location.reload();
})










