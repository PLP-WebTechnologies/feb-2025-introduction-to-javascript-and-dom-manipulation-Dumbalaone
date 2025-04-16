//Change text content dynamically
function myFunction() {
    document.getElementById('demo').innerHTML = "Welcome";
}

//Modify CSS styles 
function mystyle(){
    document.getElementById('demo').style.fontSize ="40px";
}

//Add element
function addElement(){
    const newElement = document.createElement('p');
    newElement.textContent = 'I am a new element';
    newElement.id = 'myElement';
    document.getElementById('container').appendChild(newElement);

}

//remove an element
function removeElement(){
    const element = document.getElementById('myElement');
    if (element) element.remove();
    document.getElementById('removeElement').onclick = removeElement;
}



