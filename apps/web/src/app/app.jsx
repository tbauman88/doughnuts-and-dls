import { Combobox, Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Footer from './Footer';
import Search from './Search';

export default function App() {
  const [query, setQuery] = useState('');
  const [activeOption, setActiveOption] = useState(null);

  return (
    <Transition.Root show={true} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto flex flex-col p-4 sm:p-0 sm:mt-40"
        onClose={() => {}}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity bg-cover bg-center backgroundImage" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className="mx-auto w-full max-w-2xl transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all flex flex-col"
            onChange={item => setActiveOption(item)}
          >
            <Search
              onChange={event => {
                setActiveOption(null);
                setQuery(event.target.value);
              }}
              {...{ activeOption, query }}
            />

            <Footer {...{ query }} />
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
