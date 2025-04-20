import React, { useState, useMemo } from "react";
import FilterBar from "./FilterBar";
import mockData from "../data/mockData.json"; // Your mock data JSON file

interface DataRow {
  creative_id: string;
  creative_nametags: string;
  country: string;
  ad_network: string;
  os: string;
  campaign: string;
  ad_group: string;
  ipm: number;
  ctr: number;
  spend: number;
  impressions: number;
  clicks: number;
  cpm: number;
  cost_per_click: number;
  cost_per_install: number;
  installs: number;
}

const DataTable: React.FC = () => {
  const [filters, setFilters] = useState({
    country: "",
    campaign: "",
    adGroup: "",
    os: "",
  });

  const onFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const onResetFilters = () => {
    setFilters({ country: "", campaign: "", adGroup: "", os: "" });
  };

  // Apply filters to data
  const filteredData = useMemo(() => {
    return mockData.filter((row: DataRow) => {
      return (
        (filters.country === "" || row.country === filters.country) &&
        (filters.campaign === "" || row.campaign === filters.campaign) &&
        (filters.adGroup === "" || row.ad_group === filters.adGroup) &&
        (filters.os === "" || row.os === filters.os)
      );
    });
  }, [filters]);

  // Extract unique filter values
  const filterOptions = useMemo(() => {
    const countries = Array.from(new Set(mockData.map((item) => item.country)));
    const campaigns = Array.from(
      new Set(mockData.map((item) => item.campaign))
    );
    const adGroups = Array.from(new Set(mockData.map((item) => item.ad_group)));
    const osList = Array.from(new Set(mockData.map((item) => item.os)));
    return { countries, campaigns, adGroups, osList };
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Segwise Report</h1>

      <FilterBar
        filters={filters}
        onFilterChange={onFilterChange}
        onReset={onResetFilters}
        options={filterOptions}
      />

      <div className="overflow-auto mt-6 bg-white rounded-xl shadow-md">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-gray-200 text-xs uppercase font-semibold text-gray-600">
            <tr>
              <th className="p-2">Creative ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Country</th>
              <th className="p-2">Ad Network</th>
              <th className="p-2">OS</th>
              <th className="p-2">Campaign</th>
              <th className="p-2">Ad Group</th>
              <th className="p-2">IPM</th>
              <th className="p-2">CTR</th>
              <th className="p-2">Spend</th>
              <th className="p-2">Impressions</th>
              <th className="p-2">Clicks</th>
              <th className="p-2">CPM</th>
              <th className="p-2">CPC</th>
              <th className="p-2">CPI</th>
              <th className="p-2">Installs</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="p-2">{row.creative_id}</td>
                <td className="p-2">{row.creative_nametags}</td>
                <td className="p-2">{row.country}</td>
                <td className="p-2">{row.ad_network}</td>
                <td className="p-2">{row.os}</td>
                <td className="p-2">{row.campaign}</td>
                <td className="p-2">{row.ad_group}</td>
                <td className="p-2">{row.ipm}</td>
                <td className="p-2">{row.ctr}</td>
                <td className="p-2">{row.spend}</td>
                <td className="p-2">{row.impressions}</td>
                <td className="p-2">{row.clicks}</td>
                <td className="p-2">{row.cpm}</td>
                <td className="p-2">{row.cost_per_click}</td>
                <td className="p-2">{row.cost_per_install}</td>
                <td className="p-2">{row.installs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
