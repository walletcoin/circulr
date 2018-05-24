import React from 'react'
import {Containers} from 'modules'
import UiContianers from 'LoopringUI/containers'
import ListAllTickers from './ListAllTickers'
function Modals(props) {
  return (
    <div>
      <Containers.Layers id="ListAllTickers">
        <UiContianers.Panels id="ListAllTickers" width="25vw">
          <ListAllTickers />
        </UiContianers.Panels>
      </Containers.Layers>
    </div>
  )
}
export default Modals
