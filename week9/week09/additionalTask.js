const sum = document.querySelector('.sum').value;
const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = '30000';

const growth = '150';

const currency = 'руб';

const message1 = `Ваш депозит на начало расчётного периода составлял ${deposit} ${currency}`;
console.log(message1)

const message2 = `Согласно вашему тарифу, вам была присвоена ставка ${interestRate} %`;
console.log(message2)

const message3 = `К концу расчётного периода прирост составил ${growth} ${currency}., и на данный момент 
ваш депозит составляет ${+deposit + +growth} ${currency}.`;
console.log(message3)

button.addEventListener('click', () => {
  const sum = document.querySelector('.sum').value;
  const result= (+sum*0.07)+ +sum;

  const messageAboutResult =`Через год у вас будет ${result} ${currency}. на счету`

  total.textContent = messageAboutResult; // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});