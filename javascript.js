const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchBox = document.querySelector('#search');

searchBox.addEventListener('keyup',(event)=>{
     var searchText = event.target.value.toLowerCase().trim();
     boxes.forEach((box)=>{
         const data = box.dataset.item;
         if(data.includes(searchText)){
              box.style.display='block';
         }
         else{
                box.style.display='none';

         }
     });
     buttons.forEach((button)=>{
             button.classList.remove('but');
       });
   buttons[0].classList.add('but');
});

buttons.forEach((button)=>{
     button.addEventListener('click',(e)=>{
          e.preventDefault();
          setActiveBtn(e);
          const btnfilter = e.target.dataset.filter;
         
           boxes.forEach(box=>{
              if(btnfilter=='all')
                {
                     box.style.display='block';
                 } 
                 else{
                        const boxfilter = box.dataset.item;
                        if(btnfilter==boxfilter){
                             box.style.display='block';
                        }
                        else{
                            box.style.display='none';

                        }
                 }          
          });
     });
});

function setActiveBtn(e){
      buttons.forEach((button)=>{
           button.classList.remove('but');
      });
      e.target.classList.add('but');
}
