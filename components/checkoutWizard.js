import { Step, Stepper, StepLabel } from '@material-ui/core';
import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {['Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )
      )}
    </Stepper>
  );
}
