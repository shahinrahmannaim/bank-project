const login= document.getElementById("login");
login.addEventListener('click',function(){

  const loginArea = document.getElementById('login-area');
  loginArea.style.display='none';
  const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display='block';

})

const depositBtn= document.getElementById("deposit");
depositBtn.addEventListener('click',function(){
    const depoNumber=getInputnumber('depositAmount');


    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentNumber=parseFloat(currentDeposit);
    // const totalCurrentDeposit = depoNumber+currentNumber;

    // document.getElementById('currentDeposit').innerText=totalCurrentDeposit;

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const balanceNumber=parseFloat(currentBalance);
    // const totalDepositBalance = depoNumber + balanceNumber;
    // document.getElementById('currentBalance').innerText=totalDepositBalance;


     updateSpanText("currentDeposit",depoNumber);
     updateSpanText("currentBalance",depoNumber);
   

     document.getElementById("depositAmount").value="";
 
})

// withdraw button event handler
const btnWithdraw = document.getElementById('addWidthDraw');
btnWithdraw.addEventListener('click',function(){
    const withdrawNumber =getInputnumber('withDrawAmount');
    updateSpanText("currentWithDraw",withdrawNumber);
    updateSpanText("currentBalance",-1*withdrawNumber);

    


    // const currentWithDraw= document.getElementById('currentWithDraw').innerText;
    // const currentWithDrawNumber = parseFloat(currentWithDraw);
    // const totalWithDraw =DrawAmountNumber+currentWithDrawNumber;
    // document.getElementById('currentWithDraw').innerText=totalWithDraw;
  
    // document.getElementById('withDraw')


    document.getElementById("withDrawAmount").value="";

})

function getInputnumber(id){

    const amount= document.getElementById(id).value;
    const amountNumber=parseFloat(amount);
    return amountNumber;


}
  


function updateSpanText(id,depoNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const totalAmount = depoNumber+currentNumber;

    document.getElementById(id).innerText= totalAmount;


}