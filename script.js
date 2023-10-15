const btn = document.querySelector('.dropdownBtn');
const item = document.querySelector('.items');

btn.addEventListener('click', ()=> {
    item.classList.toggle('active');
})