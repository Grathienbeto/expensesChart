import PropType from "prop-types";

export const Day = ({ data, bg }) => {
  const { day, amount } = data;

  let height = amount / 5;

  return (
    <div className="flex flex-col text-center gap-2 ">
      <div className="text-center">{amount}</div>
      <div
        className={`w-[32px] rounded-md ${bg}`}
        style={{
          height: `${height}rem`,
        }}
      ></div>
      <div className="text-xs text-mediumBrown">{day}</div>
    </div>
  );
};

Day.propTypes = {
  data: PropType.object,
  bg: PropType.string,
};
