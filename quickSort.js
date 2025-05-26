function timeout1(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
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
  

async function swap2(x,i,j,time)
{
    let temp = x[i].style.height;
    let text=x[i].innerText;
   
    x[i].style.backgroundColor="green";
    await timeout1(time)

    x[j].style.backgroundColor="green";
    await timeout1(time)

    x[i].style.height = x[j].style.height;
    x[i].innerText=x[j].innerText;
    await timeout1(time)

    x[j].style.height = temp;
    x[j].innerText=text;
    await timeout1(time)
    x[i].style.backgroundColor="blue";
    x[j].style.backgroundColor="blue";
    console.log("hello")
}
 

async function partition(x,l,h,time)
{
     
    
    let pivot = x[h].style.height;
    x[h].style.backgroundColor="orange";
    await timeout1(time)
     
   
    let i = (l- 1);
 
    for(let j = l; j <= h - 1; j++)
    {
         
        
       
        if (x[j].style.height < pivot)
        {
             
           
            i++;
           await swap2(x, i, j,time);
            
        }
    }
    
    await swap2(x, i + 1, h,time);
    return (i + 1);
}

 async function sort2(x,l,h,time){
    if (l < h)
    {
         
        
        let pi= await partition(x, l, h,time);
      
 
        
         await sort2(x, l, pi - 1,time);
         
        

        await sort2(x, pi + 1, h,time);
         
    }
}
 
 function QuickSort()
{
  let sortBody=document.getElementsByClassName("sortBody");
    console.log(sortBody[0])
    sortBody[0].style.display="none"
  let close=document.getElementById("stop");
  close.style.display="inline";
    let l,h;
    let speed = document.getElementById("myRange1").value;
    let time = calcTime(speed)
    console.log("The value of time is "+time)
       let number = document.getElementsByClassName("graph");
   let noOfDiv = count(number);
   console.log(noOfDiv)

   
   let x = number[0].childNodes;
  
   l=0;
   h=noOfDiv-1
   sort2(x,l,h,time);
   }
