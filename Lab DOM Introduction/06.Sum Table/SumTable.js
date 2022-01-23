function sumTable() {
    const prices = document.querySelectorAll('td');
    let sum = 0;
    for (let i = 1; i < prices.length-2; i+=2) {
        sum += Number(prices[i].textContent);
    }
    const result = document.getElementById('sum');
    result.textContent = sum.toString();
}