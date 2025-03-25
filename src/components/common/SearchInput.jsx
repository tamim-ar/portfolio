import { FaSearch } from 'react-icons/fa';

export const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
                 bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};
