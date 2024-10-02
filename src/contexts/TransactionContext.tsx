import { createContext, ReactNode, useState } from 'react';

interface Transaction {
  id: number;
  descricao: string;
  preco: number;
  categoria: string;
  tipo: string;
}

interface TransactionContextData {
  transactions: Transaction[];
  newTransaction: (transaction: Transaction) => void;
  entrada: number;
  saida: number;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);

  function newTransaction(transaction: Transaction) {
    setTransactions((state) => [...state, transaction]);

    if (transaction.tipo === 'income') {
      setEntrada((state) => state + Number(transaction.preco));
    } else if (transaction.tipo === 'outcome') {
      setSaida((state) => state + Number(transaction.preco));
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        newTransaction,
        entrada,
        saida,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
