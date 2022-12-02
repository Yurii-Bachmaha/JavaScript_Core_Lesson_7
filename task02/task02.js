function makeRed() {
    let element = document.querySelectorAll('li>a');

    for (let i = 0; i < element.length; i++) {
        const elemOfList = element[i];
        if ((elemOfList.innerHTML.includes('http://') || elemOfList.innerHTML.includes('ftp://'))
            && !elemOfList.innerHTML.includes('http://internal.com')) {
            elemOfList.classList.add('external-red');
        }
    }

    let externalLink = document.getElementsByClassName('external-red');

    for (let i = 0; i < externalLink.length; i++) {
        externalLink[i].className = 'external-red';
    }

    console.log('All external links are highlighted in red.');
}