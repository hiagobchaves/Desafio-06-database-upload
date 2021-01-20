import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

// import Transaction from '../models/Transaction';

import Transactionsrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionRepository = getCustomRepository(Transactionsrepository);

    const transactions = await transactionRepository.findOne(id);

    if (!transactions) {
      throw new AppError('Transaction does not exist');
    }

    await transactionRepository.remove(transactions);
  }
}

export default DeleteTransactionService;
