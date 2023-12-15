import { useState } from "react";
import { Button } from "@mui/material";

export function CounterButton(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        background: `rgba(0,0,0,0.05)`,
        borderRadius: `8px`,
        padding: "1.5rem",
        fontWeight: 500,
      }}
    >
      <p style={{ margin: "0 0 1.5rem 0" }}>
        This component is from{" "}
        <code
          style={{
            padding: "0.2rem 0.3rem",
            background: `rgba(0,0,0,0.1)`,
            borderRadius: "0.25rem",
          }}
        >
          ui
        </code>
      </p>
      <div>
        <Button
          onClick={() => {
            setCount((c) => c + 1);
          }}
          type="button"
        >
          Count: {count}
        </Button>
      </div>
    </div>
  );
}
