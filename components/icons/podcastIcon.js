import React from "react";

const RandomizerIcon = ({ isActive }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.3327 19.9998V11.9998C29.3327 5.33317 26.666 2.6665 19.9993 2.6665H11.9993C5.33268 2.6665 2.66602 5.33317 2.66602 11.9998V19.9998C2.66602 26.6665 5.33268 29.3332 11.9993 29.3332H19.9993C26.666 29.3332 29.3327 26.6665 29.3327 19.9998Z"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.35938 9.47998H28.6394"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.3594 2.81348V9.29348"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.6406 2.81348V8.69348"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 19.2667V17.6667C13 15.6133 14.4533 14.7733 16.2267 15.8L17.6133 16.6L19 17.4C20.7733 18.4267 20.7733 20.1067 19 21.1333L17.6133 21.9333L16.2267 22.7333C14.4533 23.76 13 22.92 13 20.8667V19.2667V19.2667Z"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RandomizerIcon;
