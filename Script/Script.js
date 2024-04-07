function makePurpole(){
    document.body.style.backgroundColor = 'purple'
   }
   function makeRed(){
    document.body.style.backgroundColor = 'red'
   }

   const makeBuleBotton = document.getElementById('make-blue')
   makeBuleBotton.onclick = makeBlue;
   function makeBlue(){
       document.body.style.backgroundColor = 'blue'
   }

   document.getElementById('make-pink').addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink'
   })


   document.getElementById('make-yellow').addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow'
  })


  function handleOnclik(){ 
    const innerText = document.getElementById('inner-text');
    innerText.innerText = 'amr sonar bangla ami trma'
  }
  function buttonUpdate(){
    const textChanger = document.getElementById('text-changer');
    textChanger.innerText = 'yes tmi update hoyeco'
  }
  document.getElementById('click-hadnle').addEventListener('click',function(){
    const textChanger = document.getElementById('text-changer');
    textChanger.innerText = 'tmi to Great mama'
  })