/*
Задание 3
Это расширенная версия задачи с банком, которую мы решлали на семинаре:

Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

*/


class Bank {
  bankName = this.bankName
  clientsList = this.clientsList
  accountsList = this.accountsList
  balance = this.balance

  constructor(bankName) {
    this.bankName = bankName
  }

  addClient(client) {
    this.clientsList.push(client)
  }
  openAccount(client, amount) {
    this.accountsList.push(client)
    client.balance = amount
  }
  deposit(amount) {
    console.log(`Deposited ${amount}. New balance ${this.balance + amount}`);
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      console.log(`Withdrawn ${amount}. New balance ${this.balance - amount}`);
    } else {
      console.log(`Insufficient account`);
    }
  }
  checkBalance(client) {
    console.log(`Current balance: ${client.balance}`);
  }
}

class Client {
  name = this.name
  age = this.age

  constructor(name, age) {
    this.name = name
    this.age = age
  }
}


const bank = new Bank("Мой Банк");

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.deposit(123456789, 200);
bank.withdraw(987654321, 100);
bank.checkBalance(123456789);
bank.checkBalance(987654321);