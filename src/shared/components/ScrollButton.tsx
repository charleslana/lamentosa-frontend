import React, { useEffect, useState } from 'react';

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      toggleVisible();
    };
  }, [setVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className={`to-top ${visible ? 'd-flex' : 'd-none'}`}
      onClick={scrollToTop}
    >
      <i></i>
    </button>
  );
}

export default ScrollButton;
