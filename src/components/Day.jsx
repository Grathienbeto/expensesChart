import PropType from "prop-types";

export const Day = ({ data, bg, handleMouseOver }) => {
  const { day, amount } = data;

  let height = amount / 5;

  return (
    <>
      <div
        onMouseOver={handleMouseOver}
        className={`w-[2rem] lg:w-[3rem] rounded-md ${bg} hover:opacity-75 hover:cursor-pointer`}
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
};
