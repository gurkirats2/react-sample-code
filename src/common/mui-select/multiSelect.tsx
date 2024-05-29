import { Select } from "@mui/material";

const MultiSelect = (props: IMultiSelect) => {
  const { placeholder, value, onChange, children } = props;
  return (
    <>
      <Select
        renderValue={(selected: any) => {
          if (selected.length === 0) {
            return <span style={{ color: "#aaa" }}>{placeholder}</span>;
          }
          return selected.join(", ");
        }}
        multiple={true}
        displayEmpty
        value={value}
        onChange={onChange}
        className="select-hover"
        style={{
          width: "200px",
          fontWeight: "650",
          backgroundColor: "#F9FAFB",
          border: "none",
          borderRadius: "10px",
        }}
      >
        {children}
      </Select>
    </>
  );
};

export default MultiSelect;

interface IMultiSelect {
  placeholder: string;
  value: any;
  onChange: any;
  children: React.ReactNode;
}
