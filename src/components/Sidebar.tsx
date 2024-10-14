import React from 'react';
import { Home, Folder, Image, Users, Trash } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-56 bg-gray-50 p-4 overflow-y-auto">
      <div className="mb-6">
        <button className="w-full bg-blue-600 text-white rounded-md py-2 px-4 text-sm font-medium">
          Create or upload
        </button>
      </div>
      <nav>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2">
              <Folder className="h-5 w-5" />
              <span>My files</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2">
              <Image className="h-5 w-5" />
              <span>Photos</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2">
              <Users className="h-5 w-5" />
              <span>Shared</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2">
              <Trash className="h-5 w-5" />
              <span>Recycle bin</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Browse files by</h3>
        <ul className="mt-2 space-y-2 text-sm">
          <li>
            <a href="#" className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2">
              <Users className="h-5 w-5" />
              <span>People</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <div className="bg-gray-100 rounded-md p-4">
          <p className="text-xs text-gray-600 mb-2">Get storage for all your files and photos.</p>
          <button className="w-full bg-white text-blue-600 border border-blue-600 rounded-md py-1 px-3 text-sm font-medium">
            Buy storage
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;