const QuickActions = () => {
  return (
    <div className="relative">
      <div className="absolute -top-[140px] left-1/2 -translate-x-1/2 z-20">
        <div className="rounded-2xl bg-white px-10 py-5 shadow-xl">
          <div className="flex gap-14 text-sm font-medium text-gray-800">

            <div className="group flex flex-col items-center gap-2 cursor-pointer">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-200 group-hover:bg-orange-100">
                <img src="/uploads/HolidayPackages.png" className="h-5 w-5" />
              </div>
              <span className="group-hover:text-orange-600">
                Holiday Packages
              </span>
            </div>

            <div className="group flex flex-col items-center gap-2 cursor-pointer">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-200 group-hover:bg-orange-100">
                <img src="/uploads/Sightseeing.png" className="h-5 w-5" />
              </div>
              <span className="group-hover:text-orange-600">
                Sightseeing
              </span>
            </div>

            <div className="group flex flex-col items-center gap-2 cursor-pointer">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-200 group-hover:bg-orange-100">
                <img src="/uploads/AITripPlanner.png" className="h-5 w-5" />
              </div>
              <span className="group-hover:text-orange-600">
                AI Trip Planner
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
