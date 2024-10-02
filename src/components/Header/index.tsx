import logo from '../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { Modal } from '../Modal';

export function Header() {
  return (
    <div className="flex h-[212px] w-full bg-[#121214]">
      <nav className="mx-auto mt-10 flex h-[50px] w-[1140px] items-start justify-between">
        <img src={logo} alt="" className="h-[42px] w-[172px]" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="h-[50px] w-[152px] rounded-md bg-[#00875F] p-2 font-medium text-zinc-50">
              Nova transação
            </button>
          </Dialog.Trigger>

          <Modal />
        </Dialog.Root>
      </nav>
    </div>
  );
}
