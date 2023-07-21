import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./Home.css";

export const Home = () => {
  const [riddle, setRiddle] = useState("");
  const [answer, setAnswer] = useState("");
  const [user, setUser] = useState("");

  const getData = (event) => {
    if (event.key === "Enter") {
      setUser(event.target.value);
      console.log(event.target.value);

      if (riddle === "") {
        window.alert("Please generate a riddle first");
      } else {
        if (user === "") {
          window.alert("Please enter your answer");
        } else {
          if (user === answer) {
            window.alert("Correct!");
            getRiddle();
          } else {
            window.alert("Wrong!");
          }
        }
      }
    }
  };

  const getRiddle = () => {
    Axios.get("https://riddles-api.vercel.app/random").then((response) => {
      setRiddle(response.data.riddle);
      setAnswer(response.data.answer);
      console.log(riddle);
      console.log(answer);
      setUser("");
    });
  };

  const handleChange = (value) => {
    setUser(value);
  };

  useEffect(() => {
    console.log(riddle);
    console.log(answer);
  }, [riddle, answer]);
  return (
    <div className="body">
      <div className="home">
        <button onClick={getRiddle} className="generate">
          Generate Riddle
        </button>
      </div>
      <br />
      <div className="riddle-text">{riddle}</div>
      <br />
      <div className="input-block">
        <input
          type="text"
          name="input-text"
          id="input-text"
          required
          placeholder="Your Answer Here"
          onKeyDown={getData}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <p>
        Press ENTER to submit your answer
        <br />
        <br />
        RIDDLE API from{" "}
        <a
          href="https://riddles-api.vercel.app/"
          target="_blank"
          rel="noreferrer">
          https://riddles-api.vercel.app/
        </a>
      </p>
    </div>
  );
};
