import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TransactionContext } from '../../contexts/TransactionContext';

interface Transaction {
  id: number;
  descricao: string;
  preco: number;
  categoria: string;
  tipo: string;
}

export function Modal() {
  const { newTransaction } = useContext(TransactionContext);

  const { register, handleSubmit, setValue, reset } = useForm<Transaction>();

  const handleNewTransaction = (data: Transaction) => {
    const novaTransacao = {
      id: Date.now(),
      descricao: data.descricao,
      preco: data.preco,
      categoria: data.categoria,
      tipo: data.tipo,
    };
    newTransaction(novaTransacao);
    reset();
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

      <Dialog.Content className="fixed inset-1/2 flex h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-start gap-6 rounded-md bg-[#202024] p-10 shadow-lg">
        <div className="flex w-full items-start justify-between">
          <Dialog.Title className="text-2xl text-white">
            Nova Transação
          </Dialog.Title>

          <Dialog.Close asChild>
            <button className="flex h-[30px] items-center rounded p-2 text-white">
              <X size={24} />
            </button>
          </Dialog.Close>
        </div>
        <form
          onSubmit={handleSubmit(handleNewTransaction)}
          className="flex flex-col gap-6"
        >
          <div className="flex w-full flex-col gap-4">
            <input
              type="text"
              placeholder="Descrição"
              className="h-[54px] w-full rounded-md bg-[#121214] pl-4 text-[#7C7C8A] placeholder:text-current"
              required
              {...register('descricao')}
            />
            <input
              type="text"
              placeholder="Preço"
              className="h-[54px] w-full rounded-md bg-[#121214] pl-4 text-[#7C7C8A] placeholder:text-current"
              required
              {...register('preco')}
            />
            <input
              type="text"
              placeholder="Categoria"
              className="h-[54px] w-full rounded-md bg-[#121214] pl-4 text-[#7C7C8A] placeholder:text-current"
              required
              {...register('categoria')}
            />
          </div>
          <RadioGroup.Root
            className="flex gap-4"
            {...register('tipo')} //
            onValueChange={(value) => setValue('tipo', value)}
          >
            <RadioGroup.Item
              value="income"
              {...register('tipo')}
              className="flex h-[60px] w-[200px] items-center justify-center gap-2 rounded-md bg-[#29292E] data-[state='checked']:bg-[#015F43] data-[state='checked']:text-white"
            >
              <ArrowCircleUp size={22} />
              Entrada
            </RadioGroup.Item>
            <RadioGroup.Item
              value="outcome"
              {...register('tipo')}
              className="flex h-[60px] w-[200px] items-center justify-center gap-2 rounded-md bg-[#29292E] data-[state='checked']:bg-[#AA2834] data-[state='checked']:text-white"
            >
              <ArrowCircleDown className="text-black" size={22} />
              Saída
            </RadioGroup.Item>
          </RadioGroup.Root>
          <button
            className="h-[50px] w-full rounded-md bg-[#00875F] text-white"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
