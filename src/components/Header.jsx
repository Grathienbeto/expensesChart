export const Header = () => {
  return (
    <header className="bg-softRed flex justify-between p-8 rounded-lg items-center">
      <div className="text-cream">
        <div>
          <p className="text-sm">My balance</p>
        </div>
        <div>
          <p className="text-3xl font-bold">$921.48</p>
        </div>
      </div>
      <div>
        <div className="relative pb-4">
          <p className="text-softRed z-0">.</p>
          <div className="absolute right-6 top-0 h-[40px] w-[40px] border-2 border-cream rounded-full z-10"></div>
          <div className="absolute right-1 top-0 h-[40px] w-[40px] bg-darkBrown rounded-full z-0"></div>
        </div>
      </div>
    </header>
  );
};
