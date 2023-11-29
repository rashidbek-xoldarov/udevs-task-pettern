import { useMemo } from "react";

const Pages = ({ curentPage, clickPage, totalPages }) => {
  const pages = useMemo(() => {
    let array = [];
    for (let x = 1; x <= totalPages; x++) {
      array.push({
        id: x,
        number: x,
      });
    }
    return array;
  }, [totalPages]);
  return (
    <div className="pages">
      {pages.map((page, index) => (
        <button className={`page ${curentPage === index + 1 ? "active-page" : ""}`} key={page.id} onClick={() => clickPage(page.id)}>
          {page.number}
        </button>
      ))}
    </div>
  );
};

export default Pages;
