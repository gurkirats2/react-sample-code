import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Stepper = ({ items }: { items: IStepper[] }) => {
  const location = useLocation();
  const activeTabUrl = location.pathname;

  useEffect(() => {
    for (const item of items) {
      if (activeTabUrl.includes(item.url)) {
        item.isActive = true;
        break;
      }
      item.isCompleted = true;
    }
  }, [items, activeTabUrl]);
  return (
    <>
      <div className="flex mt-8 ml-4 mr-4">
        {items.map((item: IStepper, index: number) => {
          return (
            <div
              key={item.id}
              className={`${
                index != items.length - 1 && "flex-1"
              }  flex flex-col relative`}
            >
              <Typography
                position={"absolute"}
                whiteSpace={"nowrap"}
                top={"-35px"}
                left={"-27px"}
                className={`${index != items.length - 1 && "flex-1"}`}
              >
                {item.title}
              </Typography>
              <Box
                className={`${index != items.length - 1 && "flex-1"} flex`}
                color={"#575757"}
                key={item.id}
              >
                <Box
                  width={"30px"}
                  height={"30px"}
                  border={
                    item.isActive || item.isCompleted
                      ? "10px solid #3AB7F7"
                      : "0px"
                  }
                  borderRadius={"999px"}
                  padding={"5px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  {!item.isActive && (
                    <Box
                      width={"8px"}
                      height={"8px"}
                      bgcolor={"#3AB7F7"}
                      borderRadius={"50%"}
                    ></Box>
                  )}
                </Box>
                <Box
                  flex={"1"}
                  borderTop={
                    !item.isCompleted
                      ? "1px solid #64646438"
                      : "2px solid #3AB7F7 "
                  }
                  margin={"auto"}
                  className={`${index == items.length - 1 && "d-none"}`}
                ></Box>
              </Box>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stepper;

export interface IStepper {
  id: number;
  title: string;
  isActive: boolean;
  url: string;
  isCompleted: boolean;
}