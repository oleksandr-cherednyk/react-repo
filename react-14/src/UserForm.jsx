import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "./redux/actions";

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("offline");

  const onSubmit = (e) => {
    e.preventDefault();
    setUserInfo(name, status);
  };

  return (
    <form onSubmit={onSubmit} style={styles.card}>
      <h2 style={styles.heading}>Change User</h2>

      <div style={styles.field}>
        <label style={styles.label}>Name:</label>
        <input
          style={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Status:</label>
        <input
          style={styles.input}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>

      <button type="submit" style={styles.button}>
        Save
      </button>
    </form>
  );
};

const styles = {
  card: {
    backgroundColor: "white",
    border: "1px solid #dcdde1",
    borderRadius: "8px",
    padding: "16px",
  },
  heading: {
    marginTop: 0,
    color: "#273c75",
  },
  field: {
    marginBottom: "10px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#2f3640",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #dcdde1",
  },
  button: {
    backgroundColor: "#31457cff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "8px 16px",
    cursor: "pointer",
  },
};

export default connect(null, { setUserInfo })(UserForm);
