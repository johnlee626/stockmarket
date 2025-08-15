'use client';

import React, { useState, useEffect } from 'react';
import StockChart from './StockChart';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  data: number[];
  labels: string[];
}

export default function FinancialDashboard() {
  const [marketData, setMarketData] = useState<MarketData[]>([
    {
      symbol: 'DOW',
      price: 38543.07,
      change: 123.45,
      changePercent: 0.32,
      data: [38420, 38450, 38480, 38500, 38520, 38540, 38560, 38580, 38600, 38543],
      labels: ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '1:00', '1:30', '2:00']
    },
    {
      symbol: 'NASDAQ',
      price: 15605.48,
      change: -45.67,
      changePercent: -0.29,
      data: [15650, 15640, 15630, 15620, 15610, 15600, 15590, 15580, 15570, 15605],
      labels: ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '1:00', '1:30', '2:00']
    },
    {
      symbol: 'S&P 500',
      price: 4958.61,
      change: 23.89,
      changePercent: 0.48,
      data: [4935, 4940, 4945, 4950, 4955, 4960, 4965, 4970, 4975, 4959],
      labels: ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '1:00', '1:30', '2:00']
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prevData => 
        prevData.map(index => ({
          ...index,
          price: index.price + (Math.random() - 0.5) * 10,
          change: index.change + (Math.random() - 0.5) * 2,
          changePercent: ((index.change + (Math.random() - 0.5) * 2) / index.price) * 100,
          data: [...index.data.slice(1), index.price + (Math.random() - 0.5) * 10]
        }))
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const refreshData = async () => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate new mock data
    const newData = marketData.map(index => ({
      ...index,
      price: index.price + (Math.random() - 0.5) * 20,
      change: index.change + (Math.random() - 0.5) * 5,
      changePercent: ((index.change + (Math.random() - 0.5) * 5) / index.price) * 100,
      data: Array.from({ length: 10 }, () => index.price + (Math.random() - 0.5) * 50)
    }));
    
    setMarketData(newData);
    setIsLoading(false);
  };

  const colors = {
    DOW: '#2563eb', // Blue
    NASDAQ: '#dc2626', // Red
    'S&P 500': '#059669' // Green
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Financial Market Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real-time tracking of major market indices
          </p>
          <button
            onClick={refreshData}
            disabled={isLoading}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Refreshing...' : 'Refresh Data'}
          </button>
        </div>

        {/* Market Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {marketData.map((index) => (
            <div key={index.symbol} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {index.symbol}
                </h3>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  ${index.price.toFixed(2)}
                </div>
                <div className={`text-sm font-medium ${index.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {index.change >= 0 ? '+' : ''}{index.change.toFixed(2)} ({index.changePercent >= 0 ? '+' : ''}{index.changePercent.toFixed(2)}%)
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {marketData.map((index) => (
            <StockChart
              key={index.symbol}
              title={index.symbol}
              data={index.data}
              labels={index.labels}
              color={colors[index.symbol as keyof typeof colors]}
              currentValue={index.price}
              change={index.change}
              changePercent={index.changePercent}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Data is simulated for demonstration purposes. In a real application, this would connect to financial APIs.</p>
          <p className="mt-2">Built with Next.js, Chart.js, and Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
} 