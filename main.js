 // li color change and save number
    let lis=document.querySelectorAll("li");
    let num=0;
    lis.forEach(li=>{
    li.onclick=function(){
        this.style.backgroundColor="#fc7614";
        this.style.color="white";
        num=this.innerHTML;
        lis.forEach(d=>{
        if(li!==d){
            d.style.backgroundColor="hsl(217deg 17% 28%)";
        }
        })
    }
    });
    // submit changes
    let btn=document.querySelector("button");
    let hidel=document.querySelectorAll(".hide");
    let shwel=document.querySelectorAll(".show");
    let selected=document.querySelector(".selecte");
    console.log(selected);
    console.log(hidel);
    btn.onclick=function(){
    hidel.forEach(el=>{el.style.display="none";});
    shwel.forEach(el=>{el.style.display="block";});
    this.style.display="none";
    document.querySelector(".container").style.alignItems="center";
    selected.innerHTML=`You selected ${num} out of 5`;
    }