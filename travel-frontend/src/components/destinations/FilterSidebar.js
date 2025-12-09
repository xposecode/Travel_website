import React from 'react';
import { FiFilter } from 'react-icons/fi';

const FilterSidebar = ({ filters, setFilters }) => {
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      country: '',
      priceRange: '',
      rating: 0,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <FiFilter className="mr-2" />
        <h3 className="text-lg font-semibold">Filters</h3>
      </div>

      {/* Country Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Country</label>
        <input
          type="text"
          value={filters.country}
          onChange={(e) => handleFilterChange('country', e.target.value)}
          placeholder="Filter by country..."
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      {/* Price Range - Using buttons instead of links */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Price Range</label>
        <div className="space-y-2">
          {['$', '$$', '$$$', '$$$$'].map((range) => (
            <button
              key={range}
              onClick={() => handleFilterChange('priceRange', range)}
              className={`block w-full text-left px-3 py-2 rounded ${
                filters.priceRange === range
                  ? 'bg-blue-100 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              {range} - {range.length === 1 ? 'Budget' : 
                        range.length === 2 ? 'Moderate' : 
                        range.length === 3 ? 'Expensive' : 'Luxury'}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={clearFilters}
        className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;