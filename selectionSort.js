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

  async function demo2(a,b,time){
        await sleep(time)
        a.style.backgroundColor = 'blue'
        b.style.backgroundColor = 'purple'
        

  }
  async function swap1(a,b,c,time)
  {
      await sleep(time)
      let num1 = a[b].clientHeight
      let text=a[c].innerText;
      console.log(text)
      let num2 = a[c].clientHeight
      a[c].style.height = `${num1}px`
      a[c].innerText=a[b].innerText;
      a[b].style.height = `${num2}px`
      a[b].innerText=text;


      
      a[b].style.backgroundColor = 'blue'
      
      a[c].style.backgroundColor = 'green'
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function SelectionSort(){
    let sortBody = document.getElementsByClassName("sortBody");
    console.log(sortBody[0]);
    sortBody[0].style.display = "none";
    
    let close = document.getElementById("stop");
    close.style.display = "inline"; 
    
    let min_index;
    let speed = document.getElementById("myRange1").value;
    let time = calcTime(speed);
    let number = document.getElementsByClassName("graph");
    let noOfDiv = count(number);
    console.log(noOfDiv);
    let x = number[0].childNodes;
  
    for (let index = 0; index < noOfDiv - 1; index++) {
      min_index = index;
      x[min_index].style.backgroundColor = 'purple'; // Mark current as purple (active for searching)
  
      for (let index1 = index + 1; index1 < noOfDiv; index1++) {
        x[index1].style.backgroundColor = 'orange'; // Mark current as orange (active for comparison)
        
        await sleep(time);
        if (x[index1].clientHeight < x[min_index].clientHeight) {
          demo2(x[min_index], x[index1], time);
          await sleep(time);
          min_index = index1;
        } else {
          await sleep(time);
          x[index1].style.backgroundColor = "blue"; // Set as blue after comparison
        }
      }
  
      await sleep(time);
      swap1(x, min_index, index, time); // Swap the elements
  
      // After sorting each element, mark it green
      x[index].style.backgroundColor = "green";
    }
  
    // Ensure the last element is marked green
    x[noOfDiv - 1].style.backgroundColor = "green";
  }
  
  

