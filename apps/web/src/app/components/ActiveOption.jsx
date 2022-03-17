import upperFirst from 'lodash/upperFirst';

const ActiveOption = ({ option }) => (
  <div className="flex flex-none flex-col divide-y divide-gray-700 w-full">
    <div className="flex-none p-6 text-center">
      <div className="mx-auto flex items-center justify-center h-44 w-44 overflow-hidden rounded-full ring-2 ring-gray-700">
        <img
          src={option.imageUrl}
          alt={option.name}
          className="w-full aspect-auto"
        />
      </div>
      <h2 className="mt-3 font-semibold text-white">{option.name}</h2>
      <span className="text-sm text-gray-400">{option.description}</span>
    </div>
    <div className="flex flex-col align-between p-6 ">
      <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm">
        <dt className="col-end-1 font-semibold text-gray-500">Price</dt>
        <dd className="text-right text-gray-500">{option.price}</dd>
        <dt className="col-end-1 font-semibold text-gray-500">Type</dt>
        <dd className="text-right text-gray-500">
          {upperFirst(option.type) || 'Coffee'}
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

export default ActiveOption;
