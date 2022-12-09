import { useEffect, useState } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// target date is passed as a string
// props to island components must be JSON (de)serializable
export default function Countdown(props: {target: string} | null) {
  const target = new Date(props?.target || 0);
  const [time, setTime] = useState(new Date());

  // useeffect to update 'time' every second
  // as long as component is mounted
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => {
        if (time > target) {
          clearInterval(timer);
        }
        return new Date();
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [props?.target]);
    
  // if target date has passed, stop counting down
  if (time > target) {
    return <div>🎉🎉🎉</div>;
  }

  // format remaining time and render
  const secondsLeft = Math.floor((target.getTime() - time.getTime()) / 1000);
  return <span>{timeFmt.format(secondsLeft, "seconds")}</span>;
}