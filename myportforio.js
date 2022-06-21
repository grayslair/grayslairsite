'use strict';

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('.new > ul');
  const slides = ul.children;

  let currentIndex = 0;

  function moveSlides(){
    const slideWidth = slides[1].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  let timeoutId;

  function playSlideshow(){
    timeoutId = setTimeout(() =>{
      next.click();
      playSlideshow();
    },5000);
  }

  playSlideshow();

  next.addEventListener('click' , ()=>{
    currentIndex++;
    if(currentIndex === slides.length){
      currentIndex = 0;
    }
    moveSlides();
  })
  prev.addEventListener('click' , ()=>{
    currentIndex--;
    if(currentIndex < 0){
      currentIndex = slides.length - 1;
    }
    moveSlides();
  })

  const target = document.querySelector('.consept');
  const tar = document.querySelector('.new');
  const tata = document.querySelector('.allchildren');
  
  function callback(entries, obs){
    console.log(entries[0]);
    if(!entries[0].isIntersecting){
      return;
    }

    entries[0].target.classList.add('appear');
    // entries[0].tar.classList.add('appear');

    obs.unobserve(entries[0].target);
  }


  const options = {
    threshold:0.2,
  }

  const observer = new IntersectionObserver(callback, options);
  observer.observe(target);
  observer.observe(tar);
  observer.observe(tata);

  const icon = document.querySelector('.iconmenu');
  const openicon = document.querySelector('.open-icon');
  // const ull = document.querySelector('.iconmenu ul');
  const closeicon = document.querySelector('.close-icon');

  openicon.addEventListener('click', ()=>{
    icon.classList.add('show');
    // ull.classList.add('show');
    openicon.classList.add('close');
    closeicon.classList.add('show');
  })
  
  closeicon.addEventListener('click', ()=>{
    // ull.classList.remove('show');
    openicon.classList.remove('close');
    closeicon.classList.remove('show');
    icon.classList.remove('show');
  })
}