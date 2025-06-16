import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Here you would typically handle the search functionality
    // For example, making an API call or filtering data
  };

  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search..."
          className="w-full px-4 py-3 pl-10 pr-12 text-gray-100 bg-gray-800 border border-gray-700 rounded-xl outline-none   focus:border-transparent placeholder-gray-500 shadow-lg"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <button
          onClick={handleSearch}
          className="absolute inset-y-0 right-0 flex items-center px-4 text-sm font-medium text-white bg-purple-600 rounded-r-xl hover:bg-purple-700 transition-colors duration-200 focus:outline-none"
        >
          Search
        </button>
      </div>
    </div>
  );
}