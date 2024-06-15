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

  const [userInputs, setUserInputs] = useState([
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

  const [number, setNumber] = useState([
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

  const clickHandler = (x: number, y: number) => {
    const newBombmap = structuredClone(bombMap);
    //bombのランダム生成
    const getRandom = () => {
      const board: number[][] = structuredClone(userInputs);

      while (board.flat().filter((cell) => cell === 11).length < 10) {
        const randomX = Math.floor(Math.random() * 9);
        const randomY = Math.floor(Math.random() * 9);

        if (randomX !== x && randomY !== y) {
          board[randomY][randomX] = 11;
          console.log('set', randomX, randomY);
        }
        console.log(randomX, randomY);
      }
      return board;
    };

    const countBomb = () => {
      let i = 0;
      for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
          if (bombMap[y][x] === 1) {
            i += 1;
          }
        }
      }
      return i;
    };

    setUserInputs(getRandom);

    console.log(getRandom);
    countBomb();
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
          {userInputs.map(
            (row, y) =>
              row.map((x, i) => (
                // x === 0 ? (
                //   <div
                //     className={styles.block}
                //     key={`${i}-${y}`}
                //     onClick={() => clickHandler(y, i)}
                //   />
                // ) : (
                <div
                  onClick={() => {
                    console.log('Div clicked', y, i);
                    clickHandler(y, i);
                  }}
                  style={{ backgroundPosition: `${-30 * (x - 1)}px , 0px ` }}
                  className={styles.cellstyle}
                  key={`${i}-${y}`}
                />
              )),
            //),
          )}
        </div>
        {/* <div className={styles.samplestyle} />
        <button onClick={() => setSamplepos(1)} /> */}
      </div>
    </div>
  );
};

export default Home;
// 1を表示できるようにする
{
  /* <button onClick={() => setSamplepos((p) => (p + 1) % 14)}>sample</button>; */
}
