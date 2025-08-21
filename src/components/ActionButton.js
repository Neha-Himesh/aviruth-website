// src/components/ActionButton.js
import React from 'react';

function ActionButton({ text,linkAddress }) {
  return (
    <div className="row">
      <div className="p-4 px-5">
        <a className="rounded shadow btn btn-primary p-3" type="button" href={linkAddress}>{text}</a>
      </div>
    </div>
  );
}

export default ActionButton;
