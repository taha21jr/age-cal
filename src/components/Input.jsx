const Input = (props) => {
  const {
    setDay,
    setMonth,
    setYear,
    day,
    months,
    year,
    submit,
    style,
    onClick,
  } = props;
  console.log("in input comp", props);

  const handleInputChange = (setState) => (event) => {
    setState(event.target.value);
  };

  return (
    <div className="input-fields">
      <input
        placeholder="DD"
        className={submit && "red-placeholder"}
        value={day}
        onChange={handleInputChange(setDay)}
        style={style}
        onClick={onClick}
      />

      <input
        placeholder="MM"
        className={submit && "red-placeholder"}
        value={months}
        onChange={handleInputChange(setMonth)}
        style={style}
        onClick={onClick}
      />

      <input
        placeholder="YYYY"
        className={submit && "red-placeholder"}
        value={year}
        onChange={handleInputChange(setYear)}
        style={style}
        onClick={onClick}
      />
    </div>
  );
};

export default Input;
