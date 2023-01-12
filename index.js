// Write your code here!
main.remove('main');

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

newHeader.textContent = 'Yael is the champion';

document.body.append(newHeader);
