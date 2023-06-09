import React, { useState, useEffect } from "react";

function CountDown() {
  const [count, setCount] = useState(9);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (count > 0) {
      const intervalId = setInterval(() => {
        setCount(count => count - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setVisible(false);
    }
  }, [count]);

  return (
    <div>
      {visible && <h1>{count}</h1>}
    </div>
  );
}

export default CountDown;
