import React, { PureComponent } from 'react'

class classItem extends PureComponent {
  render() {
    return (
      <div>
      <h1>{ this.props.content }</h1>
      </div>
    )
  }
}
export default classItem
