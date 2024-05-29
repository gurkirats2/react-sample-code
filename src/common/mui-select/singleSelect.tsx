import { Select } from "@mui/material";

const SingleSelect = (props: SingleSelect) => {
  const { placeholder, value, onChange, children } = props;
  return (
    <>
      <Select
        renderValue={(selected: any) => {
          if (!selected) {
            return <span style={{ color: "#aaa" }}>{placeholder}</span>;
          }
          return selected;
        }}
        value={value}
        onChange={onChange}
        className="select-hover"
        displayEmpty
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

export default SingleSelect;

interface SingleSelect {
  placeholder: string;
  value: any;
  onChange: any;
  children: React.ReactNode;
}
