
//deposeite section starts
const Login_Button = document.getElementById("login_btn").addEventListener("click",function(){
const deposite_input = document.getElementById("depositeInput");
const deposite_input_value = deposite_input.value;

if(deposite_input_value === ''){
    alert("Deposite field must not be empty")
}else{
    const deposite_Ammount = document.getElementById("depositeAmmount");
const deposite_Ammount_text = deposite_Ammount.innerText;
const deposite_Calculation = parseFloat(deposite_input_value) + parseFloat(deposite_Ammount_text);
deposite_Ammount.innerText = deposite_Calculation;

// clear input field
deposite_input.value ="";



//total balance section starts 
const totalBalance = document.getElementById("total_balance");
const totalBalanceText = totalBalance.innerText;
const totalBalance_calcultion = parseFloat(totalBalanceText) + parseFloat(deposite_input_value);
totalBalance.innerText = totalBalance_calcultion;
//total balace section ends
}
});

//deposite section ends


//withdraw section starts here

document.getElementById("withdraw_btn").addEventListener("click",function(){
const withdrawInput = document.getElementById("Withdraw_input");
const withdrawInputValue =  withdrawInput.value;

if(withdrawInputValue === ''){
    alert("Withdraw field must not be empty")
}else{
    const withdrawAmmount = document.getElementById("withdraw_ammount");
    const withdrawAmmountText = withdrawAmmount.innerText;
    
    const withdraw_Calculation = parseFloat(withdrawInputValue) + parseFloat(withdrawAmmountText);
    withdrawAmmount.innerText = withdraw_Calculation;
    
    
    //clear input field
    withdrawInput.value = "";
    
    
    //total balance section starts using withdrow
    const totalBalance = document.getElementById("total_balance");
    const totalBalanceText = totalBalance.innerText;
    totalBalance.innerText = parseFloat(totalBalanceText) - withdrawInputValue;
    //total balace section ends using withdrow
}

})


//withdraw sectio ends here