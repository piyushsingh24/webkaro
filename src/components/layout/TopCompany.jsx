import { Link } from "react-router-dom";

const TopCompany = () => {
  return (
    <div className="w-full h-16 flex  items-center px-6 border-b border-gray-200 dark:border-gray-700">
      <Link
        to="/"
        className="flex items-center gap-2 "
      >
        <img src="/logo.png" alt="Webkaro Logo" className="h-16 w-auto" />
        <span className="text-3xl font-bold ">Web
          <span className="text-4xl font-bold text-blue-600">karo</span>
        </span>
      </Link>
    </div>
  );
};

export default TopCompany;
