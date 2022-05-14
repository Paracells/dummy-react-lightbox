import { useState } from 'react';

import styles from './App.module.scss';
import Lightbox from './components/Lightbox';
const images = [
  'https://images.unsplash.com/photo-1518802508264-76256089cddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1508322345744-2745200b300f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGF1dHVtbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
  'https://images.unsplash.com/photo-1572978306654-a3835dd40cd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1588869436129-c4af64deebb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80',
  'https://images.unsplash.com/photo-1601230469159-77a3bfe240c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
];

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.App}>
      <button className={styles.btn} onClick={() => setIsShow(true)}>
        show lightbox
      </button>
      {isShow && <Lightbox images={images} onClose={() => setIsShow(false)} />}
    </div>
  );
}

export default App;
