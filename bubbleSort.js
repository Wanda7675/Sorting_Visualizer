function count(number) {
  let a = 0;
  let x = number[0].childNodes;
  Array.from(x).forEach(() => {
    a++;
  });
  console.log(x);
  return a;
}

function calcTime(speed) {
  if (speed == 1) {
    return 200;  // Slow speed, longer delay
  }
  else if (speed > 1 && speed <= 20) {
    return 160;  // Faster speed, shorter delay
  }
  else if (speed > 20 && speed <= 40) {
    return 120;
  }
  else if (speed > 40 && speed <= 60) {
    return 80;
  }
  else if (speed > 60 && speed <= 80) {
    return 50;
  }
  else {
    return 30;  // Fastest speed
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo1(x,index1, index2, a, b, time) {
  // demo(index1,index2,a,b)
  await sleep(time)
 let text=x[index1].innerText;
console.log(text)
  x[index1].style.height = `${b}px`;
 x[index1].innerText=x[index2].innerText;
  // await sleep(time)
  x[index2].style.height = `${a}px`;
  x[index2].innerText=text;

  
  
  
}
async function BubbleSort() {
  let sortBody = document.getElementsByClassName("sortBody");
  sortBody[0].style.display = "none";
  
  let close = document.getElementById("stop");
  close.style.display = "inline";
  
  let speed = document.getElementById("myRange1").value;  // Get the speed from the slider
  let time = calcTime(speed);  // Calculate the appropriate time delay based on speed
  
  let number = document.getElementsByClassName("graph");
  let noOfDiv = count(number);
  let x = number[0].childNodes;

  for (let index = 0; index < noOfDiv - 1; index++) {
      for (let index1 = 0; index1 < noOfDiv - index - 1; index1++) {
          x[index1].style.backgroundColor = "orange";  // Mark as active (comparing)

          if (x[index1].clientHeight > x[index1 + 1].clientHeight) {
              let a = x[index1].clientHeight;
              let b = x[index1 + 1].clientHeight;

              // Swap bars
              await demo1(x, index1, index1 + 1, a, b, time);
          } else {
              await sleep(time);  // Delay between steps for non-swapping elements
          }

          x[index1].style.backgroundColor = "blue";  // Mark the current bar as done
          x[index1 + 1].style.backgroundColor = "orange";  // Mark the next element for comparison
      }
      
      // Mark the current largest element as sorted (green)
      x[noOfDiv - index - 1].style.backgroundColor = "green";
  }

  // Ensure the first element is sorted (green)
  x[0].style.backgroundColor = "green";
}



