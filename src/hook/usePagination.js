import { useState } from "react";

const usePagination = ({ totalInfo }) => {
  const [currentPage, setCurrentpage] = useState(1);
  const totalPages = Math.ceil(totalInfo / 10);

  const increasePage = () => {
    return setCurrentpage(Math.min(totalPages, currentPage + 1));
  };

  const decreasePage = () => {
    return setCurrentpage(Math.max(1, currentPage - 1));
  };

  const clickPage = (page) => {
    setCurrentpage(page);
  };

  return { totalPages, currentPage, increasePage, decreasePage, clickPage };
};

export default usePagination;
