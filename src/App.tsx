import { Header } from './components/Header';
import { Sumary } from './components/Sumary';
import { Transactions } from './components/Transactions';
import { TransactionProvider } from './contexts/TransactionContext';

export function App() {
  return (
    <div className="flex h-screen flex-col bg-[#202024]">
      <TransactionProvider>
        <Header />
        <Sumary />
        <Transactions />
      </TransactionProvider>
    </div>
  );
}
