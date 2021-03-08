import React, { Fragment } from 'react'
import TableCell from '@material-ui/core/TableCell'

const Item = ({ id, name, type, quantity, description }) => (
  <Fragment>
    <TableCell>{id}</TableCell>
    <TableCell>{name}</TableCell>
    <TableCell>{type}</TableCell>
    <TableCell>{quantity}</TableCell>
    <TableCell>{description}</TableCell>
  </Fragment>
)

export default Item
