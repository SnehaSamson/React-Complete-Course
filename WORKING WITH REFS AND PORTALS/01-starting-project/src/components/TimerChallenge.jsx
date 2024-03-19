import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);


    // By using the normal variable when the state changes this will re-executed but the variable cannot hold the state. 

    // Problems you face when you use variable inside or outside the component : 
    // 1. when you click on multiple challenges the variable cant handle all the challenges.

    // let timer;


    function handleStart() {

        //    timer = setTimeout(() => {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        //   clearTimeout(timer)
        clearTimeout(timer.current)

    }

    return (
        <>
            {/* {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} result="lost" />} */}
            <ResultModal ref={dialog } targetTime={targetTime} result="Lost" />
            <section className="challenge">

                <h2>{title}</h2>
                {/* {timerExpired && <p> You Lost! </p>} */}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>

                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>

                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : ' Timer inactive'}
                </p>
            </section>
        </>
    )
}