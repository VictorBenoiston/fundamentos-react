import React from "react"
import Child from './Child'

export default props => 
  <div>
    <Child {...props}>Mariana</Child>
    <Child surename={props.surename}>Eduarda</Child>
    <Child surename='Benoiston'>Pedro</Child>
  </div>
