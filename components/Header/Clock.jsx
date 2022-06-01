import { useState } from "react";

const Clock = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const countDownDate = new Date("Jun 18, 2022").getTime();
    const countDown = setInterval(() => {
        const now = new Date().getTime();
        const timeleft = countDownDate - now;

        setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
        setHours(
            Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));

        if (timeleft < 0) {
            clearInterval(countDown);
        }
    }, 1000);

    return (
        <div className="flex mt-14 rounded-md bg-gray-800 shadow-xl lap:mt-5">
            <div
                className="days flex flex-col items-center justify-center px-10 py-8 lap:px-8 lap:py-6 tab:px-7 tab:py-5 mph:px-6 mph:py-4"
                style={{ borderRight: "1px solid #f6f6f6" }}
            >
                <h1 className="text-4xl font-semibold lap:text-3xl tab:text-2xl">
                    {days}
                </h1>
                <span className="text-sm mph:text-xs">Days</span>
            </div>
            <div
                className="hours flex flex-col items-center justify-center px-10 py-8 lap:px-8 lap:py-6 tab:px-7 tab:py-5 mph:px-6 mph:py-4"
                style={{ borderRight: "1px solid #f6f6f6" }}
            >
                <h1 className="text-4xl font-semibold lap:text-3xl tab:text-2xl">
                    {hours}
                </h1>
                <span className="text-sm mph:text-xs">Hours</span>
            </div>
            <div
                className="minutes flex flex-col items-center justify-center px-10 py-8 lap:px-8 lap:py-6 tab:px-7 tab:py-5 mph:px-6 mph:py-4"
                style={{ borderRight: "1px solid #f6f6f6" }}
            >
                <h1 className="text-4xl font-semibold lap:text-3xl tab:text-2xl">
                    {minutes}
                </h1>
                <span className="text-sm mph:text-xs">Mins</span>
            </div>
            <div className="seconds flex flex-col items-center justify-center px-10 py-8 lap:px-8 lap:py-6 tab:px-7 tab:py-5 mph:px-6 mph:py-4">
                <h1 className="text-4xl font-semibold lap:text-3xl tab:text-2xl">
                    {seconds}
                </h1>
                <span className="text-sm mph:text-xs">Secs</span>
            </div>
        </div>
    );
};

export default Clock;
