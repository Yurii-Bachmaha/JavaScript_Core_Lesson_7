function addText(){
    let elements = document.querySelectorAll('li');

    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = 'Custom text';
    }

    let sumOfElements = elements.length;
    alert('Total number of all <li> = '+sumOfElements);
}