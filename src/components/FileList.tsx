import React from 'react';
import { FileText, FileSpreadsheet } from 'lucide-react';

const files = [
  { name: 'Tp Application Form', type: 'word', opened: 'Oct 2', owner: 'Dibyendu Tewary' },
  { name: 'Sandipan Pramanik', type: 'excel', opened: 'Jun 9', owner: 'Dibyendu Tewary' },
  { name: 'Analysis of Infant Death, Block (1)', type: 'excel', opened: 'May 14', owner: 'Dibyendu Tewary' },
  { name: 'Sayan Enterprise Ledger', type: 'word', opened: 'Apr 27', owner: 'Dibyendu Tewary' },
  { name: 'New NPPC reporting format_April 2024', type: 'excel', opened: 'Apr 25', owner: 'Dibyendu Tewary' },
];

const FileList = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Recent</h2>
        <div className="flex space-x-2">
          <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">All</button>
          <button className="text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-100">Word</button>
          <button className="text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-100">Excel</button>
          <button className="text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-100">PowerPoint</button>
          <button className="text-gray-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-gray-100">More</button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Opened</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {files.map((file, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {file.type === 'word' ? (
                      <FileText className="h-5 w-5 text-blue-500 mr-3" />
                    ) : (
                      <FileSpreadsheet className="h-5 w-5 text-green-500 mr-3" />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900">{file.name}</div>
                      <div className="text-sm text-gray-500">My Files</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{file.opened}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{file.owner}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileList;