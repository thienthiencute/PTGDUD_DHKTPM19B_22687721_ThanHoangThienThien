import React, { useState, useRef } from 'react';
import LapInput from './LapInput';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false); // To track if stopwatch is running
  const [laps, setLaps] = useState([]); // To track laps
  const intervalIdRef = useRef(null); // To store intervalId, don't use state
  const lapInputRef = useRef(null); // To focus the input field when adding a lap

  const startStopwatch = () => {
    if (!isRunning) {
      intervalIdRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update time every 10ms
      }, 10);
      setIsRunning(true);
    }
  };

  const pauseStopwatch = () => {
    clearInterval(intervalIdRef.current);
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalIdRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const addLap = () => {
    setLaps((prevLaps) => [...prevLaps, { name: `Lap ${laps.length + 1}`, time }]);
    lapInputRef.current.focus(); // Focus input for lap name
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>
        <p>Time: {Math.floor(time / 1000)}s {time % 1000}ms</p>
      </div>
      <div>
        <button onClick={startStopwatch} disabled={isRunning}>Start</button>
        <button onClick={pauseStopwatch} disabled={!isRunning}>Pause</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
      <div>
        <button onClick={addLap}>Add Lap</button>
      </div>
      <LapInput ref={lapInputRef} />
      <div>
        <h3>Laps</h3>
        <ul>
          {laps.map((lap, index) => (
            <li key={index}>
              {lap.name}: {Math.floor(lap.time / 1000)}s {lap.time % 1000}ms
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;