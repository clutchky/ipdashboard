// import { useReducer, useState } from "react";
import BalanceSheetData from "./BalanceSheetData";
import { useMetrics } from "../contexts/MetricsContext";

// const initialState = {
//   totalAssets: 0,
//   totalLiabilities: 0,
//   currentAssets: 0,
//   currentLiabilities: 0,
//   shortTermDebts: 0,
//   longTermDebts: 0,
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

function BalanceSheetForm() {
  const {
    handleInput,
    handleSubmit,
    totalAssets,
    totalLiabilities,
    currentAssets,
    currentLiabilities,
    shortTermDebts,
    longTermDebts,
  } = useMetrics();
  // const [
  //   {
  //     totalAssets,
  //     totalLiabilities,
  //     currentAssets,
  //     currentLiabilities,
  //     shortTermDebts,
  //     longTermDebts,
  //   },
  //   dispatch,
  // ] = useReducer(reducer, initialState);
  // const [balanceSheetData, setBalanceSheetData] = useState({});

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
  //   setBalanceSheetData({
  //     totalAssets,
  //     totalLiabilities,
  //     currentAssets,
  //     currentLiabilities,
  //     shortTermDebts,
  //     longTermDebts,
  //     currentPrice,
  //   });
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Total Assets </label>
          <input
            type="text"
            value={totalAssets}
            name="totalAssets"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Total Liabilities </label>
          <input
            type="text"
            value={totalLiabilities}
            name="totalLiabilities"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Current Assets </label>
          <input
            type="text"
            value={currentAssets}
            name="currentAssets"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Current Liabilities </label>
          <input
            type="text"
            value={currentLiabilities}
            name="currentLiabilities"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Short Term Debts </label>
          <input
            type="text"
            value={shortTermDebts}
            name="shortTermDebts"
            onChange={handleInput}
          />
        </div>
        <div>
          <label>Long Term Debts </label>
          <input
            type="text"
            value={longTermDebts}
            name="longTermDebts"
            onChange={handleInput}
          />
        </div>
        <button>Submit Balance Sheet data</button>
      </form>
      <BalanceSheetData />
    </div>
  );
}

export default BalanceSheetForm;
