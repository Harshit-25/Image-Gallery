const current=document.querySelector('#current');
const imgs=document.querySelectorAll('.imgs img');
const opacity=0.7;

imgs[0].style.opacity=opacity;

imgs.forEach(img=>img.addEventListener('click',imgclick));

function imgclick(e){
imgs.forEach(img=>(img.style.opacity=1));
current.src=e.target.src;
e.target.style.opacity=opacity;
}
