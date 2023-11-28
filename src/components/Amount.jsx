import PropType from "prop-types";

export const Amount = ({ amount }) => {
  return (
    <div
      className={`lg:block hidden text-center text-sm bg-darkBrown text-bold text-cream py-2 px-2 rounded-lg`}
    >
      ${amount}
    </div>
  );
};

Amount.propTypes = {
  amount: PropType.number,
  show: PropType.string,
};
