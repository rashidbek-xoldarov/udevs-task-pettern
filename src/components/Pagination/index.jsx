import Next from "./components/Next";
import Pages from "./components/Pages";
import PerPage from "./components/PerPage";
import Prev from "./components/Prev";

import "./index.scss";

const Pagination = ({ children }) => {
  return <div className="pagination">{children}</div>;
};

Pagination.Prev = Prev;
Pagination.Next = Next;
Pagination.Pages = Pages;
Pagination.PerPage = PerPage;
export default Pagination;
