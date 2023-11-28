import PropType from "prop-types";
import { Day } from "./Day";
import { Amount } from "./Amount";
import { useState } from "react";

export const Days = ({ data }) => {
  let today = new Date().getDay();

  const [show, setShow] = useState("");

  const handleMouseOver = () => {
    setShow("lg:block");
  };

  const handleMouseLeave = () => {
    setShow("");
  };

  return (
    <div className="flex flex-row justify-between align-bottom items-end p-5 px-5 bg-paleOrange h-[250px]">
      {data.map((elem, i) => {
        return (
          <div
            className="flex flex-col text-center gap-2 align-middle items-center"
            key={i}
          >
            <Amount amount={elem.amount} show={show} />

            <Day
              data={elem}
              bg={today === i ? "bg-cyan" : "bg-softRed"}
              handleMouseOver={handleMouseOver}
              handleMouseLeave={handleMouseLeave}
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
