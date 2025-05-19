const RightArrow = ({ color = "#5A84DF" }: { color?: string }) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.31061 6.65167L2.12502 11.8373L0.828857 10.5411L5.36636 6.00359L0.828857 1.46609L2.12502 0.169922L7.31061 5.3555C7.48246 5.52741 7.57899 5.76052 7.57899 6.00359C7.57899 6.24666 7.48246 6.47977 7.31061 6.65167Z"
        fill={color}
      />
    </svg>
  );
};

export default RightArrow;
