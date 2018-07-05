

import React from 'react'
import Grid from './grid'
import IconButton from './iconButton'
import If from './If'

export default props => (
  <div role="form" className="todoForm">
    <Grid cols='12 9 10'>
      <input placeholder="Adicione uma tarefa" 
        id="description" className="form-control"/>
    </Grid>

    <Grid cols='12 3 2'>
      <IconButton style='primary' icon='plus' />
    </Grid>
  </div>
)