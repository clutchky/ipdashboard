export default function StockList({ stocks }) {
  return (
    <div>
      <h2>Stock List</h2>
      <ul>
        {stocks.map((stock, index) => (
          <li key={index}>
            <p>
              {stock.tickerSymbol} - {stock.companyName}
            </p>

            <ul>
              <span>Year:</span>

              {stock.financialData.map((year, index) => (
                <li key={index}>
                  <div>
                    <br />
                    <span>
                      <strong>{year.year}</strong>
                      <hr />
                    </span>
                    <h3>Income Statement</h3>
                    <br />
                    <p>
                      <strong>Sales Revenue:</strong> {year.salesRevenue}
                    </p>
                    <p>
                      <strong>Cost of Revenue/Cost of Sales:</strong>{" "}
                      {year.costOfRevenue}
                    </p>
                    <p>
                      <strong>Gross Profit:</strong> {year.grossProfit}
                    </p>
                    <p>
                      <strong>Operating Expenses:</strong>
                      {year.operatingExpenses}
                    </p>
                    <p>
                      <strong>Operating Income:</strong>
                      {year.operatingIncome}
                    </p>
                    <p>
                      <strong>Interest Expenses:</strong>
                      {year.interestExpenses}
                    </p>
                    <p>
                      <strong>Income Taxes(Tax Expenses):</strong>
                      {year.incomeTaxes}
                    </p>
                    <p>
                      <strong>Net Income:</strong>
                      {year.netIncome}
                    </p>
                    <p>
                      <strong>Earnings per share (EPS):</strong>
                      {year.earningsPerShare}
                    </p>
                    <p>
                      <strong>P/E ratio:</strong>
                      {year.pERatio}
                    </p>
                    <p>
                      <strong>Earnings yield:</strong>
                      {year.earningsYield} %
                    </p>
                    <br />
                    <h4>Profit Margin Ratios</h4>
                    <br />
                    <p>
                      <strong>Gross Profit Margin Ratio:</strong>
                      {year.gpmRatio} %
                    </p>
                    <p>
                      <strong>Operating Profit Margin Ratio:</strong>
                      {year.opmRatio} %
                    </p>
                    <p>
                      <strong>Net Profit Margin Ratio:</strong>
                      {year.npmRatio} %
                    </p>
                    <p>
                      <strong>EBIT (earnings/income before income tax):</strong>
                      {year.ebit}
                    </p>
                    <p>
                      <strong>Other income:</strong>
                      {year.otherIncome}
                    </p>
                    <br />
                    <h3>Balance Sheet</h3>
                    <br />
                    <p>
                      <strong>Total Assets:</strong>
                      {year.totalAssets}
                    </p>
                    <p>
                      <strong>Total Liabilities:</strong>
                      {year.totalLiabilities}
                    </p>
                    <p>
                      <strong>Return on Equity (RoE):</strong>
                      {year.rOEquity}
                    </p>
                    <h5>Debt Ratios</h5>
                    <p>
                      <strong>Current Assets:</strong>
                      {year.currentAssets}
                    </p>
                    <p>
                      <strong>Current Liabilities:</strong>
                      {year.currentLiabilities}
                    </p>
                    <p>
                      <strong>Short Term Debts:</strong>
                      {year.shortTermDebts}
                    </p>
                    <p>
                      <strong>Long Term Debts:</strong>
                      {year.longTermDebts}
                    </p>
                    <p>
                      <strong>Current Ratio:</strong>
                      {year.currentRatio}
                    </p>
                    <p>
                      <strong>Interest Coverage Ratio:</strong>
                      {year.interestCoverageRatio}
                    </p>
                    <p>
                      <strong>Working Capital to Debt Ratio:</strong>
                      {year.workingCapitalDebtRatio}
                    </p>
                    <br />
                    <h3>Cashflow Statement</h3>
                    <br />
                    <p>
                      <strong>Cashflow from Operating Activities:</strong>{" "}
                      {year.operatingCashflow}
                    </p>
                    <p>
                      <strong>Cashflow from Investing Activities:</strong>{" "}
                      {year.investingCashflow}
                    </p>
                    <p>
                      <strong>Cashflow from Financing Activities:</strong>{" "}
                      {year.financingCashflow}
                    </p>
                    <p>
                      <strong>Capital Expenditures:</strong> {year.capEx}
                    </p>
                    <p>
                      <strong>Free Cashflow:</strong> {year.freeCashflow}
                    </p>
                    <p>
                      <strong>3x Cashflow &gt; Long Term Debt:</strong>{" "}
                      {`${year.cashflowGtLongTermDebt}`}
                    </p>
                    <p>
                      <strong>Dividend Yield:</strong> {year.dividendYield} %
                    </p>
                    <p>
                      <strong>Total Dividends in a year:</strong>{" "}
                      {year.totalDivs}
                    </p>
                    <p>
                      <strong>Dividend Payout Ratio:</strong>{" "}
                      {year.divPayoutRatio} %
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
