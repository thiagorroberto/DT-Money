import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { useContext } from 'react';
import { TransactionContext } from '../../contexts/TransactionContext';

export function Sumary() {
  const { entrada, saida } = useContext(TransactionContext);
  const total = entrada - saida;

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <section className="mx-auto mt-[-90px] flex w-[1140px] justify-between gap-8">
      <div className="flex h-[137px] w-[350px] flex-col gap-[18px] rounded-md bg-[#323238] p-6">
        <div className="flex justify-between">
          <p className="text-base text-[#C4C4CC]">Entradas</p>
          <ArrowCircleUp size={26} color="#00B37E" />
        </div>
        <h2 className="text-3xl font-bold text-[#E1E1E6]">
          {formatCurrency(entrada)}
        </h2>
      </div>
      <div className="flex h-[137px] w-[350px] flex-col gap-[18px] rounded-md bg-[#323238] p-6">
        <div className="flex justify-between">
          <p className="text-base text-[#C4C4CC]">Saída</p>
          <ArrowCircleDown size={26} color="#F75A68" />
        </div>
        <h2 className="text-3xl font-bold text-[#E1E1E6]">
          {formatCurrency(saida)}
        </h2>
      </div>
      <div className="flex h-[137px] w-[350px] flex-col gap-[18px] rounded-md bg-[#015F43] p-6">
        <div className="flex justify-between">
          <p className="text-base text-[#C4C4CC]">Total</p>
          <CurrencyDollar size={26} color="#FFFFFF" />
        </div>
        <h2 className="text-3xl font-bold text-[#E1E1E6]">
          {formatCurrency(total)}
        </h2>
      </div>
    </section>
  );
}
