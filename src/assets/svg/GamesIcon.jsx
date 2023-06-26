const GamesIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="menu-icon"
    >
      <rect
        x="14"
        y="21"
        width="22"
        height="14"
        rx="3"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M25 20V18.5C25 17.6716 25.6716 17 26.5 17V17C27.3284 17 28 16.3284 28 15.5V14"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M21 26V30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M23 28L19 28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="29" cy="30" r="1" fill="white" />
      <circle cx="31" cy="27" r="1" fill="white" />
    </svg>
  );
};

export default GamesIcon;
