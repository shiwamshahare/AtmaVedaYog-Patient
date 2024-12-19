import { useState, useEffect, useRef } from "react";

const useLazyLoadCards = (count) => {
  const [visibleItems, setVisibleItems] = useState(Array(count).fill(false));
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      itemRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return { visibleItems, itemRefs };
};

export default useLazyLoadCards;

//how to use this -->

//import useLazyLoadCards from "hooks/useLazyLoadCards";

//declare after the data is declared

//const { visibleItems, itemRefs } = useLazyLoadCards(data.length);

// and use at the parent of map methods key holder
//        ref={(el) => (itemRefs.current[idx] = el)}
//        data-index={idx}
