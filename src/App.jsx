import { useEffect, useState } from "react";
// import StockInfo from "./components/StockInfo";
import IncomeStatement from "./components/IncomeStatement";
import BalanceSheet from "./components/BalanceSheet";
import CurrentPrice from "./components/CurrentPrice";
import { MetricsProvider } from "./contexts/MetricsContext";

function App() {
  const [stocks, setStocks] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchStocks() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8000/stocks");
        const data = await res.json();

        setStocks(data);
      } catch {
        console.error("There was an error loading the data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchStocks();
  }, []);

  // console.log(stocks);
  if (isLoading) return "Loading...";

  // function handlePrice(e) {
  //   setCurrentPrice(Number(e.target.value));
  // }

  return (
    <div>
      <MetricsProvider>
        <h1>Dashboard</h1>
        <CurrentPrice />
        {/* <StockInfo stocks={stocks} /> */}
        {/* <h3>Stock data</h3> */}
        <IncomeStatement />
        <hr />
        <BalanceSheet />
      </MetricsProvider>
    </div>
  );
}

export default App;
