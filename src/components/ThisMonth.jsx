export const ThisMonth = () => {
  return (
    <>
      <div className="bg-paleOrange">
        <hr className="bg-cream text-cream max-w-[80%] mx-auto"></hr>
      </div>
      <div className="flex p-8 justify-between bg-paleOrange rounded-b-lg">
        <div className="pb-1">
          <p className="text-mediumBrown">Total this month</p>
          <p className="text-4xl font-bold text-darkBrown">$478.33</p>
        </div>

        <div className="flex flex-col justify-end items-end ">
          <p className="text-darkBrown font-bold">+2.4%</p>
          <p className="text-mediumBrown">from last month</p>
        </div>
      </div>
    </>
  );
};
