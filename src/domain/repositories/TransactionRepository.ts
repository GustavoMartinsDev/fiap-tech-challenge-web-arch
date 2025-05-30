import { TransactionData, TransactionParams } from "../types/TransactionTypes";

export interface TransactionRepository {
  getTransactions(idAccount: number): Promise<TransactionData[]>;
  createTransaction(
    transactionParams: TransactionParams
  ): Promise<TransactionData>;
  updateTransaction(transactionData: TransactionData): Promise<TransactionData>;
  deleteTransaction(transactionId: string): Promise<void>;
}
