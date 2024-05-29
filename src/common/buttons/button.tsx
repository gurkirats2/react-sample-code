import { Button } from "@mui/material";

const MUIButton = (props: IButton) => {
  const {
    isLoading = false,
    variant,
    children,
    color,
    borderRadius = "10px",
    padding,
    fontSize = "14px",
    width,
    textColor = "#fff",
    fontWeight = 500,
  } = props;
  console.log(isLoading, color);
  return (
    <Button
      variant={variant}
      sx={{
        outline: "none",
        whiteSpace: "nowrap",
        borderRadius: borderRadius,
        padding: padding,
        fontSize: fontSize,
        color: textColor,
        width: width || "unset",
        textTransform: "none",
        fontWeight: fontWeight,
      }}
    >
      {children}
    </Button>
  );
};

export default MUIButton;

interface IButton {
  type?: string;
  isLoading?: boolean;
  variant: "text" | "outlined" | "contained";
  children: React.ReactNode;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  width?: string;
  textColor?: string;
  fontWeight?: string;
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "secondaryLight"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "white"
    | "navyBlue"
    | "lightGray";
}
