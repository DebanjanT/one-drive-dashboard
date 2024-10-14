import React from "react";

const Invoice: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-secondary">
            <th className="border border-gray-300 p-1">S.No</th>
            <th className="border border-gray-300 p-1">Description</th>
            <th className="border border-gray-300 p-1">HSN</th>
            <th className="border border-gray-300 p-1">UOM</th>
            <th className="border border-gray-300 p-1">Qty</th>
            <th className="border border-gray-300 p-1">Unit</th>
            <th className="border border-gray-300 p-1">Rate</th>
            <th className="border border-gray-300 p-1">Amount</th>
            <th className="border border-gray-300 p-1">Taxable</th>
            <th className="border border-gray-300 p-1">CGST%</th>
            <th className="border border-gray-300 p-1">CGST</th>
            <th className="border border-gray-300 p-1">SGST%</th>
            <th className="border border-gray-300 p-1">SGST</th>
            <th className="border border-gray-300 p-1">IGST%</th>
            <th className="border border-gray-300 p-1">IGST</th>
            <th className="border border-gray-300 p-1">Total</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(9)].map((_, index) => (
            <tr key={index} className="">
              <td className="border border-gray-300 p-1">{index + 1}</td>
              {[...Array(15)].map((_, cellIndex) => (
                <td key={cellIndex} className="border border-gray-300 group">
                  <input
                    type="text"
                    className="w-full text-xs font-semibold border-2 border-transparent  group-hover:border-primary focus:bg-secondary focus:border-secondaryDark focus:text-onSecondary p-1"
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td
              colSpan={4}
              className="border border-gray-300 p-1 font-semibold"
            >
              Freight
            </td>
            {[...Array(12)].map((_, index) => (
              <td key={index} className="border border-gray-300 p-1">
                <input type="text" className="w-full text-xs" />
              </td>
            ))}
          </tr>

          <tr className="font-semibold">
            <td colSpan={4} className="border border-gray-300 p-1">
              Total
            </td>
            {[...Array(12)].map((_, index) => (
              <td key={index} className="border border-gray-300 p-1">
                <input type="text" className="w-full text-xs" />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Invoice;
