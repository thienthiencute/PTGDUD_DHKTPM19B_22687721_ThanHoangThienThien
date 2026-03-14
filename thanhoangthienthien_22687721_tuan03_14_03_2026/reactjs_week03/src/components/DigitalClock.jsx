// components/DigitalClock.jsx
import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Hàm callback cập nhật giờ
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Cập nhật mỗi giây

    // Cleanup function: dừng interval khi component unmount
    return () => clearInterval(intervalId);
  }, []); // [] chỉ chạy lần đầu khi component mount

  return (
    <div className="clock">
      <h1>Digital Clock</h1>
      <p>{time}</p>
    </div>
  );
};

export default DigitalClock;