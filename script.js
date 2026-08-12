const menu=document.querySelector('.menu');
const links=document.querySelector('.nav-links');
menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

const toggle=document.getElementById('themeToggle');
const saved=localStorage.getItem('theme');
if(saved==='light'){document.body.classList.add('light');toggle.textContent='☀'}
toggle.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  const light=document.body.classList.contains('light');
  toggle.textContent=light?'☀':'☾';
  localStorage.setItem('theme',light?'light':'dark');
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  document.querySelector('.progress').style.width=(window.scrollY/h*100)+'%';
});
