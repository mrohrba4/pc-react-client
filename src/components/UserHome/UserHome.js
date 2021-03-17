import React from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
// import IndexItems from './../Item/ShowItems'

const UserHome = () => (
  // Main grid
  <Grid className="userhomemain">
    <Grid className="menugrid" item xs={3}>
      <p>Menu Grid</p>
      <Button variant="contained" href='/#/items'>View Items</Button>
    </Grid>
    <Grid className="userhomegrid" item xs={9}>
      <p>User Main Grid</p>
    </Grid>
  </Grid>
)

export default UserHome
