import { MagnifyingGlass } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { TransactionContext } from '../../contexts/TransactionContext';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function Transactions() {
  const { transactions } = useContext(TransactionContext);

  const [filter, setFilter] = useState<string>('');
  const [transactionsFiltered, setTransactionsFiltered] =
    useState(transactions);

  const formatDate = (date: number) => {
    return format(date, 'dd/MM/yyyy', {
      locale: ptBR,
    });
  };

  const handleFilter = () => {
    const filtered = transactions.filter((transaction) =>
      transaction.descricao.toLowerCase().includes(filter.toLowerCase())
    );
    setTransactionsFiltered(filtered);
  };

  useEffect(() => {
    handleFilter();
  }, [transactions]);

  return (
    <main className="mx-auto mb-6 mt-[64px] flex w-[1140px] flex-col gap-10">
      <div className="flex w-full justify-between gap-4">
        <input
          type="text"
          placeholder="Busque uma transação"
          onChange={(e) => setFilter(e.target.value)}
          className="h-[54px] w-full rounded-md bg-[#121214] pl-4 text-[#7C7C8A] placeholder:text-current"
        />
        <button
          className="flex h-[54px] w-[147px] items-center justify-center gap-2 rounded-md border-[1px] border-[#00B37E] font-medium text-[#00B37E]"
          onClick={handleFilter}
        >
          <MagnifyingGlass size={20} weight="bold" color="#00B37E" />
          Buscar
        </button>
      </div>
      <table className="flex flex-col gap-4">
        <tbody className="flex flex-col gap-4">
          {transactionsFiltered.map((transaction) => (
            <tr
              key={transaction.id}
              className="flex h-[66px] items-center justify-between rounded-md bg-[#29292E] px-8"
            >
              <td className="w-[45%]">{transaction.descricao}</td>
              <td
                className={`w-[20%] ${
                  transaction.tipo === 'income'
                    ? 'text-[#00B37E]'
                    : 'text-[#F75A68]'
                }`}
              >
                {transaction.tipo === 'income'
                  ? `R$ ${transaction.preco}`
                  : `- R$ ${transaction.preco}`}
              </td>
              <td className="w-[25%]">{transaction.categoria}</td>
              <td className="w-[10%]">{formatDate(transaction.id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
