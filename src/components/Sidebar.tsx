import { Home, Folder, Image, Users, Trash } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-gradient-to-br from-background via-transparent to-transparent p-4 overflow-y-auto h-[calc(100vh-55px)]  hidden lg:block">
      <div className="mb-6">
        <button className="w-full bg-gradient-to-b from-primaryLight to-primaryDark text-onPrimary rounded-md py-2 px-4 text-sm font-medium active:scale-[92%] transiton-[scale] duration-300">
          Create / Upload
        </button>
      </div>
      <nav>
        <ul className="space-y-1 text-sm">
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700  rounded-md p-2 relative bg-gradient-to-r from-secondary to-transparent"
            >
              <div className="w-1 h-4 absolute left-0 top-[10]  bg-primaryLight rounded-r-sm" />
              <Home className="h-5 w-5" />
              <span className="font-bold text-primaryLight">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:bg-surface rounded-md p-2"
            >
              <Folder className="h-5 w-5" />
              <span>My files</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2"
            >
              <Image className="h-5 w-5" />
              <span>Photos</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2"
            >
              <Users className="h-5 w-5" />
              <span>Shared</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2"
            >
              <Trash className="h-5 w-5" />
              <span>Recycle bin</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Browse files by
        </h3>
        <ul className="mt-2 space-y-2 text-sm">
          <li>
            <a
              href="#"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-md p-2"
            >
              <Users className="h-5 w-5" />
              <span>People</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <div className="bg-surface rounded-md p-4">
          <p className="text-xs text-gray-600 mb-2">
            Get storage for all your files and photos.
          </p>
          <button className="w-full bg-white text-blue-600 border border-blue-600 rounded-md py-1 px-3 text-sm font-medium">
            Buy storage
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
