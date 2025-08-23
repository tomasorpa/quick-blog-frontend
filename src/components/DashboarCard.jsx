
export const DashboardCard = ({ dashboardData, title,image }) => {
  return (
    <div className="bg-white flex items-center gap-1 p-1.5 sm:gap-2 sm:p-3   rounded shadow cursor-pointer hover:scale-102 transition-all">
      <img
        className="w-10 h-10 sm:w-10 sm:h-10"
        src={image}
        alt="Dashboard Icon"
      />
      <div className="">
        <p className="text-base sm:text-lg font-semibold text-gray-600">
          {dashboardData}
        </p>
        <p className="text-xs sm:text-base text-gray-400 font-light">{title}</p>
      </div>
    </div>
  );
};