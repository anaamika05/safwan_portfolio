(function(){
  var d=document,root=d.documentElement;
  var burger=d.querySelector('.burger'),menu=d.getElementById('menu');
  function setMenu(o){menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');}
  burger.addEventListener('click',function(){setMenu(!menu.classList.contains('open'));});
  menu.addEventListener('click',function(e){if(e.target.tagName==='A')setMenu(false);});
  d.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false);});
  window.addEventListener('resize',function(){if(innerWidth>700)setMenu(false);});
  d.getElementById('yr').textContent=new Date().getFullYear();
  d.getElementById('print').addEventListener('click',function(){window.print();});
  if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    root.classList.add('js');
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.08});
    d.querySelectorAll('.sec').forEach(function(s){io.observe(s);});
  }
})();
