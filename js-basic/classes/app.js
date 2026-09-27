const wallet = {
  balance: 0,
  operations: [],
  increase: function(sum, reason) {
    this.balance += sum;
    this.operations.push({
        reason: reason,
        sum: sum
    });
    return true;
  },
  decrease: function(sum, reason) {
    if (this.balance < sum) {
        console.log('Недостаточно баланса!');
        return false;
    }
    this.balance -= sum;
    this.operations.push({
        reason: reason,
        sum: -sum
    });
    return true;
  },
  getOperationsLength: function () {
    return this.operations.length;
  }
};

console.log(wallet.increase(500, 'Зарплата'))
console.log(wallet.getOperationsLength())
console.log(wallet.decrease(250, 'Кредит'))
console.log(wallet.operations)
