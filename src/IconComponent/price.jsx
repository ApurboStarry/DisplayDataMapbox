import React from 'react';

function PriceSVG(props) {
  console.log(props.price);
  return (
    <svg
      width="52.75"
      height="34"
      viewBox="0 0 52.75 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect width="52.75" height="34" fill="#E5E5E5" />
      <rect width="52.75" height="34" fill="#FFFCFC" /> */}
      <rect width="52.75" height="34" rx="8" fill="black" />
      <text
        fontWeight="bold"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="0.9em"
        fontFamily="monospace"
      >
        {"$" + props.price}
      </text>
    </svg>
  );
}

export default PriceSVG;