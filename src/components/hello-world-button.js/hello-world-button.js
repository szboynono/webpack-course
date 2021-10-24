import './hello-world-button.scss';

class HelloWorld {
  render() {
    const button = document.createElement('button');
    button.innerHTML = "Hello world";
    button.addEventListener('click', () => {
      const p = document.createElement('p');
      p.innerHTML = 'Hello Word';
      p.classList.add('hello-world-text')
      body.appendChild(p);
    })
    button.classList.add('hello-world-button');

    
    const body = document.querySelector('body');
    body.appendChild(button);
  }
}

export default HelloWorld