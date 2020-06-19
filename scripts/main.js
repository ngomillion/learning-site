/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';


document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/school-bus-pretty-640.jpg') {
      myImage.setAttribute ('src','images/bus.jfif');
    } else {
      myImage.setAttribute ('src','images/school-bus-pretty-640.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    
    if(!myName){
        setUserName();
    } else {  
      localStorage.setItem('name', myName);      
      myHeading.textContent = 'Buses ARE cool, ' + myName;
    }
    
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Buses are cool, ' + storedName;
  }

  myButton.onclick = function(){
      setUserName();
  }



