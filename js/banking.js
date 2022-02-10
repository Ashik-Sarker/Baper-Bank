document.getElementById('deposit-button').addEventListener('click', function () {
    // getting text from Deposit input field------
    const deposit_amount = document.getElementById('deposit-amount');
    const deposit_amount_text = deposit_amount.value;

    // getting text from Deposit text field-------
    const deposit_value = document.getElementById('deposit-value');
    const deposit_value_text = deposit_value.innerText;

    // Updating Deposit Amount value--------------
    deposit_value.innerText = parseFloat(deposit_value_text) + parseFloat(deposit_amount_text);
    deposit_amount.value = '';

    //Updating balance----------------------------
    const balance = document.getElementById('balance');
    const balance_update = balance.innerText;
    balance.innerText = parseFloat(balance_update) + parseFloat(deposit_amount_text);

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    // getting text from Withdraw input field------
    const withdraw_amount = document.getElementById('withdraw-amount');
    const withdraw_amount_text = withdraw_amount.value;


    // getting text from Withdraw text field-------
    const withdraw_value = document.getElementById('withdraw-value');
    const withdraw_value_text = withdraw_value.innerText;


    // Updating Withdraw Amount value--------------
    withdraw_value.innerText = parseFloat(withdraw_value_text) + parseFloat(withdraw_amount_text);
    withdraw_amount.value = '';

    //Updating balance----------------------------
    const balance = document.getElementById('balance');
    const balance_update = balance.innerText;
    balance.innerText = parseFloat(balance_update) - parseFloat(withdraw_amount_text);
    
});


