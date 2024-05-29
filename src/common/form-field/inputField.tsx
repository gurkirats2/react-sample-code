import { Field, ErrorMessage } from "formik";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Box } from "@mui/material";

const FormField = (props: FormFieldProps) => {
  const {
    fieldName,
    type,
    label,
    placeholder,
    suffix,
    prefix,
    disabled = false,
    children,
    labelColor = "#606060",
    labelFontSize = "14px",
    labelFontWeight = "500",
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const password_toggle = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      // type = "text";
    } else {
      // type = "password";
    }
  };

  return (
    <div className="w-full flex-col flex relative mb-3 form_field">
      <label
        htmlFor={fieldName}
        className={`text-sm mb-3`}
        style={{
          color: labelColor,
          fontSize: labelFontSize,
          fontWeight: labelFontWeight,
        }}
      >
        {label}
      </label>
      {suffix && (
        <div className="suffix">
          <img src={suffix} />
        </div>
      )}
      <Field
        name={fieldName}
        type={type}
        className={`input-field ${suffix && "px-10"} p-4`}
        placeholder={placeholder}
        disabled={disabled}
      />
      {prefix && <img className="prefix" src={prefix} />}
      {children && (
        <Box position={"absolute"} right={"6px"} bottom={"15px"}>
          {children}
        </Box>
      )}
      {fieldName == "password" && (
        <div>
          {showPassword && (
            <VisibilityOffIcon
              className={`prefix cursor-pointer`}
              onClick={password_toggle}
            />
          )}
          {!showPassword && (
            <RemoveRedEyeIcon
              className={`prefix cursor-pointer`}
              onClick={password_toggle}
            />
          )}
        </div>
      )}
      <ErrorMessage component="div" name={fieldName}>
        {(msg: string) => <div className="validation-err-message">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};
export default FormField;

interface FormFieldProps {
  fieldName: string;
  type: string;
  label?: string;
  placeholder: string;
  suffix?: string;
  prefix?: string;
  labelColor?: string;
  labelFontWeight?: string;
  labelFontSize?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}
