import { Attribution } from "./components/Attribution";
import { Header } from "./components/Header";
import { ThisMonth } from "./components/ThisMonth";
import { Spending } from "./components/Spending";
import { Days } from "./components/Days";

import data from "./data.json";

function App() {
  return (
    <>
      <div className="max-w-[32.6125rem] mx-auto mt-16 font-dmSans">
        <Header />
        <div className="mt-4">
          <Spending />
          <Days data={data} />
          <ThisMonth />
        </div>
      </div>
      <Attribution />
    </>
  );
}

export default App;
