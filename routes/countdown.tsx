import Countdown from "../islands/Countdown.tsx";
import { useEffect, useState } from "preact/hooks";

export default function Page() {
 
  const simpleStart = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  };

  const [time, setTime] = useState(simpleStart());

  return (
    <>
    <p>time left: <Countdown target={time.toISOString()} /> </p>
    </>
  );
}