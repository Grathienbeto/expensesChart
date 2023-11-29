import PropType from "prop-types";

export const Day = ({ data, bg, handleMouseOver, handleMouseLeave }) => {
  const { day, amount } = data;

  let height = amount / 5;

  return (
    <>
      <div
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className={`w-[2.5rem] lg:w-[3rem] rounded-md ${bg} hover:opacity-75 hover:cursor-pointer`}
        style={{
          height: `${height}rem`,
        }}
      ></div>
      <div className="text-xs text-mediumBrown">{day}</div>
    </>
  );
};

Day.propTypes = {
  data: PropType.object,
  bg: PropType.string,
  handleMouseOver: PropType.func,
  handleMouseLeave: PropType.func,
};
