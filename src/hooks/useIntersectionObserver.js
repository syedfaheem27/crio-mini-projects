import { useEffect, useState } from "react";
export const useIntersectionObserver = (ref, ...dependencies) => {
  const [page, setPage] = useState(1);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const obsCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      setPage((page) => page + 1);
      observer.unobserve(entry.target);
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(obsCallback, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref.current, ...dependencies]);

  return page;
};
