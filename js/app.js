function income() {

    const incomeText = document.getElementById('income-field').value;
    const incomeNum = parseFloat(incomeText);
    if (typeof incomeNum == "number") {
        if (incomeNum > 0) {
            document.getElementById('alert-msg').innerText = "";
            const balance = document.getElementById('balance');
            const restMoney = incomeNum - totalExpense();
            balance.innerText = restMoney;
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

    if (typeof foodNum == "number" && typeof rentNum == "number" && typeof clothNum == "number") {
        if (foodNum > 0 && rentNum > 0 && clothNum > 0) {
            document.getElementById('alert-msg').innerText = "";
            const expenses = document.getElementById('total-expenses');
            const totalExpense = foodNum + rentNum + clothNum;
            expenses.innerText = totalExpense;
            return totalExpense;

        }
        else {
            document.getElementById('alert-msg').innerText = "Give number greater than 0 Or Please Give A Number";
        }
    }

}


document.getElementById('calculate-button').addEventListener('click', function () {
    income();
    totalExpense();


})