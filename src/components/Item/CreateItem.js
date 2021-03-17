import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import ItemForm from './ItemForm'
import { Grid } from '@material-ui/core'

class CreateItem extends Component {
  constructor () {
    super()
    this.state = {
      item: {
        name: '',
        type: '',
        quantity: '',
        description: ''
      },
      created: false
    }
  }

  handleInputChange = (event) => {
    const updatedField = {
      [event.target.name]: event.target.value
    }
    this.setState(currState => {
      const newItem = { ...currState.item, ...updatedField }
      return { item: newItem }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user } = this.props
    axios({
      method: 'post',
      url: `${apiUrl}/items/`,
      headers: {
        'Authorization': `Token ${user.token}`
      },
      data: { item: this.state.item }
    })
      .then(() => this.setState({ created: true }))
      .catch(console.error)
  }

  render () {
    if (this.state.created) {
      return <Redirect to={`/items/${this.state.item._id}`} />
    }
    return (
      <Fragment>
        <Grid container
          direction="column"
          justify="center"
          alignItems="center">
          <h2>Add an Item</h2>
          <Grid item>
            <ItemForm
              item={this.state.item}
              handleSubmit={this.handleSubmit}
              handleInputChange={this.handleInputChange}
            />
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default CreateItem
