# Segwise Report

A React and TypeScript based application for analyzing and displaying mobile app advertising data with filtering and sorting capabilities.

## Features

- **Data Table Visualization**: Display ad creative performance metrics in an organized table format
- **Advanced Filtering**: Filter advertising data by country, ad network, OS, campaign, and ad group
- **Responsive Design**: Clean, user-friendly interface for data exploration
- **Type Safety**: Built with TypeScript for robust, maintainable code
- **Real-time Updates**: Filter and sort data dynamically

## Project Structure

```
src/
├── App.tsx                 # Main application component
├── index.tsx              # React entry point
├── index.css              # Global styling
├── components/
│   ├── DataTable.tsx      # Main data table component
│   └── FilterBar.tsx      # Filtering controls component
├── data/
│   └── mockData.json      # Sample advertising data
└── types/
    └── index.ts           # TypeScript type definitions
public/
└── index.html             # HTML template
```

## Data Model

The application works with advertising creative data containing the following metrics:

- **Identifiers**: Creative ID, name, campaign, ad group
- **Targeting**: Country, ad network, OS, tags
- **Performance**: CTR (Click-Through Rate), impressions, clicks
- **Economics**: Spend, CPM (Cost Per Mille), CPC (Cost Per Click), CPI (Cost Per Install)
- **Conversions**: Installs, IPM (Installs Per Mille)

### Creative Interface

```typescript
interface Creative {
  creative_id: string;
  creative_name: string;
  tags: string[];
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
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Segwise_Report-main
```

2. Install dependencies:
```bash
npm install
```

### Available Scripts

#### Development Server
```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Build for Production
```bash
npm build
```
Builds the app for production to the `build` folder.

#### Run Tests
```bash
npm test
```
Launches the test runner in interactive watch mode.

## Components

### DataTable.tsx
The main component that displays advertising data in a table format with sorting and filtering capabilities.

**Features:**
- Responsive table layout
- Column sorting
- Integration with FilterBar for dynamic filtering
- Performance metric visualization

### FilterBar.tsx
Provides filtering controls for users to narrow down the data based on various criteria.

**Filtering Options:**
- Country selection
- Ad Network selection
- Operating System (OS) filtering
- Campaign filtering
- Ad Group filtering

## Technologies Used

- **React** 18.2.0 - UI library
- **TypeScript** 4.4.4 - Type-safe language
- **React Scripts** 5.0.1 - Build tooling

### Dev Dependencies

- @types/react & @types/react-dom - TypeScript type definitions for React
- TypeScript - Static type checking

## Usage Example

The application loads advertising data from `src/data/mockData.json` and displays it in an interactive table. Users can:

1. View all advertising creatives in the data table
2. Filter by country, network, OS, campaign, or ad group
3. Sort columns to analyze different metrics
4. Track key performance indicators (KPI) like CTR, CPI, and spend

## Browser Support

The application supports all modern browsers with the following minimum versions:
- Chrome/Edge: Latest
- Firefox: Latest
- Safari: Latest

## Contributing

Contributions are welcome! Please ensure that:
- Code is properly typed with TypeScript
- Components follow React best practices
- Changes maintain backward compatibility

## License

Please refer to the LICENSE file in the repository.

## Support

For issues or questions, please open an issue in the repository.
