import { Link } from "react-router-dom";

const TopCompany = () => {
  return (
    <div className="w-full h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700">
      <Link
        to="/"
        className="text-xl font-bold text-gray-900 dark:text-white"
      >
        <span className="text-primary-600 text-2xl">
          <span className="text-gray-900 dark:text-white text-2xl">Web</span>
          karo</span>{" "}
      </Link>
    </div>
  );
};

export default TopCompany;
