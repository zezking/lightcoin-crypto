let balance = 500.0;

class Account {
  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

  commit() {
    this.account.balance += this.value;
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
}
class Withdrawal extends Transaction {
  get value() {
    return -this.value;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.value;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const Account1 = new Account("Enze");

t1 = new Withdrawal(100, Account1);
console.log(t1);
// console.log(Account1);
// t1 = new Withdrawal(50.25);
// t1.commit();

// console.log("Transaction 1:", t1);

// t2 = new Withdrawal(9.99);
// t2.commit();
// console.log("Transaction 2:", t2);

// t3 = new Deposit(100);
// t3.commit();
// console.log("Transaction 3", t3);

// console.log("Balance:", balance);
