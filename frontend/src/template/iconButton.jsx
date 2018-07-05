
import React from 'react'
import If from './If'
export default props => (
  <If test={!props.hiden}>
    <button className={'btn btn-' + props.style}>
      <i className={'fa fa-' + props.icon}> </i>
    </button>
  </If>
)