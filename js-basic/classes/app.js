'use strict';

const account = {
  transactions: []
};

const logger = {
  record(type, amount) {
    this.transactions.push({ type, amount });
  }
};

// Ваш код здесь
const recordAccount = logger.record.bind(account, 'deposit');

recordAccount(100);

console.log(account);
