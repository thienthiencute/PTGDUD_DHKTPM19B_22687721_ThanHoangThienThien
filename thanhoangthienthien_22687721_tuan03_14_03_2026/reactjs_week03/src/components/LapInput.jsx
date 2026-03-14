import React, { forwardRef } from 'react';

const LapInput = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} type="text" placeholder="Enter lap name" />
    </div>
  );
});

export default LapInput;