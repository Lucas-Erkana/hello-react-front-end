import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../store/greetingsSlice';
import './Greetings.css';

function Greetings() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);
  const singleGreeting = greetingsData[Math.floor(Math.random() * greetingsData.length)];

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div className="center">
      {singleGreeting && <h2>{singleGreeting.greeting}</h2>}
      <button onClick={() => dispatch(fetchGreetings())} className="greeting-btn" type="button">
        Get Greeting
      </button>
    </div>
  );
}

export default Greetings;
