
function test(program, isAdd) {
    const transactionAmount = document.getElementById(program + '-amount');
    const transactionAmountText = parseFloat(transactionAmount.value);
    
    if (isNaN(transactionAmountText) == false) {

        // getting text from text field-------
        const transactionValue = document.getElementById(program + '-value');
        const transactionValueText = parseFloat(transactionValue.innerText);

        // Updating Amount value--------------
        transactionValue.innerText = transactionValueText + transactionAmountText;
        transactionAmount.value = '';

        //Updating balance----------------------------
        const balance = document.getElementById('balance');
        const balance_update = parseFloat(balance.innerText);
        if (isAdd) {
            balance.innerText = balance_update + transactionAmountText;
        }
        else if (balance_update >= transactionAmountText) {
            balance.innerText = balance_update - transactionAmountText;
        }
    }
    else {
        alert('Please input amount');
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // getting text from Deposit input field------
    // const transactionAmount = document.getElementById('deposit-amount');
    // const transactionAmountText = transactionAmount.value;

    // // getting text from Deposit text field-------
    // const transactionValue = document.getElementById('deposit-value');
    // const transactionValueText = transactionValue.innerText;

    // // Updating Deposit Amount value--------------
    // transactionValue.innerText = parseFloat(transactionValueText) + parseFloat(transactionAmountText);
    // transactionAmount.value = '';

    // //Updating balance----------------------------
    // const balance = document.getElementById('balance');
    // const balance_update = balance.innerText;
    // balance.innerText = parseFloat(balance_update) + parseFloat(transactionAmountText);

    test('deposit', true);

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    // getting text from Withdraw input field------
    // const withdraw_amount = document.getElementById('withdraw-amount');
    // const withdraw_amount_text = withdraw_amount.value;


    // // getting text from Withdraw text field-------
    // const withdraw_value = document.getElementById('withdraw-value');
    // const withdraw_value_text = withdraw_value.innerText;


    // // Updating Withdraw Amount value--------------
    // withdraw_value.innerText = parseFloat(withdraw_value_text) + parseFloat(withdraw_amount_text);
    // withdraw_amount.value = '';

    // //Updating balance----------------------------
    // const balance = document.getElementById('balance');
    // const balance_update = balance.innerText;
    // balance.innerText = parseFloat(balance_update) - parseFloat(withdraw_amount_text);

    test('withdraw', false);
    
});


