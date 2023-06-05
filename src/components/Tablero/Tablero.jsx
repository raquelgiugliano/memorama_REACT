import "./Tablero.css";
import { MemoBlock } from "../MemoBlock/MemoBlock";

export function Tablero({ memoBlocks, handleMemoClick, animating }) {
  return (
    <main className="board">
      {memoBlocks.map((item, index) => {
        return (
          <MemoBlock
            key={`${index}_${item.emoji}`}
            memoBlock={item}
            animating={animating}
            handleMemoClick={handleMemoClick}
          />
        );
      })}
    </main>
  );
}
