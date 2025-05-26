function timeout(ms) {
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
  

  
  async function merge(x,l,m,r,time){
    let n1 = m - l + 1;
     let n2 = r - m;
    let L=[];
    let R=[];
    let text1=[];
    let text2=[];
    for (let index = 0; index < n1; index++) {
        L[index] = x[l + index].style.height;
        text1[index]=x[l+index].innerText;
        //console.log(x[l+index].innerText)   
        x[l+index].style.backgroundColor = "orange";
        console.log(x[l+index].style.backgroundColor)
        await timeout(time);    
        
      }

     
    for (let index1 = 0; index1 < n2; ++index1){
         R[index1] = x[m + 1 + index1].style.height;
         text2[index1]=x[m+1+index1].innerText
         x[m+1+index1].style.backgroundColor="orange";
        await timeout(time);

        
      }

    
  
         let i=0,j=0;
         let k = l;
             while (i < n1 && j < n2) {
                 if (L[i] <= R[j]) {
                      x[k].style.height = L[i];
                      x[k].innerText=text1[i];
                      x[k].style.backgroundColor="green";
                      await timeout(time);
                      i++;
                   
                     }
                 else {
                     x[k].style.height = R[j];
                     x[k].innerText = text2[j];

                     x[k].style.backgroundColor="green";
                      await timeout(time);
                     
                     j++;
                    
                  }
                 k++;
              }
              while (i < n1) {
                        x[k].style.height = L[i];
                        x[k].innerText = text1[i];

                        x[k].style.backgroundColor="green";
                        await timeout(time);
                        
                         i++;
                         k++;
                      
                    }
                
                    while (j < n2) {
                      
                       x[k].style.height = R[j];
                       x[k].innerText = text2[j];

                       x[k].style.backgroundColor="green";
                       
                       await timeout(time);
                         j++;
                         k++;
                        
                     }

}


async function sort1(x,l,r,time){
  if (l < r) {
    
    let m =Math.floor(l+ (r-l)/2);
    await sort1(x, l, m,time);
    

    await  sort1(x, m + 1, r,time);
    

    await merge(x, l, m, r,time);
    await timeout(time);
    

}


}

function MergeSort(){
  let sortBody=document.getElementsByClassName("sortBody");
    console.log(sortBody[0])
    sortBody[0].style.display="none"
  let close=document.getElementById("stop");
  close.style.display="inline";
    let l,r;
    let speed = document.getElementById("myRange1").value;
    let time = calcTime(speed)
    console.log("The time required is "+time)
       let number = document.getElementsByClassName("graph");
   let noOfDiv = count(number);
   console.log(noOfDiv)
   let x = number[0].childNodes;
  console.log("The value of x is"+x[0].style.backgroundColor)
   l=0;
   r=noOfDiv-1
   sort1(x,l,r,time);
  
   
}
