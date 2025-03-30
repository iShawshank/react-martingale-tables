import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { IRow } from '../interfaces/Row';
import { calculateTable } from '../utils/martingale';
import MartingaleRow from './MartingaleRow';
import './martingale.css';

interface IProps {
  tableName: string;
  multiplier?: number;
  win?: number;
  additionalUnit?: number;
  showProfit?: boolean;
  tenRows?: boolean;
}

const MartingaleTable = ({
  tableName,
  multiplier = 1,
  win = 1,
  additionalUnit = 0,
  tenRows = false,
  showProfit = true,
}: IProps) => {
  const [lossMulti, setLossMulti] = useState(2);
  const [unit, setUnit] = useState(1);
  const [rows, setRows] = useState<IRow[]>([]);
  const [selectedRowId, setSelectedRowId] = useState<number | null>(
    null
  );
  const [bankroll, setBankroll] = useState(1000);

  // Handle change to unit
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setUnit(Number(event.target.value));
  };

  const handleLossMultiplierChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setLossMulti(Number(event.target.value));
  };

  const handleBankrollChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setBankroll(Number(event.target.value));
  };

  const handleSelectedRow = (index: number) => {
    if (selectedRowId !== index) {
      setSelectedRowId(index);
    } else {
      setSelectedRowId(null);
    }
  };

  useEffect(() => {
    setRows(
      calculateTable(unit, multiplier, win, lossMulti, additionalUnit)
    );
  }, [unit, multiplier, win, lossMulti, tenRows, additionalUnit]);

  return (
    <div className="martingale">
      <p className="martingale-header">{tableName}</p>
      <div className="martingale-inputs">
        <div className="input">
          <label htmlFor="bankroll">Bankroll</label>
          <input
            type="text"
            name="bankroll"
            id="bankroll"
            onChange={debounce(handleBankrollChange, 500)}
            placeholder={bankroll.toString()}
          />
        </div>
        <div className="aligned-inputs">
          <div className="input">
            <label htmlFor="loss">Loss Multiplier</label>
            <input
              type="text"
              name="loss"
              id="loss"
              onChange={debounce(handleLossMultiplierChange, 500)}
              placeholder={lossMulti.toString()}
            />
          </div>
          <div className="input">
            <label htmlFor="unit">Unit size</label>
            <input
              type="text"
              name="unit"
              id="unit"
              onChange={debounce(handleChange, 500)}
              placeholder={unit.toString()}
            />
          </div>
        </div>
      </div>
      {rows.length && (
        <div className="table">
          <div className="table-header">
            <p className="table-header-cell">Progressions</p>
            <p className="table-header-cell">Total Bet</p>
            <p className="table-header-cell">Total Loss</p>
            <p className="table-header-cell">Profit</p>
            <p className="table-header-cell">Spins to recover</p>
          </div>
          <div className="table-body">
            {rows.map((row, index) => (
              <MartingaleRow
                row={row}
                key={index}
                index={index + 1}
                bankroll={bankroll}
                selectedId={selectedRowId}
                handleClick={handleSelectedRow}
                showProfit={showProfit}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MartingaleTable;
