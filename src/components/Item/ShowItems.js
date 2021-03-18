import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Item from './Item'
import { Grid } from '@material-ui/core'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'

class IndexItems extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount () {
    const { user } = this.props
    axios({
      url: apiUrl + '/items/',
      method: 'get',
      headers: {
        'Authorization': `Token ${user.token}`
      } })
      .then(res => this.setState({ items: res.data.items }))
      .catch(console.error)
  }

  handleRemove (id, event) {
    const { user } = this.props
    axios.delete(`${apiUrl}/items/${id}/`, {
      headers: { 'Authorization': `Token ${user.token}` }
    })
      .then(res => {
        const items = this.state.items.filter(item => item.id !== id)
        this.setState({ items })
      })
  }

  render () {
    let itemsJsx
    const { items } = this.state
    if (items === null) {
      itemsJsx = 'Loading...'
    } else if (items.length === 0) {
      itemsJsx = 'No items to display.'
    } else {
      itemsJsx = this.state.items.map(item => (
        <TableBody key={item.id.toString()}>
          <TableRow>
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              type={item.type}
              quantity={item.quantity}
              description={item.description}
            />
            <Button variant="contained" size="small" onClick={(event) => this.handleRemove(item.id, event)}>Remove</Button>
          </TableRow>
        </TableBody>
      ))
    }

    return (
      <Grid className="itemdata1"
        container
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <h2 className="showitemstitle1">Your Items</h2>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell key="0">ID</TableCell>
              <TableCell key="1">Name</TableCell>
              <TableCell key="2">Type</TableCell>
              <TableCell key="3">Quantity</TableCell>
              <TableCell key="4">Description</TableCell>
            </TableRow>
          </TableHead>
          {itemsJsx}
        </Table>
      </Grid>
    )
  }
}

export default IndexItems
