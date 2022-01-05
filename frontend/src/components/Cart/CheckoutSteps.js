import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import { Typography, Stepper, StepLabel, Step } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "./CheckoutSteps.css";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <Typography style={{color:"grey"}}>Shipping Details</Typography>,
      icon: <LocalShippingIcon />,
    },
    {
      label: <Typography style={{color:"grey"}}>Confirm Order</Typography>,
      icon: <LibraryAddCheckIcon />,
    },
    {
      label: <Typography style={{color:"grey"}}>Payment</Typography>,
      icon: <AccountBalanceIcon />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
    backgroundColor: "transparent",
    margin:"3.5rem 0 1rem"
  };

  return (
    <Fragment>
      <Box sx={{ width: "100%", display:"flex",justifyContent:"center", alignItems:"center"}} >
        <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
          {steps.map((item, index) => (
            <Step
              key={index}
              active={activeStep === index ? true : false}
              completed={activeStep >= index ? true : false}
            >
              <StepLabel
                style={{
                  color: activeStep >= index ? "#0077ffa2" : "red",
                }}
                icon={item.icon}
              >
                {item.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Fragment>
  );
};

export default CheckoutSteps;
