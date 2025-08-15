# Financial Market Dashboard

A modern, responsive financial analysis website built with Next.js, featuring real-time charts for major market indices like Finviz.com.

## Features

- **Real-time Market Data**: Live tracking of DOW, NASDAQ, and S&P 500 indices
- **Interactive Charts**: Beautiful, responsive charts built with Chart.js
- **Market Summary Cards**: Quick overview of current prices and changes
- **Auto-updating Data**: Simulated real-time data updates every 5 seconds
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode Support**: Built-in dark/light theme support
- **Modern UI**: Clean, professional interface using Tailwind CSS

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with hooks and modern patterns
- **Chart.js** - Professional charting library
- **react-chartjs-2** - React wrapper for Chart.js
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript development

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gold-star
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── StockChart.tsx      # Individual stock chart component
│   └── FinancialDashboard.tsx # Main dashboard component
```

## Components

### StockChart
- Displays individual stock/index charts
- Shows current price, change, and percentage
- Interactive tooltips and hover effects
- Responsive design with smooth animations

### FinancialDashboard
- Main dashboard container
- Market summary cards
- Chart grid layout
- Real-time data simulation
- Refresh functionality

## Data Sources

Currently, the application uses simulated data for demonstration purposes. In a production environment, you would integrate with:

- **Financial APIs**: Alpha Vantage, Yahoo Finance, or IEX Cloud
- **Real-time Data**: WebSocket connections for live market updates
- **Historical Data**: Time-series data for chart analysis

## Customization

### Adding New Indices
1. Add new index data to the `marketData` array in `FinancialDashboard.tsx`
2. Update the `colors` object with your preferred color scheme
3. The charts will automatically render with the new data

### Styling
- Modify Tailwind classes in component files
- Update color schemes in the `colors` object
- Customize chart options in `StockChart.tsx`

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## Future Enhancements

- [ ] Real financial API integration
- [ ] Historical data charts
- [ ] Technical indicators
- [ ] Portfolio tracking
- [ ] News feed integration
- [ ] User authentication
- [ ] Watchlist functionality
- [ ] Export capabilities

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Chart.js for the excellent charting library
- Tailwind CSS for the utility-first styling approach
- Next.js team for the amazing React framework
