//1st page - login area
const loginBtn = document.querySelector('#login');
loginBtn.addEventListener("click", function() {
  const fistPage = document.querySelector('#first-page');
  fistPage.style.display = 'none';
  const secondPage = document.querySelector('#second-page');
  secondPage.style.display = 'block';
});

// 2nd page

//get input amount
function input (id1, id2) {
  let inputAmount = document.getElementById(id1).value;
  let redAlert = document.getElementById(id2)

  if (inputAmount == '' || inputAmount <= 0) {
    redAlert.style.display = 'block';
    secondAlert.style.display = 'none'
    inputAmount = 0;
    return inputAmount;
  } else {
    redAlert.style.display = 'none';
    const inputNumber = parseFloat(inputAmount);
    return inputNumber;
  }
}

// update previous amount
function updateAmount (id, newAmount) {
  const currentAmount = document.getElementById(id).innerText;
  const currentAmountNumber = parseFloat(currentAmount);
  const totalAmount = (currentAmountNumber + newAmount);
  document.getElementById(id).innerText = totalAmount.toFixed(2);
}

// deposit button activities
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', ()=> {
  const addedAmount = input("deposit-input", "input-area1");
  updateAmount("currentDeposit", addedAmount);
  updateAmount("currentBalance", addedAmount);
  document.getElementById('deposit-input').value = '';
});

// withdraw button activities
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', ()=> {
  const lostAmount = input("withdraw-input", "input-area2");
  const currentBalanceAmount = document.getElementById('currentBalance').innerText;
  const currentBalanceAmountNumber = parseFloat(currentBalanceAmount);

  const secondAlert = document.getElementById('secondAlert')
  if (currentBalanceAmountNumber < lostAmount) {
    //alert('age taka dhuka');
    secondAlert.style.display = 'block';

  } else (
    updateAmount("currentWithdraw", lostAmount),
    updateAmount("currentBalance", -1*lostAmount)
  )
    document.getElementById('withdraw-input').value = '';
});