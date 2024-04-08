const advice = document.querySelector('#advice');
const adviceUrl = `https://api.adviceslip.com/advice`;
const adviceNumber = document.querySelector('#advice-number');
const generateButton = document.querySelector('.generate-btn');

const fetchAdvice = async () => {
   try{
    const response = await fetch(adviceUrl);
    const data = await response.json();
    advice.textContent = data.slip.advice;
    adviceNumber.textContent = data.slip.id;
   }
   catch(error){
    console.error('error fetching advice', error);
   }
}

generateButton.addEventListener('click', fetchAdvice);