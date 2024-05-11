"use client";
import React, { useEffect, useState } from "react";
import UseFetch from "./UseFetch";

const JsPractice = () => {
  const [number, setNumber] = useState(0);

  const { data, loading } = UseFetch(`http://numbersapi.com/${number}/trivia`);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // http://numbersapi.com/95/trivia
  // useEffect(() => {
  //   const onMouse = (e) => {
  //     console.log(e);
  //   };
  //   window.addEventListener("mousemove", onMouse);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouse);
  //   };
  // }, []);
  return (
    <div>
      <div>{data ? data : "Loading ..."}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default JsPractice;
