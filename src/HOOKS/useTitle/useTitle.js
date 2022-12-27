import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Task Controller - ${title}`;
  }, [title]);
};

export default useTitle;
