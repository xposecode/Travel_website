import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { destinationAPI } from '../services/api';
import DestinationCard from '../components/destinations/DestinationCard';
import SearchBar from '../components/common/SearchBar';
import FilterSidebar from '../components/destinations/FilterSidebar';
import { FiFilter, FiGrid, FiList } from 'react-icons/fi';

const Destinations = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [filters, setFilters] = useState({
    country: '',
    priceRange: '',
    rating: 0,
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch destinations with filters
  const { data: destinations, isLoading, error } = useQuery({
    queryKey: ['destinations', filters, searchQuery],
    queryFn: () => destinationAPI.getAll({ ...filters, search: searchQuery }),
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Destinations</h1>
          <p className="text-xl">Discover amazing places around the world</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <FilterSidebar filters={filters} setFilters={setFilters} />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search and Controls */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex-grow">
                  <SearchBar 
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Search destinations..."
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">View:</span>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
                  >
                    <FiGrid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
                  >
                    <FiList size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                {isLoading ? 'Loading...' : `Found ${destinations?.length || 0} destinations`}
              </p>
            </div>

            {/* Destinations Grid/List */}
            {isLoading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                <p className="mt-4">Loading destinations...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12 text-red-600">
                Error loading destinations. Please try again.
              </div>
            ) : destinations?.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No destinations found. Try different filters.</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-6'
              }>
                {destinations.map((destination) => (
                  <DestinationCard 
                    key={destination.id} 
                    destination={destination}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;