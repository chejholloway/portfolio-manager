import { useEffect } from 'react';

const useLoadHandler = (selector, callback) => {
  useEffect(() => {
    const handleLoad = () => {
      const targetElement = document.querySelector(selector);

      if (targetElement) {
        callback(targetElement);
      } else {
        console.info(`Element with selector '${selector}' not found`);
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [selector, callback]);
};

export default useLoadHandler;
