import React from "react";
import { connect } from "react-redux";

const User = ({ name, status }) => (
  <div style={styles.card}>
    <h2 style={styles.heading}>User Info</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Status:</strong> {status}</p>
  </div>
);

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
};

const mapStateToProps = (state) => ({
  name: state.user.name,
  status: state.user.status,
});

export default connect(mapStateToProps)(User);
