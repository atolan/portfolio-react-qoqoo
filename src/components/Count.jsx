import React, { useEffect, useState } from 'react';

import '../App.css'

const Count = props => {
  // label of counter
  // number to increment to
  // duration of count in seconds
  const {id, label, number, duration } = props.data

  // number displayed by component
  const [count, setCount] = useState("1")

  useEffect(() => {
    let start = 1;
    // first three numbers from props
    const end = parseInt(number.substring(0,3))
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter 
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)       
    }, incrementTime);

    // dependency array
  }, [number, duration]);

  return (
    <div className="col-3">
        <div className={`counter__item counter__item-${ id }`}>
            <div className="counter__item__text">
                <img src={`/assets/img/icons/ci-${ id }.png`} alt="" />
                <h2 className="counter_num">{ count }</h2>
                <p>{ label }</p>
            </div>
        </div>
    </div>
  );
}

export default Count;