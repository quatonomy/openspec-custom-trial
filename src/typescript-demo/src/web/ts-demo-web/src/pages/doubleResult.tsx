import { useState } from 'react';

export function DoubleResult() {

  const [numberInput, setNumberInput] = useState('');
  const [result, setResult] = useState<number | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = Number(numberInput);

    if (Number.isFinite(value)) {
      setResult(value * 2);
    }
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="numberInput">Enter a number to double:</label>
        <br />
        <input
          id="numberInput"
          type="number"
          value={numberInput}
          onChange={(event) => setNumberInput(event.target.value)}
          required
        />
        <br />
        <button type="submit">Double Up</button>
      </form>
      <div id="resultContainer" aria-live="polite">
        <p>{result === null ? 'Enter a number and click Double Up.' : `Result: ${result}`}</p>
      </div>
    </div>
  );
}