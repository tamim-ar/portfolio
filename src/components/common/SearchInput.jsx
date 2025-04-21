import { FaSearch } from 'react-icons/fa';

export const SearchInput = ({ value, onChange, placeholder, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                   focus:ring-2 focus:ring-primary-500 focus:border-transparent
                   transition-colors duration-200"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      {value && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <button
            onClick={() => onChange('')}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
