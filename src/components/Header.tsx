import {
  Search,
  Diamond,
  Link,
  Settings,
  HelpCircle,
  User,
} from "lucide-react";
import DtdLogo from "../assets/Images/dtd-nobg.png";

const Header = () => {
  return (
    <header className="bg-surface border-b border-inputBorder/70 py-2 px-4 h-[55px]">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center space-x-4  flex-grow  w-full">
          <img src={DtdLogo} className="w-auto h-10" />
          <div className="relative w-full hidden md:block">
            <input
              type="text"
              placeholder="Search everything"
              className="pl-10 pr-4 py-2 disabled:bg-inputDisabled disabled:cursor-not-allowed w-56 focus:w-full transition-[width] duration-300 border border-gray-400  focus:border-primary rounded-md text-sm focus:outline-none focus:shadow-inputOuterShadow"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4 ml-3">
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
