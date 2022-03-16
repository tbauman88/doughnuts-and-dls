import { Combobox, Dialog, Transition } from '@headlessui/react';
import concat from 'lodash/concat';
import debounce from 'lodash/debounce';
import shuffle from 'lodash/shuffle';
import { Fragment, useCallback, useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useDoughnuts } from './api';
import { drinks } from './data';
import Footer from './Footer';
import Search from './Search';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export const STATE = {
  EMPTY: '',
  HELP: '?'
};

function Home() {
  const { doughnuts, doughnutsLoading } = useDoughnuts();

  const [state, setState] = useState(STATE.EMPTY);
  const [activeOption, setActiveOption] = useState(null);
  const [filtered, setFiltered] = useState([]);

  const filterResults = useCallback(
    event => {
      if (event === '') {
        setState(event);
      }

      if (event === '?') {
        setState(event);
      }

      const items = concat(drinks, doughnuts);

      const types = {
        '#': doughnuts,
        '>': drinks
      };

      const symbol = Object.keys(types).find(type => type === event);

      if (event.startsWith('>') || event.startsWith('#')) {
        setFiltered(types[event]);
        return;
      }

      const newItems =
        event === symbol
          ? items
          : event === '' || event.startsWith(symbol)
          ? []
          : items.filter(item => item.name.toLowerCase().includes(event));

      setFiltered(newItems);
    },
    [doughnuts]
  );

  const debounceFilterResults = useMemo(() => debounce(filterResults, 500), [
    filterResults
  ]);

  const handleChange = useCallback(
    e => {
      setActiveOption(null);
      setState(e.target.value);
      debounceFilterResults(e.target.value);
    },
    [debounceFilterResults]
  );

  const loadRecent = useCallback(() => {
    if (doughnutsLoading) return [];
    const [firstDoughnut, secondDoughnut] = shuffle(doughnuts);
    const [firstDrink, secondDrink] = shuffle(drinks);

    return [firstDoughnut, secondDoughnut, firstDrink, secondDrink];
  }, [doughnutsLoading]);

  const recentFiltered = useMemo(loadRecent, [loadRecent]);

  if (doughnutsLoading) return <span>Loading...</span>;

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto flex flex-col p-4 sm:p-0 sm:mt-40"
        onClose={() => undefined}
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
            className="mx-auto w-full max-w-2xl max-w-screen-md transform divide-y divide-gray-500 divide-opacity-20 overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all flex flex-col"
            onChange={item => setActiveOption(item)}
          >
            <Search
              onChange={handleChange}
              {...{ activeOption, filtered, recentFiltered, state }}
            />
            <Footer query={state} />
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
