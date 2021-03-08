import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const ItemForm = ({ handleSubmit, handleInputChange, item }) => (
  <Grid container
    direction="column"
    justify="center"
    alignItems="center"
  >
    <form onSubmit={handleSubmit}>
      {/* "Item Name" */}
      <Grid item>
        <TextField className="inf"
          name="name"
          type="text"
          placeholder="Item Name"
          value={item.name}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      {/* "Item Type" */}
      <Grid item>
        <TextField className="itf"
          name="type"
          type="text"
          placeholder="Item Type"
          value={item.type}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      {/* "Item Quantity" */}
      <Grid item>
        <TextField className="iqf"
          name="quantity"
          type="text"
          placeholder="Item Quantity"
          value={item.quantity}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      {/* "Item Type" */}
      <Grid item>
        <TextField className="idf"
          name="description"
          type="text"
          placeholder="Item Description"
          value={item.type}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button variant="contained" type="submit" className="itembutton1">Submit</Button>
      </Grid>
    </form>
  </Grid>
)

export default ItemForm
