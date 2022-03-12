import { classNames } from './helpers/utils';

const InputSymbol = ({ symbol, query }) => (
  <kbd
    className={classNames(
      'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-1',
      query.startsWith(symbol)
        ? 'border-indigo-500 text-indigo-500'
        : 'border-gray-400 text-gray-900'
    )}
  >
    {symbol}
  </kbd>
);

const Footer = ({ query }) => {
  return (
    <div className="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700">
      Type
      <InputSymbol symbol="#" {...{ query }} />
      <span className="sm:hidden">for doughnuts,</span>
      <span className="hidden sm:inline">to access all doughnuts,</span>
      <InputSymbol symbol="&gt;" {...{ query }} />
      for all drinks, and
      <InputSymbol symbol="?" {...{ query }} />
      for help.
    </div>
  );
};

export default Footer;
