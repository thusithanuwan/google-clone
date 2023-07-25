const aside = document.querySelector('aside');
aside.addEventListener('click',(eventData)=>{
    eventData.stopImmediatePropagation();

});

const apps = document.querySelector('#apps');
apps.addEventListener('click',(eventData)=>{
    eventData.stopImmediatePropagation();
    aside.style.visibility = 'visible';

});
document.querySelector('html').addEventListener('click',(eventData)=>{
    aside.style.visibility = 'hidden';

});
document.querySelector('#svg-close').addEventListener('click',(eventData)=>{
    eventData.preventDefault();

});


