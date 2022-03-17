import { Combobox } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import { classNames } from '../helpers/utils';

const SearchResults = ({ filtered }) => (
  <ul className="text-sm text-gray-400 max-h-80">
    {filtered.map(item => (
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
    ))}
  </ul>
);

export default SearchResults;
