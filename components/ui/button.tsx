import { CircularProgress } from "@mui/material";

type PROPS = {
  label: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  loading?: boolean;
  size?: "small" | "large";
  [props: string]: any;
  disabled?: boolean;
  variant?: "default" | "goBack" | "error" | "link" | 'outline'| 'dark'| 'transparent';
  showIcon?: boolean;
  style?: Object;
  type?: "submit" | "reset" | "button" | undefined
};

const CustomButton = ({
  label,
  className = "",
  icon,
  onClick,
  loading = false,
  disabled = false,
  variant = "default",
  showIcon = true,
  style,
  type ,
  ...rest
}: PROPS) => {
  const variants = {
    default: `bg-[#1A94D5] text-[#fff]`,
    link: `bg-[transparent] text-[#225CC5]`,
    goBack: `bg-[#939393] text-[#fff]`,
    error: `bg-[#ec4949] text-[#fff]`,
    outline: "bg-[#fff] text-[#225CC5]",
    dark: "bg-[#263F49] text-[#ffff]",
    transparent:"bg-[transparent] text-[#ffff]"
  };

  return (
    <button
    type={  type}
      className={`${
        variants[variant] || ""
      } flex items-center transition-all whitespace-nowrap ease-in-out duration-300 relative border border-[2px] font-[600] text-[16px] px-[20px] py-[7.5px] text-center cursor-pointer rounded-[50px] ${className}`}
      onClick={onClick}
      {...rest}
      disabled={loading || disabled}
      style={style}
    >
      {label}
      {showIcon && (
        <span className="ml-[10px]">
          {loading ? <CircularProgress size={15} color="inherit" /> : icon}
        </span>
      )}
    </button>
  );
};

export default CustomButton;
