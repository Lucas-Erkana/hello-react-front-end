import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../store/greetingsSlice';
import './Greetings.css';

function Greetings() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);
  const [animation, setAnimation] = useState(false);
  const singleGreeting = greetingsData[Math.floor(Math.random() * greetingsData.length)];

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  const handleClick = () => {
    setAnimation(true);
    dispatch(fetchGreetings());
  };

  useEffect(() => {
    if (animation) {
      setTimeout(() => setAnimation(false), 1000); // reset animation after 1s
    }
  }, [animation]);

  return (
    <div className="center">
      {singleGreeting && <h2 className={animation ? 'bounce' : ''}>{singleGreeting.greeting}</h2>}
      <button onClick={handleClick} className="greeting-btn" type="button">
        Get Greeting
      </button>
    </div>
  );
}

export default Greetings;
