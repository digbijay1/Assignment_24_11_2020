window.addEventListener('DOMContentLoaded', random1);
function random1() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '800px';
    container.style.margin = 'auto';
    container.style.backgroundColor = 'green';
    container.style.borderRadius = '5px';
    document.body.appendChild(container);

    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.classList.add('input1')
    input1.style.width = '100%'
    input1.style.lineHeight = '50px';
    input1.style.fontSize = '1em';
    input1.style.textAlign = 'center';
    input1.style.backgroundColor = '#bccd95'
    input1.style.borderRadius = '5px';
    container.appendChild(input1);
    const main = document.createElement('div');
    main.classList.add('main');
    main.style.width = '100%';
    container.appendChild(main);

    let btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.style.width = '23%';
    btn.style.lineHeight = '50px';
    btn.style.margin = '2em';
    btn.val = 'generate';
    btn.textContent = 'Generate';
    btn.style.marginLeft = '15em';
    btn.style.backgroundColor = '#ff4561';
    btn.style.borderRadius = '6px';
    btn.addEventListener('click', myFunction);
    main.appendChild(btn);
    function myFunction() {
        input1.value = Math.floor(1000 + Math.random() * 9000);

    }
}