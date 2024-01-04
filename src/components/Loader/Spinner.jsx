import React from 'react'
import "./loader.css"
const Spinner = () => {
  return (
    <div className="w-[15rem] h-[13rem] rounded-lg flex items-center justify-center bg-[rgba(0,0,0,.75)] ">
      <div className="spinner "></div>
    </div>
  );
}

export default Spinner
