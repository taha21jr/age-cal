import { useEffect, useState } from "react";
import Input from "./Input";

const Form = () => {
  const [day, setDay] = useState("");
  const [months, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [finalState, setFinalState] = useState({});

  const [dash, setDash] = useState(false);

  const handleSubmit = (event) => {
    console.log(day);
    event.preventDefault();
    setDash(true);
  };

  useEffect(() => {
    if (dash) {
      const obj = {
        day,
        months,
        year,
      };
      setFinalState(obj);
      setDay("");
      setMonth("");
      setYear("");
    }
  }, [dash]);

  return (
    <form className="form" autoComplete="off">
      <div className="container">
        <div className="para-div">
          <p>DAY</p>
          <p className="month"> MONTH</p>
          <p>YEAR</p>
        </div>

        <Input
          type="text"
          day={day}
          months={months}
          year={year}
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
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
          <h1 className="dash">{dash ? finalState.day : "_ _"}</h1>
          <h1>years</h1>
        </div>

        <div className="ageCal">
          <h1 className="dash">{dash ? finalState.months : "_ _"}</h1>
          <h1>months</h1>
        </div>

        <div className="ageCal">
          <h1 className="dash">{dash ? finalState.year : "_ _"}</h1>
          <h1>days</h1>
        </div>
      </div>
    </form>
  );
};

export default Form;
