import { useState } from 'react';
import styles from './index.module.css';
const directions = [
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
];

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
  const board: number[][] = structuredClone(bombmap);
  for (let y = 0; y < 9; y++)
    for (let x = 0; x < 9; x++) {
      board[y][x] = 1;
    }
  // 再起関数(ゼロ連鎖)
  const x = Math.floor(Math.random() * 9);
  const y = Math.floor(Math.random() * 9);

  console.table(board);
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <div className={styles.topboard}>
          <div className={styles.countboard} />
          <div className={styles.emoboard} />
          <div className={styles.timeboard} />
        </div>

        <div className={styles.bombmap}>
          {board.map((row, y) =>
            row.map((x, i) => <div className={styles.cellstyle} key={`${i}-${y}`} />),
          )}
        </div>

        <div
            className={styles.samplestyle}
            style={{ backgroundPosition: `${-30 * samplePos}px 0px ` }}
          />
        <button onClick={() => setSamplepos((p) => (p + 1) % 14)}>sample</button>
      </div>
    </div>
  );
};

export default Home;
// 1を表示できるようにする
