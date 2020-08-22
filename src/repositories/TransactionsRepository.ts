import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODOconst incomeArray: number[] = [0];
    const incomeArray: number[] = [0];
    const outcomeArray: number[] = [0];

    this.transactions.forEach(transaction => {
      if (transaction.type === 'income') {
        incomeArray.push(transaction.value);
      } else {
        outcomeArray.push(transaction.value);
      }
    });

    const income = incomeArray.reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
    );
    const outcome = outcomeArray.reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
    );

    const total = income - outcome;

    const balance = {
      income,
      outcome,
      total,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
