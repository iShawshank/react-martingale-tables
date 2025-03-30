export type MartingaleTableProps = {
  stratName: string;
  multiplier?: number;
  win?: number;
  additionalUnit?: number;
  showProfit?: boolean;
};

export type TableRow = {
  profit: number;
  loss: number;
  currentBet: number;
  recover: number;
}