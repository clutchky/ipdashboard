import { useMetrics } from "../contexts/MetricsContext";

function CurrentPrice() {
  const { currentPrice, handleInput } = useMetrics();

  return (
    <div>
      <label>Current Price:</label>
      <input
        type="text"
        value={currentPrice}
        name="currentPrice"
        onChange={handleInput}
      />
    </div>
  );
}

export default CurrentPrice;
