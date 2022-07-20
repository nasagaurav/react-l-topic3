import React, { useRef } from 'react';
export default function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const handleClick = () => {
    console.log(ref1);
    console.log(ref2);
    console.log(ref3);
    ref1.current.placeholder = 'enter name';
    ref2.current.placeholder = 'enter email';
    ref3.current.placeholder = 'enter phone';

    ref1.current.value = 'nasa';
    ref2.current.value = 'nasa@gaurav.com';
    ref3.current.value = 9879879877;
  };
  return (
    <div>
      <input ref={ref1} />
      <input ref={ref2} />
      <input ref={ref3} />
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
