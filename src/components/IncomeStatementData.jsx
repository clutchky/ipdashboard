import { useMetrics } from "../contexts/MetricsContext";

function IncomeStatementData() {
  const {
    currentPrice,
    twoPlaces,
    formatMoney,
    salesRevenue,
    costOfRevenue,
    operatingExpenses,
    interestExpenses,
    incomeTaxes,
    earningsPerShare,
    otherIncome,
    grossProfit,
    operatingIncome,
    ebit,
    netIncome,
  } = useMetrics();

  // const grossProfit = salesRevenue - costOfRevenue;
  // const operatingIncome = grossProfit - operatingExpenses;
  // const ebit = operatingIncome + otherIncome;
  // const netIncome = ebit - incomeTaxes;

  return (
    <div>
      <h3>Income Statement</h3>
      <p>Sales Revenue: {formatMoney(salesRevenue)}</p>
      <p>Cost of Revenue/Cost of Sales: {formatMoney(costOfRevenue)}</p>
      <p>Gross Profit: {formatMoney(grossProfit)} </p>
      <p>Operating Expenses: {formatMoney(operatingExpenses)}</p>
      <p>Operating Income: {formatMoney(operatingIncome)}</p>
      <p>Interest Expense (Finance Costs): {formatMoney(interestExpenses)}</p>
      <p>Income Taxes (Tax Expense): {formatMoney(incomeTaxes)}</p>
      <p>Net Income: {formatMoney(netIncome)}</p>
      <p>Earnings per Share(EPS): {earningsPerShare}</p>
      <p>P/E Ratio: {twoPlaces(currentPrice / earningsPerShare)} </p>
      <p>
        Earnings Yield: {twoPlaces((earningsPerShare / currentPrice) * 100)} %
      </p>
      <p>
        Gross Profit Margin Ratio:{" "}
        {twoPlaces((grossProfit / salesRevenue) * 100)} %
      </p>
      <p>
        Operating Profit Margin Ratio:{" "}
        {twoPlaces((operatingIncome / salesRevenue) * 100)} %
      </p>
      <p>
        Net Profit Margin Ratio:{twoPlaces((netIncome / salesRevenue) * 100)} %
      </p>
      <p>EBIT: {formatMoney(ebit)}</p>
      <p>Other Income (expenses): {formatMoney(otherIncome)}</p>
    </div>
  );
}

export default IncomeStatementData;
