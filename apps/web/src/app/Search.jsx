import { Combobox } from '@headlessui/react';
import { FolderIcon, SearchIcon, SupportIcon } from '@heroicons/react/outline';
import { ChevronRightIcon } from '@heroicons/react/solid';
import upperFirst from 'lodash/upperFirst';
import { STATE } from './app';
import { classNames } from './helpers/utils';

const Help = () => (
  <div className="py-14 px-6 text-center text-sm sm:px-14">
    <SupportIcon className="mx-auto h-6 w-6 text-white" aria-hidden="true" />
    <h2 className="mt-4 font-semibold text-white">Help with searching</h2>
    <h2 className="mt-2 text-gray-500">
      Use this tool to quickly search for doughtnuts and coffee across our
      entire platform. You can also use the search modifiers found in the footer
      below to limit the results to just doughtnuts and coffee.
    </h2>
  </div>
);

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

const Option = ({ item, onClick }) => (
  <Combobox.Option
    key={item.id}
    value={item}
    className={({ active }) =>
      classNames(
        'flex cursor-default select-none items-center rounded-md px-3 py-2',
        active && 'bg-gray-800 text-white'
      )
    }
  >
    {({ active }) => (
      <>
        <span className="flex-auto truncate">{item.name}</span>
        {active && (
          <ChevronRightIcon
            className="ml-3 h-5 w-5 flex-none text-gray-400"
            aria-hidden="true"
          />
        )}
      </>
    )}
  </Combobox.Option>
);

const ActiveOption = ({ activeOption }) => (
  <div className="flex flex-none flex-col divide-y divide-gray-700 w-full">
    <div className="flex-none p-6 text-center">
      <div className="mx-auto flex items-center justify-center h-44 w-44 overflow-hidden rounded-full ring-2 ring-gray-700">
        <img
          src={activeOption.imageUrl}
          alt={activeOption.name}
          className="w-full aspect-auto"
        />
      </div>
      <h2 className="mt-3 font-semibold text-white">{activeOption.name}</h2>
      <span className="text-sm text-gray-400">{activeOption.description}</span>
    </div>
    <div className="flex flex-col align-between p-6 ">
      <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm">
        <dt className="col-end-1 font-semibold text-gray-500">Price</dt>
        <dd className="text-right text-gray-500">{activeOption.price}</dd>
        <dt className="col-end-1 font-semibold text-gray-500">Type</dt>
        <dd className="text-right text-gray-500">
          {upperFirst(activeOption.type) || 'Coffee'}
        </dd>
      </dl>
      <button
        type="button"
        className="mt-6 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Place Order
      </button>
    </div>
  </div>
);

const Search = ({
  activeOption,
  onChange,
  filtered,
  recentFiltered,
  state
}) => {
  const empty = state === STATE.EMPTY;
  const help = state === STATE.HELP;
  const showResults = recentFiltered.length > 0 || filtered.length > 0;

  return (
    showResults && (
      <>
        <div className="relative">
          <SearchIcon
            className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-500"
            aria-hidden="true"
          />
          <Combobox.Input
            className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white placeholder-gray-500 sm:text-sm"
            placeholder="Search..."
            onChange={onChange}
          />
        </div>

        {(empty || filtered.length > 0) && (
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
                {empty && (
                  <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-200">
                    Recent searches
                  </h2>
                )}
                <ul className="text-sm text-gray-400 max-h-80">
                  {(empty ? recentFiltered : filtered).map(item => (
                    <Option key={item.id} {...{ item }} />
                  ))}
                </ul>
              </div>
              {activeOption != null ? (
                <ActiveOption {...{ activeOption }} />
              ) : null}
            </div>
          </Combobox.Options>
        )}

        {help && <Help />}
        {!empty && !help && filtered.length === 0 && <EmptyState />}
      </>
    )
  );
};

export default Search;
