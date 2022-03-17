const InputSymbol = ({ symbol }) => (
  <kbd className="mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-1 border-gray-400 text-gray-900">
    {symbol}
  </kbd>
);

const Footer = () => {
  return (
    <div className="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700">
      <span>Type</span>
      <InputSymbol symbol="#" />
      <span className="sm:hidden">for doughnuts,</span>
      <span className="hidden sm:inline">to access all doughnuts,</span>
      <InputSymbol symbol="&gt;" />
      <span>for all drinks, and</span>
      <InputSymbol symbol="?" />
      <span>for help.</span>
    </div>
  );
};

export default Footer;
