import { useLog } from "@repo/hook";
import { CounterButton, Link } from "@repo/ui";

export const metadata = {
  title: "Store | Kitchen Sink",
};

export default function Store(): JSX.Element {
  const log = useLog();
  console.log(log);
  return (
    <div className="container">
      <h1 className="title">
        Store <br />
        <span>Kitchen Sink{log.a}</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p>
    </div>
  );
}
