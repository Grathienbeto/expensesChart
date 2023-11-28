import PropType from "prop-types";
import { Day } from "./Day";

export const Days = ({ data }) => {
  let today = new Date().getDay();

  return (
    <>
      <div className="flex flex-row justify-between align-bottom items-end p-5 px-5 bg-paleOrange h-[225px]">
        {data.map((elem, i) => {
          return (
            <Day
              data={elem}
              bg={today === i ? "bg-cyan" : "bg-softRed"}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

Days.propTypes = {
  data: PropType.array,
};
