import MartingaleTable from './components/MartingaleTable';
import './app.css';

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          width: '100%',
        }}
      >
        <MartingaleTable
          tableName="9 Streets"
          multiplier={9}
          win={3}
          showProfit={true}
        />
        <MartingaleTable
          tableName="5 Double Streets"
          multiplier={5}
          win={1}
        />
      </div>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <MartingaleTable
          tableName="Outside 1:1 bets"
          multiplier={1}
          win={1}
        />
        <MartingaleTable
          tableName="Outside bets (Double + 1 unit on loss)"
          multiplier={1}
          win={1}
        />
      </div>
    </>
  );
}

export default App;
