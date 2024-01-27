import { useState, useEffect } from "react";
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCurrencyData() {
        setIsLoading(true);
        if (!amount) return;
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        );
        const data = await res.json();
        console.log(data.rates[to]);
        setOutput(data.rates[to]);
        setIsLoading(false);
      }
      if (from === to) return setOutput(amount);

      fetchCurrencyData();
    },
    [amount, from, to]
  );

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount}
        disabled={isLoading}
      />
      <select
        onChange={(e) => setFrom(e.target.value)}
        value={from}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        onChange={(e) => setTo(e.target.value)}
        value={to}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {output} {to}
      </p>
    </div>
  );
}
