import './martingale.css';
import { TableRow } from './types';

interface IProps {
  row: TableRow;
  index: number;
  bankroll: number;
  handleClick: (index: number) => void;
  selectedId: number | null;
  showProfit: boolean;
}

const MartingaleRow = ({
  row,
  index,
  bankroll,
  selectedId,
  handleClick,
  showProfit,
}: IProps) => {
  const isTooMuch = row.loss > bankroll ? true : false;

  const selected = selectedId === index;

  return (
    <div
      className={`martingale-row ${
        isTooMuch ? 'bg-red-900' : ''
      } ${selected ? 'focused-row' : ''}`}
      onClick={() => handleClick(index)}
    >
      <p className="progression">{index}</p>
      <p className="total-bet">{row.currentBet}</p>
      <p className={isTooMuch ? 'text-white' : 'text-red-500'}>
        {row.loss}
      </p>
      <p className={isTooMuch ? 'text-white' : 'text-green'}>
        {showProfit ? row.profit : '-'}
      </p>
      <p className="recover">{row.recover}</p>
    </div>
  );
};

export default MartingaleRow;
