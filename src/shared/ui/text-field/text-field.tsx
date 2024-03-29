import { InputHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./text-field.module.scss";
const TextField = ({
  label,
  type,
  placeholder,
  error,
  ...rest
}: {
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="w-full flex flex-col">
      <label className="text-textMainColor" htmlFor={label}>
        {label}
      </label>
      <input
        {...rest}
        id={label}
        type={type}
        placeholder={placeholder}
        className={clsx(
          "bg-borderMainColor text-textMainColor py-3 w-full rounded-xl outline-none pl-5",
          styles.input
        )}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextField;
