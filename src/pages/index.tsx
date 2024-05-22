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
  const [bombMap, setBombmap] = useState([
    [, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const [userInputs, setUserinputs] = useState([
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

  const getRandom = (x: number, y: number) => {
    for (let n = 0; n < 10; n++) {
      const randomX = Math.floor(Math.random() * 9);
      const randomY = Math.floor(Math.random() * 9);
      console.log(randomX, randomY);
    }
  };

  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBombmap = structuredClone(bombMap);
    getRandom(x, y);
    const board: number[][] = structuredClone(userInputs);

    board[y][x] = 1;
    console.log(board);

    setUserinputs(board);
  };

  // console.table(board);
  return (
    <div className={styles.container}>
      <div className={styles.base}>
        <div className={styles.topboard}>
          <div className={styles.countboard} />
          <div className={styles.emoboard} />
          <div className={styles.timeboard} />
        </div>
        <div className={styles.bombmap}>
          {userInputs.map((row, y) =>
            row.map((x, i) => (
              <div
                style={{ backgroundPosition: `${-30 * (x - 1)}px , 0px ` }}
                className={styles.cellstyle}
                key={`${i}-${y}`}
                onClick={() => clickHandler(i, y)}
              />
            )),
          )}
        </div>
        {/* <div
          className={styles.samplestyle}

        /> */}
        {/* <button onClick={() => setSamplepos(1)} /> */}
      </div>
    </div>
  );
};

export default Home;
// 1を表示できるようにする
{
  /* <button onClick={() => setSamplepos((p) => (p + 1) % 14)}>sample</button>; */
}
