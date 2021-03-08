import React from 'react'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const Landing = () => (
  // Main grid
  <Grid className="maingrid" direction="row" justify="stretch" alignItems="stretch" container={true} spacing={3}>
    {/* Title Grid */}
    <Grid className="titlegrid" item xs={12}>
      <h1>Welcome to PantryCheck</h1>
      <h2>Never guess if you have groceries or supplies again!</h2>
    </Grid>
    {/* Sign In Grid */}
    <Grid className="sigrid" item xs={6}>
      <Card className="sicard" variant="outlined">
        <h4>Sign in card</h4>
        <CardActions>
          <Button variant="contained">
            Sign In
          </Button>
        </CardActions>
      </Card>
    </Grid>
    {/* Sign Up Grid */}
    <Grid className="sugrid" item xs={6}>
      <Card className="sucard" variant="outlined">
        <h4>Sign up card</h4>
        <CardActions>
          <Button variant="contained">
          Sign Up
          </Button>
        </CardActions>
      </Card>
    </Grid>
    {/* Footer Grid */}
    <Grid className="footgrid" item xs={12}>
      <p>Footer</p>
    </Grid>
  </Grid>
)

export default Landing
