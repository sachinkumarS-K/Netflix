import React from 'react'
import "./loader.css"
const Spinner = () => {
  return (
    <div className="w-[20rem] h-[17rem] rounded-lg flex items-center justify-center bg-[rgba(0,0,0,.75)] ">
      <div className="spinner "></div>
    </div>
  );
}

export default Spinner
