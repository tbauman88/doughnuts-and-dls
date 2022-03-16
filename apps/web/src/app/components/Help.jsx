import { SupportIcon } from '@heroicons/react/outline';

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

export default Help;
