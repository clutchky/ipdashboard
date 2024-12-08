import { useReducer, useState } from "react";
import IncomeStatementData from "./IncomeStatementData";
import { useMetrics } from "../contexts/MetricsContext";

// const initialState = {
//   salesRevenue: 0,
//   costOfRevenue: 0,
//   operatingExpenses: 0,
//   interestExpenses: 0,
//   incomeTaxes: 0,
//   earningsPerShare: 0,
//   otherIncome: 0,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "handleInput":
//       return {
//         ...state,
//         [action.field]: action.payload,
//       };
//   }
// }

function IncomeStatementForm() {
  const {
    handleInput,
    handleSubmit,
    salesRevenue,
    costOfRevenue,
    operatingExpenses,
    interestExpenses,
    incomeTaxes,
    earningsPerShare,
    otherIncome,
  } = useMetrics();

  // const [
  //   {
  //     salesRevenue,
  //     costOfRevenue,
  //     operatingExpenses,
  //     interestExpenses,
  //     incomeTaxes,
  //     earningsPerShare,
  //     otherIncome,
  //   },
  //   dispatch,
  // ] = useReducer(reducer, initialState);
  // const [incomeStatementData, setIncomeStatementData] = useState({});

  // function handleInput(e) {
  //   e.preventDefault();
  //   dispatch({
  //     type: "handleInput",
  //     field: e.target.name,
  //     payload: Number(e.target.value),
  //   });
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setIncomeStatementData({
  //     salesRevenue,
  //     costOfRevenue,
  //     operatingExpenses,
  //     interestExpenses,
  //     incomeTaxes,
  //     earningsPerShare,
  //     otherIncome,
  //     currentPrice,
  //   });
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sales Revenue </label>
          <input
            type="text"
            value={salesRevenue}
            name="salesRevenue"
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Cost of Revenue/Cost of Sales </label>
          <input
            type="text"
            value={costOfRevenue}
            name="costOfRevenue"
            onChange={handleInput}
          />
        </div>

        <hr />

        <div>
          <label>Operating Expenses </label>
          <input
            type="text"
            value={operatingExpenses}
            name="operatingExpenses"
            onChange={handleInput}
          />
        </div>

        <hr />

        <div>
          <label>Interest Expense (Finance Costs) </label>
          <input
            value={interestExpenses}
            name="interestExpenses"
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Income Taxes (Tax Expense) </label>
          <input
            value={incomeTaxes}
            name="incomeTaxes"
            onChange={handleInput}
          />
        </div>

        <hr />

        <div>
          <label>Earnings per Share (EPS) </label>
          <input
            value={earningsPerShare}
            name="earningsPerShare"
            onChange={handleInput}
          />
        </div>

        <div>
          <label>Other Income (expenses) </label>
          <input
            value={otherIncome}
            name="otherIncome"
            onChange={handleInput}
          />
        </div>
        <button>Submit Income Statement data</button>
      </form>
      <hr />
      <IncomeStatementData />
    </div>
  );
}

export default IncomeStatementForm;
