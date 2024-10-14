import React from 'react';
import { Search, Diamond, Link, Settings, HelpCircle, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-2 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold">OneDrive</span>
          <div className="relative">
            <input
              type="text"
              placeholder="Search everything"
              className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Diamond className="h-5 w-5 text-gray-600" />
          <Link className="h-5 w-5 text-gray-600" />
          <Settings className="h-5 w-5 text-gray-600" />
          <HelpCircle className="h-5 w-5 text-gray-600" />
          <User className="h-6 w-6 text-gray-600" />
        </div>
      </div>
    </header>
  );
};

export default Header;