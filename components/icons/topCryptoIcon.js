import React from "react";

const WorkoutsIcon = ({ isActive }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4791 14.8667H9.94576C9.10576 14.8667 8.42578 15.5466 8.42578 16.3866V23.2133H13.4791V14.8667V14.8667Z"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.0135 8.7998H14.9868C14.1468 8.7998 13.4668 9.47982 13.4668 10.3198V23.1999H18.5201V10.3198C18.5201 9.47982 17.8535 8.7998 17.0135 8.7998Z"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.0626 17.1333H18.5293V23.2H23.5826V18.6533C23.5693 17.8133 22.8893 17.1333 22.0626 17.1333Z"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9993 29.3332H19.9993C26.666 29.3332 29.3327 26.6665 29.3327 19.9998V11.9998C29.3327 5.33317 26.666 2.6665 19.9993 2.6665H11.9993C5.33268 2.6665 2.66602 5.33317 2.66602 11.9998V19.9998C2.66602 26.6665 5.33268 29.3332 11.9993 29.3332Z"
        stroke={`${isActive ? "#6b0ecf" : "#6B7280"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default WorkoutsIcon;
