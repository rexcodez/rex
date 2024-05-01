(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
  openB = $('open'),
  closeB = $('close'),
  timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

})();



const style = document.querySelector(".text pre style");
const card = document.querySelector(".front face back face");


script = `
    .....
Happy Birthday, Juicy Fruit! 🎉 It's tough being 
so far apart; I wish I could be there to celebrate with you. 
I hope your day is amazing and that you do well on your exam.
I don’t say this enough but man you're incredibly gorgeous 
and just overall an amazing person, and I appreciate 
everything you've done for me. I can't wait to see the woman 
you'll become; I know you'll succeed in life, and whether 
I'm by your side or not, I'll always be rooting for you. 
You should know how proud I am of you; you've done nothing but 
kick ass in school and life, and you deserve the best of the 
best because you are the best. You'll achieve your goals 
whether you believe it or not; you will. I wish you nothing 
but success and happiness in life. Sending love and virtual 
punches until I can give you the real ones! 🖤🥊🥊 
Happy birthday, you loser 😘
 ..........
              BubbleGum
`;


let counter = 0;

let intervalID = setInterval(() => {
  counter++;
  style.textContent = script.substring(0, counter);
  style.scrollTop = style.scrollHeight;
  if (counter > script.length) {
    clearInterval(intervalID);
  }
}, 90);