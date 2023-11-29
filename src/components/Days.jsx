import PropType from "prop-types";
import { Day } from "./Day";
import { Amount } from "./Amount";

export const Days = ({ data }) => {
  let today = new Date().getDay();

  const handleMouseOver = (e) => {
    e.target.previousElementSibling.classList.add("lg:block");
  };

  const handleMouseLeave = (e) => {
    e.target.previousElementSibling.classList.remove("lg:block");
  };

  return (
    <div className="flex flex-row justify-between align-bottom items-end pb-3 px-8 bg-paleOrange h-[250px]">
      {data.map((elem, i) => {
        return (
          <div
            className="flex flex-col text-center gap-3 align-middle items-center w-[10%]"
            key={i}
          >
            <Amount amount={elem.amount} />

            <Day
              data={elem}
              bg={today === i ? "bg-cyan" : "bg-softRed"}
              handleMouseOver={handleMouseOver}
              handleMouseLeave={handleMouseLeave}
            />
          </div>
        );
      })}
    </div>
  );
};

Days.propTypes = {
  data: PropType.array,
};
