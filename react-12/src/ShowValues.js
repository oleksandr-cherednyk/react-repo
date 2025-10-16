import React, { useEffect, useRef } from "react";

export default function ShowValues({ value }) {
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return (
    <div >
      <p className="row">
        <span>Current Value:</span>
        <span>{value || ""}</span>
      </p>
      <p className="row">
        <span>Previous Value:</span>
        <span>{prevRef.current ?? "Some input text"}</span>
      </p>
    </div>
  );
}
