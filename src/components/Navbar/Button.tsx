import React, { FC } from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  buttonStyle?: string;
  buttonSize?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle =
    buttonStyle && STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize =
    buttonSize && SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
