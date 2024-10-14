import React from "react";
import { Building2 } from "lucide-react";
import Invoice from "./INVOICE";
import DtdLogo from "../assets/Images/dtd-nobg.png";

const Invoice2: React.FC = () => {
  return (
    <div className="bg-surface shadow-lg rounded-lg w-full p-8 border ">
      <div className="border-b text-onSurface  pl-2-2 border-gray-300 pb-4 mb-4">
        <div className="flex flex-col lg:flex-row justify-between items-start">
          <div className="flex items-center">
            <Building2 className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-2xl font-bold text-primaryDark">
                Dibyendu Tewary
              </h1>
              <p>Rajasthan. PIN: 302001</p>
              <p>Tel: +91 0141-5117216</p>
              <p>GSTIN: 27DEPR5895N123</p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-semibold">GST Tax Invoice Format</h2>
            <table className="ml-auto">
              <tbody>
                <tr>
                  <td className="pr-4">Original</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td className="pr-4">Duplicate</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td className="pr-4">Triplicate</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td className="pr-4">Extra OC</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-4">Tax Invoice</h2>
      <p className="text-center text-sm mb-4">
        (See rule 7, for a tax invoice referred to in section 31)
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div>
          <p className="flex">
            <span className="font-semibold whitespace-nowrap">Invoice No:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full "
            />
          </p>
          <p className="flex">
            <span className="font-semibold whitespace-nowrap">
              Invoice date:
            </span>{" "}
            <input
              type="date"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
          <p className="flex">
            <span className="font-semibold whitespace-nowrap">
              Reverse Charge (Y/N):
            </span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
          <p className="flex">
            <span className="font-semibold whitespace-nowrap">State:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />{" "}
            <span className="font-semibold whitespace-nowrap">Code:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
        </div>
        <div>
          <p className="flex">
            <span className="font-semibold whitespace-nowrap">
              Transport Mode:
            </span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
          <p className="flex">
            <span className="font-semibold whitespace-nowrap">
              Vehicle number:
            </span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
          <p className="flex">
            <span className="font-semibold whitespace-nowrap">Date:</span>{" "}
            <input
              type="date"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
          <p className="flex">
            <span className="font-semibold whitespace-nowrap">Place:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="border p-2">
          <h3 className="font-bold mb-2 text-lg ">Receiver (Billed to):</h3>
          <p>
            <span className="font-semibold">Name:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
          <p>
            <span className="font-semibold">GSTIN:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
          <p>
            <span className="font-semibold">State:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300"
            />{" "}
            <span className="font-semibold">Code:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-16"
            />
          </p>
        </div>
        <div className="border p-2">
          <h3 className="font-bold mb-2 text-lg">Consignee (Shipped to):</h3>
          <p>
            <span className="font-semibold">Name:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
          <p>
            <span className="font-semibold">GSTIN:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
            />
          </p>
          <p>
            <span className="font-semibold">State:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300"
            />{" "}
            <span className="font-semibold">Code:</span>{" "}
            <input
              type="text"
              className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-16"
            />
          </p>
        </div>
      </div>

      <Invoice />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <p className="font-semibold mb-2">Total Invoice amount in words:</p>
          <input type="text" className="w-full border-b border-gray-300" />
        </div>
        <div>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-semibold">Total Amount before Tax</td>
                <td>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300"
                  />
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Add: CGST</td>
                <td>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300"
                  />
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Add: SGST</td>
                <td>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300"
                  />
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Add: IGST</td>
                <td>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300"
                  />
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Total Tax Amount</td>
                <td>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300"
                  />
                </td>
              </tr>
              <tr>
                <td className="font-semibold">Total Amount after Tax</td>
                <td>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300"
                  />
                </td>
              </tr>
              <tr>
                <td className="font-semibold">GST on Reverse Charge</td>
                <td>
                  <input
                    type="text"
                    className="w-full border-b border-gray-300"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Bank Details</h3>
        <p>
          <span className="font-semibold">Bank Name:</span>{" "}
          <input
            type="text"
            className="border-b text-blue-800 font-bold pl-2 border-gray-300"
          />
        </p>
        <p>
          <span className="font-semibold">Bank A/C:</span>{" "}
          <input
            type="text"
            className="border-b text-blue-800 font-bold pl-2 border-gray-300"
          />
        </p>
        <p>
          <span className="font-semibold">Bank IFSC:</span>{" "}
          <input
            type="text"
            className="border-b text-blue-800 font-bold pl-2 border-gray-300"
          />
        </p>
        <p>
          <span className="font-semibold">Terms & conditions:</span>{" "}
          <input
            type="text"
            className="border-b text-blue-800 font-bold pl-2 border-gray-300 w-full"
          />
        </p>
      </div>

      <div className="mt-4 text-center">
        <p>Certified that the particulars given above are true and correct</p>
        <p className="font-semibold mt-2">Digitaly Created On</p>
        <div className="flex justify-center items-center mt-2">
          <img src={DtdLogo} className="w-auto h-10 " />
        </div>

        <p className="mt-0">Dibyendu Tewary Digital</p>
      </div>

      <div className="mt-4 text-xs text-center">
        <p>
          Head Office : 00, Motimahal, Andheri Kurla Road, Mumbai, Maharashtra,
          400 001
        </p>
        <p>CIN NO : CIN ZZZZDEDDDDDDDDD</p>
      </div>
    </div>
  );
};

export default Invoice2;
