import React from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
// import IndexItems from './../Item/ShowItems'

const UserHome = () => (
  // Main grid
  <Grid className="userhomemain">
    {/* Menu Grid */}
    <Grid className="menugrid" item xs={3}>
      <h2>Menu Grid</h2>
      {/* Items Grid */}
      <Grid className="itemsubgrid" container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <h3>Items</h3>
        <Button variant="contained" href='/#/items'>View Items</Button>
        <Button variant="contained" href='/#/create-item'>Add Items</Button>
      </Grid>
      {/* Stores Grid */}
      <Grid className="storessubgrid" container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <h3>Stores</h3>
        <Button variant="contained">Add A Store</Button>
        <Button variant="contained">View Stores</Button>
      </Grid>
      {/* Recipes Grid */}
      <Grid className="recipesubgrid" container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <h3>Recipes</h3>
        <Button variant="contained">Add A Recipe</Button>
        <Button variant="contained">View Your Recipes</Button>
      </Grid>
    </Grid>
    {/* User Home */}
    <Grid className="userhomegrid" item xs={9}>
      <p>User Main Grid</p>
    </Grid>
  </Grid>
)

export default UserHome
