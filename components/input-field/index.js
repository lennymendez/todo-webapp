import React from "react";

const DefaultInput = ({ onSubmit, value, onChange } = this.props) => (
  <form onSubmit={onSubmit} className="input-form">
    <input type="text" value={value} onChange={onChange} />
    <input type="submit" value="Submit" />
  </form>
);

export default DefaultInput;
