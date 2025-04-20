import React from "react";

interface FilterBarProps {
  filters: {
    country: string;
    campaign: string;
    adGroup: string;
    os: string;
  };
  onFilterChange: (key: string, value: string) => void;
  onReset: () => void;
  options: {
    countries: string[];
    campaigns: string[];
    adGroups: string[];
    osList: string[];
  };
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  onReset,
  options,
}) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white shadow-md rounded-xl">
      {/* Country Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <select
          value={filters.country}
          onChange={(e) => onFilterChange("country", e.target.value)}
          className="mt-1 block w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All</option>
          {options.countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      {/* Campaign Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Campaign
        </label>
        <select
          value={filters.campaign}
          onChange={(e) => onFilterChange("campaign", e.target.value)}
          className="mt-1 block w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All</option>
          {options.campaigns.map((campaign) => (
            <option key={campaign} value={campaign}>
              {campaign}
            </option>
          ))}
        </select>
      </div>

      {/* Ad Group Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Ad Group
        </label>
        <select
          value={filters.adGroup}
          onChange={(e) => onFilterChange("adGroup", e.target.value)}
          className="mt-1 block w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All</option>
          {options.adGroups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>
      </div>

      {/* OS Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-700">OS</label>
        <select
          value={filters.os}
          onChange={(e) => onFilterChange("os", e.target.value)}
          className="mt-1 block w-40 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All</option>
          {options.osList.map((os) => (
            <option key={os} value={os}>
              {os}
            </option>
          ))}
        </select>
      </div>

      {/* Reset Button */}
      <div className="self-end">
        <button
          onClick={onReset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
