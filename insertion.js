function count(number) {
    let a = 0;
    let x = number[0].childNodes;
    Array.from(x).forEach(() => {
      a++;
    });
    console.log(x);
    return a;
  }
  function calcTime(speed){
    if(speed==1){
      return 200
    }
    else if(speed>1&&speed<=20){
      return 160
    }
    else if(speed>20&&speed<=40){
      return 120
    }
    else if(speed>40&&speed<=60){
      return 80
    }
    else if(speed >60&&speed<=80){
      return 50
    }
    else {
      return 30
    }
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function demo3(a,b,time){
    await sleep(time)
    b.style.height=a.style.height;
   // b.innerText=a.innerText;
    a.style.backgroundColor='purple'
    b.style.backgroundColor='blue'
    // a.style.backgroundColor = 'blue'
    // b.style.backgroundColor = 'purple'
    
}
async function func1(a,key,time,text){
    await sleep(time)
    a.style.backgroundColor='blue'
    a.style.height=key
   // a.innerText=text
}   
async function InsertionSort(){
  let sortBody=document.getElementsByClassName("sortBody");
    console.log(sortBody[0])
    sortBody[0].style.display="none"
  let close=document.getElementById("stop");
  close.style.display="inline";
    let key,index1;
    let speed = document.getElementById("myRange1").value;
    let time = calcTime(speed)
       let number = document.getElementsByClassName("graph");
   let noOfDiv = count(number);
   console.log(noOfDiv)
   let x = number[0].childNodes;
    for (let index = 1; index < noOfDiv; index++) {
        x[index].style.backgroundColor='orange'
        await sleep(time)
        
        key = x[index].style.height;
        text=x[index].innerText
        index1=index-1
        while(index1>=0&&x[index1].style.height>key){
           x[index].style.backgroundColor='purple'
           demo3(x[index1],x[index1+1],time)
           await sleep(time)
           index1=index1-1
       }
       func1(x[index1+1],key,time,text)
       await sleep(time)
      

        
        
    }
    x[noOfDiv-1].style.backgroundColor='blue'
    for(let i=0;i<noOfDiv;i++){
      await sleep(time);
      x[i].style.backgroundColor='green';
    }
}


  