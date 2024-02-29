const DashBoardLoading = () => {
  return (
    <div className="bg-gray-100 rounded-main p-3">
      <div className="header grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        <div className="shadow-md p-5 rounded-main bg-white h-[150px]">
          <div className="rounded-lg w-full bg-primary/10 animate-pulse p-3"></div>
          <div className="rounded-lg w-full bg-primary/10 animate-pulse p-5 mt-3"></div>
        </div>

        <div className="shadow-md p-5 rounded-main bg-white h-[150px]">
          <div className="rounded-lg w-full bg-primary/10 animate-pulse p-3"></div>
          <div className="rounded-lg w-full bg-primary/10 animate-pulse p-5 mt-3"></div>
        </div>

        <div className="shadow-md p-5 rounded-main bg-white h-[150px]">
          <div className="rounded-lg w-full bg-primary/10 animate-pulse p-3"></div>
          <div className="rounded-lg w-full bg-primary/10 animate-pulse p-5 mt-3"></div>
        </div>
      </div>

      {/* Data */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="shadow-md p-5 rounded-main h-[400px] w-full bg-white">
          <div className="rounded-lg w-full bg-primary/10 animate-pulse p-3"></div>
          <div className="rounded-main w-full bg-primary/10 animate-pulse p-5 mt-3"></div>
        </div>
        <div className="shadow-md p-5 rounded-main h-[400px] w-full bg-white flex flex-col justify-between">
          <div>
            <div className="rounded-lg w-full bg-primary/10 animate-pulse p-3"></div>
            <div className="p-2 border mt-3 rounded-main bg-primary/10 animate-pulse w-full h-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLoading;
