function income() {

    const incomeText = document.getElementById('income-field').value;
    const incomeNum = parseFloat(incomeText);
    if (typeof incomeNum == "number") {
        if (incomeNum > 0) {
            document.getElementById('alert-msg').innerText = "";
            const balance = document.getElementById('balance');
            const remainingMoney = incomeNum - totalExpense();
            balance.innerText = remainingMoney;
            return remainingMoney;
        }
        else {
            document.getElementById('alert-msg').innerText = "Give number greater than 0 Or Please Give A Number";
        }
    }

}


function totalExpense() {
    const foodText = document.getElementById('food').value;
    const foodNum = parseFloat(foodText);

    const rentText = document.getElementById('rent').value;
    const rentNum = parseFloat(rentText);

    const clothText = document.getElementById('cloth').value;
    const clothNum = parseFloat(clothText);

    const incomeText = document.getElementById('income-field').value;
    const incomeNum = parseFloat(incomeText);

    if (typeof foodNum == "number" && typeof rentNum == "number" && typeof clothNum == "number") {
        if (foodNum > 0 && rentNum > 0 && clothNum > 0) {
            document.getElementById('alert-msg').innerText = "";
            const expenses = document.getElementById('total-expenses');
            const totalExpense = foodNum + rentNum + clothNum;
            if (totalExpense <= incomeNum) {
                expenses.innerText = totalExpense;
            }
            else {
                document.getElementById('alert-msg').innerText = "Invalid Balance"
            }
            return totalExpense;
        }
        else {
            document.getElementById('alert-msg').innerText = "Give number greater than 0 Or Please Give A Number";
        }
    }

}

function percentageCalulation() {
    const percentageText = document.getElementById('percentage');
    const percentageNum = parseFloat(percentageText.value);
    if (typeof percentageNum == "number" && percentageNum > 0) {
        document.getElementById('second-alert').innerText = '';
        const totalPercentageAmount = percentageNum / 100;
        const salaryText = document.getElementById('income-field').value;
        const salaryNum = parseFloat(salaryText);
        const saveAmount = salaryNum * totalPercentageAmount;
        const saveText = document.getElementById('save-amount');
        if (saveAmount <= income()) {
            saveText.innerText = saveAmount;
        }
        else {
            document.getElementById('second-alert').innerText = "Invalid Input";
        }
        return saveAmount;
    } else {
        document.getElementById('second-alert').innerText = "Give Correct Input";
    }
}

function remainingBalance() {
    const remainBalance = document.getElementById('remain-balance');
    const balanceLeft = income() - percentageCalulation();
    remainBalance.innerText = balanceLeft;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    income();
    totalExpense();
});

document.getElementById('save-button').addEventListener('click', function () {
    percentageCalulation();
    remainingBalance();
});