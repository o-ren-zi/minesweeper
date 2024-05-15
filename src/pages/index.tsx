import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [samplePos, setSamplepos] = useState(0);
  const [bombmap, setBombmap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [userInputs, setUserinputs] = useState([]);
  const board: number[][] = [];
  for (let y = 0; y < 9; y++) for (let x = 0; x < 9; x++) board.map;
  // 再起関数(ゼロ連鎖)

  console.log(samplePos);
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <div className={styles.topboard}>
          <div className={styles.timeboard} />
          <div className={styles.emoboard} />
          <div className={styles.countboard} />
        </div>
        <div className={styles.board} />

        {/* <div
          className={styles.samplestyle}
          style={{ backgroundPosition: `${-30 * samplePos}px 0px ` }}
        /> */}
        {/* <button onClick={() => setSamplepos((p) => (p + 1) % 14)}>sample</button> */}
      </div>
    </div>
  );
};

export default Home;
