import { useState } from "react";
import "./checkbox.scss";

const SingleCheckBox = ({
  data = [],
  selectedValuesProps = "",
  onChange,
}: CheckboxProps) => {
  const [selectedValues, setSelectedValues] =
    useState<string>(selectedValuesProps);
  const handleChange = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(""), onChange("");
      return;
    }
    setSelectedValues("");
    setSelectedValues(value);
    onChange(value);
  };

  return (
    <>
      {data &&
        data?.map((d: CheckboxData) => {
          return (
            <div
              key={d.id}
              onClick={() => handleChange(d.value)}
              className="cursor-pointer "
            >
              <div className="pr-1 flex  items-center">
                <div className="custom-checkbox">
                  <span
                    className={`checkmark ${
                      selectedValuesProps == d.value && "checked"
                    }`}
                  ></span>
                </div>
                <label
                  htmlFor="checkbox"
                  className="pl-2 whitespace-nowrap font-semibold label"
                >
                  {d.label}
                </label>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default SingleCheckBox;

interface CheckboxProps {
  data: CheckboxData[];
  selectedValuesProps: string;
  onChange: (selectedValues: string) => void;
}

export interface CheckboxData {
  value: string;
  label: string;
  isChecked: boolean;
  id?: number;
}
