'use client';

import React, { useState } from 'react';

interface TickerData {
  ticker: string;
  last: number;
  change: number;
  changePercent: number;
  signal: 'buy' | 'sell' | 'hold';
}

export default function TickerTable() {
  const [tickers] = useState<TickerData[]>([
    { ticker: 'AAPL', last: 175.43, change: 2.15, changePercent: 1.24, signal: 'buy' },
    { ticker: 'MSFT', last: 378.85, change: -1.23, changePercent: -0.32, signal: 'hold' },
    { ticker: 'GOOGL', last: 142.56, change: 3.45, changePercent: 2.48, signal: 'buy' },
    { ticker: 'AMZN', last: 155.32, change: -0.87, changePercent: -0.56, signal: 'sell' },
    { ticker: 'TSLA', last: 248.50, change: 12.30, changePercent: 5.21, signal: 'buy' },
    { ticker: 'META', last: 485.58, change: 8.92, changePercent: 1.87, signal: 'buy' },
    { ticker: 'NVDA', last: 875.28, change: -15.45, changePercent: -1.73, signal: 'hold' },
    { ticker: 'NFLX', last: 612.04, change: 4.67, changePercent: 0.77, signal: 'hold' },
    { ticker: 'AMD', last: 156.78, change: 2.34, changePercent: 1.52, signal: 'buy' },
    { ticker: 'INTC', last: 44.23, change: -0.56, changePercent: -1.25, signal: 'sell' },
  ]);

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case 'buy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'sell':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'hold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSignalIcon = (signal: string) => {
    switch (signal) {
      case 'buy':
        return '↗';
      case 'sell':
        return '↘';
      case 'hold':
        return '→';
      default:
        return '−';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Market Tickers
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Real-time stock data and trading signals
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Ticker
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Last
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Change
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Signal
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {tickers.map((ticker, index) => (
              <tr 
                key={ticker.ticker} 
                className={`hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {ticker.ticker}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    ${ticker.last.toFixed(2)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className={`text-sm font-medium ${
                    ticker.change >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {ticker.change >= 0 ? '+' : ''}{ticker.change.toFixed(2)}
                  </div>
                  <div className={`text-xs ${
                    ticker.changePercent >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {ticker.changePercent >= 0 ? '+' : ''}{ticker.changePercent.toFixed(2)}%
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getSignalColor(ticker.signal)}`}>
                    <span className="mr-1">{getSignalIcon(ticker.signal)}</span>
                    {ticker.signal.charAt(0).toUpperCase() + ticker.signal.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 