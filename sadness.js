var transactionRow = document.querySelectorAll('[class*=transactionRow]');
var myDeposits = 0;
var myWithdrawals = 0;
for(var i=0; i<transactionRow.length; i++) {
    var itemType = transactionRow[i].querySelector('[class*=itemType]');
    var arr = transactionRow[i].querySelector('[class*=Amount]').innerHTML.split('$');
    var amount = parseInt(arr[1]);
    if(itemType.innerHTML.indexOf("deposit") > -1) {
        myDeposits += amount;
    }
    if(itemType.innerHTML.indexOf("withdrawal") > -1) {
        myWithdrawals += amount;
    }
}
myDeposits *= -1;
var total = myDeposits + myWithdrawals;
console.log('My Deposits: ' + myDeposits);
console.log('My Withdrawals: ' + myWithdrawals);
console.log('My Total P/L: ' + total);