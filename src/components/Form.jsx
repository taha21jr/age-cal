import { useEffect, useState } from "react";
import Input from "./Input";

let ageYears = null,
  ageMonths = null,
  ageDays = null;

const Form = () => {
  const [day, setDay] = useState("");
  const [months, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [finalState, setFinalState] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dash, setDash] = useState(false);

  const handleSubmit = (event) => {
    console.log("day" + day, months, year);

    event.preventDefault();
    if (day === "" || months === "" || year === "") {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
      let currentDate = new Date();
      let birthDate = new Date(year, months - 1, day);
      let ageInMilliseconds = currentDate - birthDate;

      let seconds = ageInMilliseconds / 1000;
      let minutes = seconds / 60;
      let hours = minutes / 60;
      let days = hours / 24;

      ageYears = Math.floor(days / 365);
      ageMonths = Math.floor((days % 365) / 30.44);
      ageDays = Math.floor((days % 365) % 30.44);

      console.log("if", ageDays);
      if (ageDays === "") {
        console.log("hell0");
      }

      setDash(true);
    }
  };

  useEffect(() => {
    if (dash) {
      const obj = {
        ageDays,
        ageMonths,
        ageYears,
      };

      setFinalState(obj);
      setDay("");
      setMonth("");
      setYear("");
    }
  }, [dash]);

  console.log("dasjh========", dash);
  const handleClick = () => {
    console.log(dash);
    setDash(false);
  };

  return (
    <form className="form" autoComplete="off">
      <div className="container">
        <div className="para-div">
          <p className={isSubmitted ? "day-highlight" : ""}>DAY</p>
          <p className={isSubmitted ? "month-highlight" : "month"}>MONTH</p>
          <p className={isSubmitted ? "year-highlight" : ""}>YEAR</p>
        </div>

        <Input
          type="text"
          onClick={handleClick}
          day={day}
          months={months}
          year={year}
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
          submit={isSubmitted}
          style={{
            borderColor: isSubmitted
              ? "hsl(0, 100%, 67%)"
              : "hsl(259, 100%, 65%)",
          }}
        />

        <hr />
        <button className="btn" type="submit" onClick={handleSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" stroke-width="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>

        <div className="ageCal">
          <h1 className="dash">{dash ? finalState.ageYears : "_ _"}</h1>
          <h1>years</h1>
        </div>

        <div className="ageCal">
          <h1 className="dash">{dash ? finalState.ageMonths : "_ _"}</h1>
          <h1>months</h1>
        </div>

        <div className="ageCal">
          <h1 className="dash">{dash ? finalState.ageDays : "_ _"}</h1>
          <h1>days</h1>
        </div>
      </div>
    </form>
  );
};

export default Form;
