import { ArrowIcon } from "assets/icons";

const Prev = ({ onClick }) => {
  return (
    <button className="prev" onClick={onClick}>
      <ArrowIcon />
    </button>
  );
};

export default Prev;
