import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [like, setLike] = useState(0);
  const [fLike, setFLike] = useState(0);

  const avg = (like + fLike) / 2;
  const finalBill = bill * (1 + avg / 100);

  return (
    <div>
      <BillInput bill={bill} setBill={setBill}>
        How much was the bill?
      </BillInput>
      <SelectPercentage like={like} setLike={setLike}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage like={fLike} setLike={setFLike}>
        How did your friend like the service?
      </SelectPercentage>
      {bill !== 0 && (
        <div>
          <h3>
            You pay ${finalBill} (${bill} + ${(bill * avg) / 100} tip)
          </h3>
          <button
            onClick={() => {
              setBill(0);
              setLike(0);
              setFLike(0);
            }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

function BillInput({ bill, setBill, children }) {
  return (
    <div>
      <label>{children}</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function SelectPercentage({ like, setLike, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={like}
        onChange={(e) => {
          setLike(Number(e.target.value));
        }}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
