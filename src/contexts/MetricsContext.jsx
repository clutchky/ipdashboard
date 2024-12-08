import { createContext, useContext, useReducer } from "react";

// stockData is the overall financial data for a year which will be saved
function twoPlaces(num) {
  return num.toFixed(2);
}

function formatMoney(num) {
  const moneyFormatObj = new Intl.NumberFormat("en-PH");
  return moneyFormatObj.format(num);
}

const initialState = {
  currentPrice: 0,
  salesRevenue: 0,
  costOfRevenue: 0,
  operatingExpenses: 0,
  interestExpenses: 0,
  incomeTaxes: 0,
  earningsPerShare: 0,
  otherIncome: 0,
  totalAssets: 0,
  totalLiabilities: 0,
  currentAssets: 0,
  currentLiabilities: 0,
  shortTermDebts: 0,
  longTermDebts: 0,
  stockData: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "handleInput":
      // console.log(state.stockData);
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "setData":
      console.log(state);
      return {
        ...state,
        stockData: {
          salesRevenue: state.salesRevenue,
          costOfRevenue: state.costOfRevenue,
          operatingExpenses: state.operatingExpenses,
          interestExpenses: state.interestExpenses,
          incomeTaxes: state.incomeTaxes,
          earningsPerShare: state.earningsPerShare,
          otherIncome: state.otherIncome,
          totalAssets: state.totalAssets,
          totalLiabilities: state.totalLiabilities,
          currentAssets: state.currentAssets,
          currentLiabilities: state.currentLiabilities,
          shortTermDebts: state.shortTermDebts,
          longTermDebts: state.longTermDebts,
        },
      };
  }
}

const MetricsContext = createContext();

function MetricsProvider({ children }) {
  const [
    {
      currentPrice,
      salesRevenue,
      costOfRevenue,
      operatingExpenses,
      interestExpenses,
      incomeTaxes,
      earningsPerShare,
      otherIncome,
      totalAssets,
      totalLiabilities,
      currentAssets,
      currentLiabilities,
      shortTermDebts,
      longTermDebts,
      stockData,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const grossProfit = salesRevenue - costOfRevenue;
  const operatingIncome = grossProfit - operatingExpenses;
  const ebit = operatingIncome + otherIncome;
  const netIncome = ebit - incomeTaxes;
  const currentRatio = currentAssets / currentLiabilities;
  const interestCoverageRatio = ebit / interestExpenses;
  const workingCapitalDebtRatio =
    (currentAssets - currentLiabilities) / (shortTermDebts + longTermDebts);

  function handleInput(e) {
    e.preventDefault();
    dispatch({
      type: "handleInput",
      field: e.target.name,
      payload: Number(e.target.value),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "setData",
    });
    // console.log(incomeStatementData);
    // setIncomeStatementData({
    //   salesRevenue,
    //   costOfRevenue,
    //   operatingExpenses,
    //   interestExpenses,
    //   incomeTaxes,
    //   earningsPerShare,
    //   otherIncome,
    //   currentPrice,
    // });
  }
  return (
    <MetricsContext.Provider
      value={{
        currentPrice,
        salesRevenue,
        costOfRevenue,
        operatingExpenses,
        interestExpenses,
        incomeTaxes,
        earningsPerShare,
        otherIncome,
        stockData,
        handleInput,
        handleSubmit,
        grossProfit,
        operatingIncome,
        ebit,
        netIncome,
        totalAssets,
        totalLiabilities,
        currentAssets,
        currentLiabilities,
        shortTermDebts,
        longTermDebts,
        currentRatio,
        interestCoverageRatio,
        workingCapitalDebtRatio,
        twoPlaces,
        formatMoney,
      }}
    >
      {children}
    </MetricsContext.Provider>
  );
}

function useMetrics() {
  const context = useContext(MetricsContext);

  if (context === undefined) {
    throw new Error("MetricsContext was used outside MetricsProvider");
  }

  return context;
}

export { MetricsProvider, useMetrics };
