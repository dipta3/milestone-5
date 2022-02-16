document.getElementById('calculate-button').addEventListener('click', function () {
    let totalIncome = document.getElementById('input-field').value;
    totalIncome = parseInt(totalIncome);

    let foodExpence = document.getElementById('food').value;
    foodExpence = parseInt(foodExpence);

    let rentExpence = document.getElementById('rent').value;
    rentExpence = parseInt(rentExpence);

    let clotheExpence = document.getElementById('clothe').value;
    clotheExpence = parseInt(clotheExpence);
    totalSpend = foodExpence + rentExpence + clotheExpence;

    totalIncome = '';
    foodExpence = '';

    let totalExpense = document.getElementById('total-expenses');
    totalExpense.innerText = totalSpend;

    let balance = document.getElementById('balance');
    balance.innerText = totalIncome - totalSpend;



})