import { ErrorMessage } from "formik";
import "./selectField.scss";
import { MenuItem, Select } from "@mui/material";

const SelectField = (props: SelectFieldProps) => {
  const {
    formik,
    fieldName,
    label,
    placeholder,
    suffix,
    prefix,
    children,
    labelColor = "#606060",
    labelFontSize = "14px",
    labelFontWeight = "500",
  } = props;
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

      <Select
        displayEmpty
        name={fieldName}
        value={formik?.values?.[fieldName]}
        onChange={formik.handleChange}
        error={formik.touched?.[fieldName] && formik.errors?.[fieldName]}
      >
        <MenuItem value="" disabled>
          <div className=""> {placeholder}</div>
        </MenuItem>
        {children}
      </Select>

      {prefix && <img className="prefix" src={prefix} />}
      <ErrorMessage component="div" name={fieldName}>
        {(msg: string) => <div className="validation-err-message">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};
export default SelectField;

interface SelectFieldProps {
  fieldName: string;
  label: string;
  suffix?: string;
  prefix?: string;
  labelColor?: string;
  labelFontWeight?: string;
  labelFontSize?: string;
  formik: any;
  placeholder: string;
  children?:React.ReactNode
}
