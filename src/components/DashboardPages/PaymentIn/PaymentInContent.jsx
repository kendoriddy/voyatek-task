import React from "react";
import { Grid, Card, Typography, CardContent } from "@mui/material";

function PaymentInContent() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5">Welcome to the Dashboard</Typography>
            <Typography>This is the main content area.</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* ...other content components */}
    </Grid>
  );
}

export default PaymentInContent;
