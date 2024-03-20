import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }


    // By using the normal variable when the state changes this will re-executed but the variable cannot hold the state. 

    // Problems you face when you use variable inside or outside the component : 
    // 1. when you click on multiple challenges the variable cant handle all the challenges.

    // let timer;


    function handleStart() {

        //    timer = setTimeout(() => {
        // timer.current = setTimeout(() => {
        //     setTimerExpired(true);
        //     dialog.current.open();
        // }, targetTime * 1000);

        timer.current = setInterval(() => {

            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10);

        // setTimerStarted(true);
    }

    function handleStop() {
        //   clearTimeout(timer)
        // clearTimeout(timer.current)
        dialog.current.open();
        clearInterval(timer.current)

    }

    return (
        <>
            {/* {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} result="lost" />} */}
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset = {handleReset}
            />

            <section className="challenge">

                <h2>{title}</h2>
                {/* {timerExpired && <p> You Lost! </p>} */}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>

                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>

                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : ' Timer inactive'}
                </p>
            </section>
        </>
    )
}