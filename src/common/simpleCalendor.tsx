import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

const SimpleCalendor = (props: ISimpleCalendor) => {
  const { value, setValue, onChange } = props;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            onChange;
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default SimpleCalendor;

interface ISimpleCalendor {
  value: Dayjs | null;
  setValue: any;
  onChange?: () => void;
}
