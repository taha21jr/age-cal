import { useEffect, useState } from "react";
// import moment from "moment";
import Input from "./Input";
import Valid from "./Valid";

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
  const [validYear, setValidYear] = useState(false);
  const [validMonth, setValidMonth] = useState(false);
  const [validDay, setValidDay] = useState(false);
  const [fields, setFields] = useState(false);
  const [allFields, setAllFields] = useState(false);

  const handleSubmit = (event) => {
    const currentYear = new Date().getFullYear();
    const checkMonth = 12;

    event.preventDefault();

    if (day === "" || months === "" || year === "") {
      setIsSubmitted(true);
    } else if (day >= 32 && months > checkMonth && year > currentYear) {
      setFields(true);
    } else if (day >= 32) {
      setValidDay(true);
      setAllFields(true);
    } else if (months > checkMonth) {
      setValidMonth(true);
      setAllFields(true);
    } else if (year > currentYear) {
      setValidYear(true);
      setAllFields(true);
    } else if (year > currentYear || months > checkMonth || day >= 32) {
      setIsSubmitted(true);
    } else if (year <= currentYear && months <= checkMonth && day <= 31) {
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

  const handleClick = () => {
    setDash(false);
    setIsSubmitted(false);
    setFields(false);
    setValidDay(false);
    setValidMonth(false);
    setValidYear(false);
    setAllFields(false);
  };

  return (
    <form className="form" autoComplete="off">
      <div className="container">
        <div className="para-div">
          <p
            className={
              isSubmitted
                ? "day-highlight"
                : fields
                ? "day-highlight"
                : allFields
                ? "day-highlight"
                : ""
            }
          >
            DAY
          </p>
          <p
            className={
              isSubmitted
                ? "month-highlight"
                : fields
                ? "month-highlight"
                : allFields
                ? "month-highlight"
                : "month"
            }
          >
            MONTH
          </p>
          <p
            className={
              isSubmitted
                ? "year-highlight"
                : fields
                ? "year-highlight"
                : allFields
                ? "year-highlight"
                : ""
            }
          >
            YEAR
          </p>
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
              : fields
              ? "hsl(0, 100%, 67%)"
              : allFields
              ? "hsl(0, 100%, 67%)"
              : "hsl(259, 100%, 65%)",
          }}
        />
        {isSubmitted ? (
          <Valid
            fields={fields}
            submit={isSubmitted}
            vDay={validDay}
            vMonth={validMonth}
            vYear={validYear}
          />
        ) : fields ? (
          <Valid
            fields={fields}
            submit={isSubmitted}
            vDay={validDay}
            vMonth={validMonth}
            vYear={validYear}
          />
        ) : allFields ? (
          <Valid
            fields={fields}
            submit={isSubmitted}
            vDay={validDay}
            vMonth={validMonth}
            vYear={validYear}
          />
        ) : null}

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
