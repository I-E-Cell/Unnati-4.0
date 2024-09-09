import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const options = {
      damping: 0.07,
    };
    const scrollbar = Scrollbar.init(document.body, options);

    return () => {
      if (scrollbar) scrollbar.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
