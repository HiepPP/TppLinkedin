import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

export default function CreateCampaignDialog() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Campaign name"
            variant="outlined"
            size="medium"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Source" variant="outlined" />
        </Grid>
      </Grid>
    </>
  );
}
