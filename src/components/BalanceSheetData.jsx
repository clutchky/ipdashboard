import { useMetrics } from "../contexts/MetricsContext";

function BalanceSheetData({}) {
  const {
    twoPlaces,
    formatMoney,
    totalAssets,
    totalLiabilities,
    currentAssets,
    currentLiabilities,
    shortTermDebts,
    longTermDebts,
    netIncome,
    currentRatio,
    interestCoverageRatio,
    workingCapitalDebtRatio,
  } = useMetrics();

  const roEquity = (netIncome / (totalAssets - totalLiabilities)) * 100;

  return (
    <div>
      <h3>Balance Sheet</h3>
      <p>Total Assets: {formatMoney(totalAssets)}</p>
      <p>Total Liabilities: {formatMoney(totalLiabilities)}</p>
      <p>Net income: {formatMoney(netIncome)}</p>
      <p>Return on equity: {twoPlaces(roEquity)} %</p>
      <p>Current Assets: {formatMoney(currentAssets)}</p>
      <p>Current Liabilities: {formatMoney(currentLiabilities)}</p>
      <p>Short term debts: {formatMoney(shortTermDebts)}</p>
      <p>Long term debts: {formatMoney(longTermDebts)}</p>
      <p>Current Ratio: {twoPlaces(currentRatio)} </p>
      <p>Interest Coverage Ratio: {twoPlaces(interestCoverageRatio)}</p>
      <p>Working Capital to Debt Ratio: {twoPlaces(workingCapitalDebtRatio)}</p>
    </div>
  );
}

export default BalanceSheetData;
