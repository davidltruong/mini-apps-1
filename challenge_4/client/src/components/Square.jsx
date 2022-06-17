import React from "react";

const Square = (props) => (
  <td  className={props.coord} onClick={(e) => {props.click(e)}} width="100px" height="100px"></td>
)

export default Square