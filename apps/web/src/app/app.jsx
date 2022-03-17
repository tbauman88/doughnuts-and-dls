import { Combobox, Dialog, Transition } from '@headlessui/react';
import { FolderIcon, SearchIcon } from '@heroicons/react/outline';
import concat from 'lodash/concat';
import debounce from 'lodash/debounce';
import shuffle from 'lodash/shuffle';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { useDoughnuts } from './api';
import ActiveOption from './components/ActiveOption';
import Footer from './components/Footer';
import Help from './components/Help';
import SearchResults from './components/SearchResults';
import { drinks } from './data';
import { classNames } from './helpers/utils';

export default function App() {
  const { doughnuts, doughnutsLoading } = useDoughnuts();
  const [query, setQuery] = useState('');
  const [activeOption, setActiveOption] = useState(null);
  const [filtered, setFiltered] = useState([]);
  const [searching, setSearching] = useState(false);

  const filterResults = useCallback(
    event => {
      if (event === '?') {
        setQuery(event);
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
      setSearching(false);
    },
    [doughnuts]
  );

  const debounceFilterResults = useMemo(() => debounce(filterResults, 400), [
    filterResults
  ]);

  const handleChange = useCallback(
    e => {
      setSearching(true);
      setActiveOption(null);
      setQuery(e.target.value);
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

  const recentlyPurchased = useMemo(loadRecent, [loadRecent]);

  useEffect(() => {
    if (filtered.length === 0 && query === '') {
      setFiltered(recentlyPurchased);
    }
  }, [filtered.length, recentlyPurchased, query]);

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
            <>
              <div className="relative">
                <SearchIcon
                  className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
                <Combobox.Input
                  className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white placeholder-gray-500 sm:text-sm"
                  placeholder="Search..."
                  onChange={handleChange}
                />
              </div>

              <Combobox.Options
                static
                className="max-h-120 scroll-py-2 divide-y divide-gray-500 divide-opacity-20 overflow-y-auto"
              >
                <div
                  className={classNames(
                    'grid divide-x divide-gray-700',
                    activeOption ? 'grid-cols-2' : 'grid-cols-1'
                  )}
                >
                  <div className="min-w-0 flex-auto scroll-py-4 overflow-y-auto py-2">
                    {query === '' && !searching && (
                      <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-200">
                        Recent searches
                      </h2>
                    )}

                    {filtered.length === 0 && query != null ? (
                      <EmptyState />
                    ) : searching ? (
                      <p className="text-center text-gray-200 my-4">
                        Searching...
                      </p>
                    ) : (
                      <SearchResults filtered={filtered} />
                    )}
                  </div>
                  {activeOption != null ? (
                    <ActiveOption option={activeOption} />
                  ) : null}
                </div>
              </Combobox.Options>

              {query === '?' && <Help />}
              <Footer />
            </>
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}

const EmptyState = () => (
  <div className="py-14 px-6 text-center sm:px-14">
    <FolderIcon
      className="mx-auto h-6 w-6 text-gray-500 mb-4"
      aria-hidden="true"
    />
    <span className="mt-4 text-sm text-gray-200">
      We couldn't find any projects with that term. Please try again.
    </span>
  </div>
);
