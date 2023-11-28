import PropType from "prop-types";

export const Amount = ({ amount, show }) => {
  return (
    <div
      className={`text-center text-sm bg-darkBrown text-bold text-cream py-2 px-2 rounded-lg hidden ${show}`}
    >
      ${amount}
    </div>
  );
};

Amount.propTypes = {
  amount: PropType.number,
  show: PropType.string,
};
