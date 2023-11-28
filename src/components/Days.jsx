import PropType from "prop-types";
import { Day } from "./Day";
import { Amount } from "./Amount";
// import { useState } from "react";

export const Days = ({ data }) => {
  let today = new Date().getDay();

  const handleMouseOver = () => {};

  return (
    <div className="flex flex-row justify-between align-bottom items-end p-5 px-5 bg-paleOrange h-[250px]">
      {data.map((elem, i) => {
        return (
          <div
            className="flex flex-col text-center gap-2 align-middle items-center"
            key={i}
          >
            <Amount amount={elem.amount} />

            <Day
              data={elem}
              bg={today === i ? "bg-cyan" : "bg-softRed"}
              handleMouseOver={handleMouseOver}
              key={i}
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
