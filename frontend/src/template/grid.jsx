


import React, {Component} from 'react'


export default class Grid extends Component {
  toCssClasses(number) {
    const options = number.split(' ')
    let classes = ''

    if(!!options[0]) classes += `col-xs-${options[0]}`
    if(!!options[1]) classes += ` col-sm-${options[1]}`
    if(!!options[2]) classes += ` col-md-${options[2]}`
    if(!!options[3]) classes += ` col-lg-${options[3]}`

    return classes;
  }

  render() {
    const classes = this.toCssClasses(this.props.cols || 12)
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    )
  }
}