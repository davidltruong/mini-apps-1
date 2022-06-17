import React from "react";
import Square from "./Square.jsx";

const Board = (props) => (
  <table border="1px solid black">
          <tbody>
            <tr>
              <Square click={props.click} coord={'0-0'}/>
              <Square click={props.click} coord={'0-1'}/>
              <Square click={props.click} coord={'0-2'}/>
              <Square click={props.click} coord={'0-3'}/>
              <Square click={props.click} coord={'0-4'}/>
              <Square click={props.click} coord={'0-5'}/>
              <Square click={props.click} coord={'0-6'}/>
            </tr>
            <tr>
              <Square click={props.click} coord={'1-0'}/>
              <Square click={props.click} coord={'1-1'}/>
              <Square click={props.click} coord={'1-2'}/>
              <Square click={props.click} coord={'1-3'}/>
              <Square click={props.click} coord={'1-4'}/>
              <Square click={props.click} coord={'1-5'}/>
              <Square click={props.click} coord={'1-6'}/>
            </tr>
            <tr>
              <Square click={props.click} coord={'2-0'}/>
              <Square click={props.click} coord={'2-1'}/>
              <Square click={props.click} coord={'2-2'}/>
              <Square click={props.click} coord={'2-3'}/>
              <Square click={props.click} coord={'2-4'}/>
              <Square click={props.click} coord={'2-5'}/>
              <Square click={props.click} coord={'2-6'}/>
            </tr>
            <tr>
              <Square click={props.click} coord={'3-0'}/>
              <Square click={props.click} coord={'3-1'}/>
              <Square click={props.click} coord={'3-2'}/>
              <Square click={props.click} coord={'3-3'}/>
              <Square click={props.click} coord={'3-4'}/>
              <Square click={props.click} coord={'3-5'}/>
              <Square click={props.click} coord={'3-6'}/>
            </tr>
            <tr>
              <Square click={props.click} coord={'4-0'}/>
              <Square click={props.click} coord={'4-1'}/>
              <Square click={props.click} coord={'4-2'}/>
              <Square click={props.click} coord={'4-3'}/>
              <Square click={props.click} coord={'4-4'}/>
              <Square click={props.click} coord={'4-5'}/>
              <Square click={props.click} coord={'4-6'}/>
            </tr>
            <tr>
              <Square click={props.click} coord={'5-0'}/>
              <Square click={props.click} coord={'5-1'}/>
              <Square click={props.click} coord={'5-2'}/>
              <Square click={props.click} coord={'5-3'}/>
              <Square click={props.click} coord={'5-4'}/>
              <Square click={props.click} coord={'5-5'}/>
              <Square click={props.click} coord={'5-6'}/>
            </tr>
          </tbody>
        </table>
)


export default Board