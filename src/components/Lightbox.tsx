import React, { KeyboardEvent, MouseEvent, useEffect, useState } from 'react';

import styles from './Lightbox.module.scss';

interface LightboxProps {
  images: string[];
  onClose: () => void;
}

function Lightbox({ images, onClose }: LightboxProps) {
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    const overflow = document.body.style.overflow;
    const marginRight = document.body.style.marginRight;

    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = '0';

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.marginRight = marginRight;
    };
  }, []);

  useEffect(() => {
    setImage(images[index]);
  }, [index]);

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (index + 1 >= images.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const previousImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (index - 1 < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const closeLightbox = (e: MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleKeyboard = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };
  return (
    <div
      className={styles.lightbox}
      tabIndex={-1}
      role="button"
      onClick={closeLightbox}
      onKeyDown={handleKeyboard}
    >
      <div>
        <div className={styles.control}>
          <button className={`${styles.button} ${styles.btncontrol}`} onClick={onClose}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="11 11 30 30">
                <path d="M27.92 25l8.84-8.84 1.82-1.82c.27-.27.27-.71 0-.97l-1.95-1.95a.682.682 0 0 0-.97 0L25 22.08 14.34 11.42a.682.682 0 0 0-.97 0l-1.95 1.95c-.27.27-.27.71 0 .97L22.08 25 11.42 35.66c-.27.27-.27.71 0 .97l1.95 1.95c.27.27.71.27.97 0L25 27.92l8.84 8.84 1.82 1.82c.27.27.71.27.97 0l1.95-1.95c.27-.27.27-.71 0-.97L27.92 25z"></path>
              </svg>
            </div>
          </button>
        </div>
        <div className={styles.container}>
          <div className={styles.image_wrapper}>
            <img className={styles.image} src={image} alt="" />
          </div>
        </div>
        <button className={`${styles.button} ${styles.left}`} onClick={previousImage}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="11 11 30 30">
              <path d="M25.47 38.64l.44-.44c.29-.29.29-.76 0-1.05L14.82 26.06h23.35c.41 0 .75-.33.75-.75v-.62c0-.41-.33-.75-.75-.75H14.82l11.09-11.09c.29-.29.29-.76 0-1.05l-.44-.44a.742.742 0 0 0-1.05 0L11.31 24.47c-.29.29-.29.76 0 1.05l13.11 13.11c.29.3.76.3 1.05.01z"></path>
            </svg>
          </div>
        </button>
        <button className={styles.button} onClick={nextImage}>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="11 11 30 30">
              <path d="M24.53 11.36l-.44.44c-.29.29-.29.76 0 1.05l11.09 11.09H11.83c-.41 0-.75.33-.75.75v.62c0 .41.33.75.75.75h23.35L24.09 37.14c-.29.29-.29.76 0 1.05l.44.44c.29.29.76.29 1.05 0l13.11-13.11c.29-.29.29-.76 0-1.05l-13.1-13.11a.754.754 0 0 0-1.06 0z"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Lightbox;
