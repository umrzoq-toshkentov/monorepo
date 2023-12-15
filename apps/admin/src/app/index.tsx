import * as React from "react";
import "./styles.css";
import { CounterButton, Link } from "@repo/ui";
import { useSwitch } from "@/hooks/useSwitch";

function App(): JSX.Element {
  const log = useSwitch();

  return (
    <div className="container">
      <h1 className="title">
        Admin <br />
        <span>Kitchen Sink</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo {log}
        </Link>
        {" & "}
        <Link href="https://vitejs.dev/" newTab>
          Vite
        </Link>
      </p>
    </div>
  );
}

export default App;
