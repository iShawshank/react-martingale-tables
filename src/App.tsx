import MartingaleTable from './components/MartingaleTable';
import './app.css';

function App() {
  return (
    <div className="app">
      <div className="app-row">
        <MartingaleTable
          stratName="9 Streets"
          multiplier={9}
          win={3}
          showProfit={true}
        />
        <MartingaleTable
          stratName="5 Double Streets"
          multiplier={5}
          win={1}
        />
      </div>
      <div className="app-row">
        <MartingaleTable stratName="Outside 1:1 bets" />
        <MartingaleTable
          stratName="Outside bets (Double + 1 unit on loss)"
          multiplier={1}
          win={1}
          additionalUnit={1}
        />
      </div>
    </div>
  );
}

export default App;
