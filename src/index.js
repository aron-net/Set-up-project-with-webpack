import './index.css';

function wepack() {
  const divElement = document.createElement('div');
  const h2 = document.createElement('h2');
  h2.innerText = 'My first webpack setup';
  divElement.appendChild(h2);
  return divElement;
}

document.body.appendChild(wepack());
