import React from "react";

const Valid = (props) => {
  const { fields, submit, vDay, vMonth, vYear } = props;
  return (
    <div className="valid-field">
      {submit ? (
        <span>
          <small>
            <i>This field is required</i>
          </small>
        </span>
      ) : fields ? (
        <span>
          <small>
            <i>Must be a valid day</i>
          </small>
        </span>
      ) : vDay ? (
        <span className="daySpan">
          <small>
            <i>Must be a valid day</i>
          </small>
        </span>
      ) : null}

      {submit ? (
        <span>
          <small>
            <i>This field is required</i>
          </small>
        </span>
      ) : fields ? (
        <span>
          <small>
            <i>Must be a valid Month</i>
          </small>
        </span>
      ) : vMonth ? (
        <span className="monthSpan">
          <small>
            <i>Must be a valid month</i>
          </small>
        </span>
      ) : null}

      {submit ? (
        <span>
          <small>
            <i>This field is required</i>
          </small>
        </span>
      ) : fields ? (
        <span>
          <small>
            <i>Must be in the past </i>
          </small>
        </span>
      ) : vYear ? (
        <span className="yearSpan">
          <small>
            <i>Must be a valid Year</i>
          </small>
        </span>
      ) : null}
    </div>
  );
};

export default Valid;
