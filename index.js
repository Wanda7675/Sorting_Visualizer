var selector="";



function removeAllChildNodes(container) {
    while (container[0].firstElementChild) {
        container[0].removeChild(container[0].firstElementChild);
    }
}




function customRepeat(width,interval,container,array){
    let i=0;
    for (let index = 0; index < width; index=index+interval+1) {
        
        let element=document.createElement('div')
        element.style.height= `${50+4*array[i]}px`;
        element.innerText=array[i];
      //  console.log(4*array[index])
        element.style.width= `${interval}px`;
        container[0].appendChild(element);
        console.log("Hello")
    element.style.backgroundColor='blue';
        element.style.margin='1px';
        i++;
}
}



function Repeat(width, interval, container) {
    for (let index = 0; index < width; index += interval) {
        let element = document.createElement('div');
        element.style.height = `${100 + Math.random() * 400}px`;
        element.style.width = `${interval - 1}px`;
        element.style.backgroundColor = 'rgb(8, 143, 143)';  // Bars start with the desired color
        element.style.margin = '1px';

        container[0].appendChild(element);
    }
}





function generateArray() {
    const raw = document.getElementById("customInput").value.trim();

    if (!raw) {
        alert("Please enter a valid comma-separated list of numbers.");
        return;
    }

    const array = raw
        .split(",")
        .map(s => parseInt(s.trim()))
        .filter(n => !isNaN(n)); // Remove invalid numbers

    if (array.length === 0) {
        alert("No valid numbers entered. Please enter comma-separated integers.");
        return;
    }

    const modalBody = document.getElementsByClassName("modalBody")[0];
    modalBody.style.display = "none";

    const container = document.getElementsByClassName("graph");
    const width = container[0].clientWidth;

    removeAllChildNodes(container);

    const interval = width / array.length;

    document.getElementById("customInput").value = ''; // Clear input field

    customRepeat(width, interval, container, array);
}





function createArray(){
    let a = document.getElementById("myRange2");
    let container= document.getElementsByClassName("graph");
    let width=container[0].clientWidth;
    console.log(width)
    removeAllChildNodes(container);
    if(a.value==1){
        let interval = 52.3;
        Repeat(width,interval,container); 
        }
        else if(a.value==20){
            let interval = 39;
        Repeat(width,interval,container); 

        }
        else if(a.value==40){
            let interval = 31;
        Repeat(width,interval,container); 
 
        }
        else if(a.value==60){
            let interval = 25.6;
        Repeat(width,interval,container); 
 
        }
        else if(a.value==80){
            let interval = 21.8;
        Repeat(width,interval,container); 
 
        }
        else {
            let interval =19;
        Repeat(width,interval,container); 


        }

    }



;

function setValue() {
    let a = document.getElementById("myRange1");
    console.log("Speed set to: " + a.value);  }


function setValue2() {
    let a = document.getElementById("myRange2");
    console.log("Input size set to: " + a.value);  // ✅ Log the actual value
    createArray();  // ✅ Recreate the array based on the new input size
}




function cross(){
    let modalBody=document.getElementsByClassName("modalBody");
    console.log(modalBody[0])
    modalBody[0].style.display="none"
    
}
function cross1(){
    let sortBody=document.getElementsByClassName("sortBody");
    console.log(sortBody[0])
    sortBody[0].style.display="none"
    
}



function customArray(){
    let modalBody=document.getElementsByClassName("modalBody");
    console.log(modalBody[0])
    modalBody[0].style.display="flex"
}
function createArray() {
    let a = document.getElementById("myRange2");
    let container = document.getElementsByClassName("graph");
    let width = container[0].clientWidth;
    removeAllChildNodes(container);

    let inputSize = parseInt(a.value);  // ✅ Get the actual value from the slider
    let interval = width / inputSize;    // ✅ Calculate the interval based on input size

    Repeat(width, interval, container);
}




 function reset(){
    
    location.reload();
    
  
}



function showWindow(x){
    selector=x;
    let sortBody=document.getElementsByClassName("sortBody");
    console.log(sortBody[0])
    sortBody[0].style.display="flex"
    let heading= document.getElementById("heading");
    if(selector==0){
        heading.innerHTML="Bubble Sort";
    

       
        
    }
    else if(selector==1){
        heading.innerHTML="Selection Sort";
         
        }
        else if(selector==2){
            heading.innerHTML="Insertion Sort";
            }
            else if(selector==3){
                heading.innerHTML="Merge Sort";
                }
             else if(selector==4){
                heading.innerHTML="Quick Sort";
              }
}


 

function desc(){
    let heading= document.getElementById("heading");
    if(selector==0){
        heading.innerHTML="Bubble Sort";
    location.href="bubbleDesc.html";

       
        
    }
    else if(selector==1){
        heading.innerHTML="Selection Sort";
        location.href="selectionDesc.html";  
        }
        else if(selector==2){
            heading.innerHTML="Insertion Sort";
            location.href="insertionDesc.html";  
            }
            else if(selector==3){
                heading.innerHTML="Merge Sort";
                location.href="mergeDesc.html";  
                }
             else if(selector==4){
                heading.innerHTML="Quick Sort";
               location.href="quickDesc.html";  
              }
}




createArray();


function sortSelector(x){
   let heading= document.getElementById("heading");
   console.log(heading)
    if(selector==0){
       
        BubbleSort();
        
    }
    else if(selector==1){
      
       SelectionSort();


    }
    else if(selector==2){
        
        InsertionSort();

     }
     else if(selector==3){
         
        MergeSort();

     }
     else if(selector==4){
        
        QuickSort();

     }
}