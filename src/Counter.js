import { useState, useMemo } from "react";

const Counter = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const Increment = () => {
    setCountOne((prev) => prev + 1);
  };

  const Decrement = () => {
    setCountTwo((prev) => prev + 1);
  };

  const isEven = useMemo(() => {
    for (let i = 0; i < 2000000000; i++) return countOne % 2 == 0;
  }, [countOne]);

  return (
    <div>
      <button onClick={Increment}>Count : {countOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={Decrement}>Count : {countTwo}</button>
    </div>
  );
};

export default Counter;
