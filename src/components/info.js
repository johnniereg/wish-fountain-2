import * as React from "react"
import { useState } from "react"

import "../styles/components/info.scss"

import icon from "../images/question-mark.png"
import popup from "../images/pop-up.png"

const Info = () => {
  const [panelVisible, setPanelVisible] = useState(false)

  const toggleVisibility = val => {
    setPanelVisible(val)
  }

  return (
    <div className="info">
      <div className={`info__icon ${panelVisible ? "hidden" : "visible"}`}>
        <button
          onClick={() => {
            toggleVisibility(true)
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <img
            alt="Question Mark icon to open info panel"
            className="icon"
            draggable={false}
            src={icon}
            style={{ marginBottom: 0, maxHeight: "75px" }}
          ></img>
        </button>
      </div>
      <div className={`info__panel ${panelVisible ? "visible" : "hidden"}`}>
        <div className="info__controls">
          <button
            onClick={() => {
              toggleVisibility(false)
            }}
          >
            <span>X</span>
          </button>
        </div>
        <div className={`info__wrapper `}>
          <h1 className="info__title">Info About this Piece</h1>
          <p className="info__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            velit sit amet massa bibendum consequat vitae id lacus. Suspendisse
            sit amet velit vulputate est aliquam malesuada. Praesent vel
            consectetur ligula. Phasellus sed massa orci. Donec dui magna,
            fermentum a lacus non, laoreet efficitur orci. Sed lobortis purus
            sed ligula sodales, ut pretium diam eleifend. Morbi imperdiet
            lobortis elit, sit amet bibendum sem mattis id. Curabitur in metus
            euismod, dignissim nunc quis, iaculis sem. Aliquam sollicitudin
            massa nisi, at pharetra sem ultricies eget. Vestibulum interdum
            vitae nulla eu aliquet. Sed maximus urna sit amet sem commodo, ut
            accumsan elit commodo. Etiam eleifend pellentesque massa, et
            venenatis quam euismod nec. Aenean ac ullamcorper nunc. Nunc lacinia
            placerat turpis, aliquam lobortis augue gravida ac. Vestibulum porta
            ante volutpat sapien dignissim pulvinar. Donec et metus neque. Sed
            volutpat egestas massa, a condimentum dolor. In ligula magna,
            facilisis vel enim eget, semper mattis elit. Vivamus accumsan
            iaculis convallis. Maecenas et ex ac odio lobortis dapibus nec a
            erat. Cras ultricies viverra mi. Curabitur convallis luctus ante non
            semper. Aenean vel arcu ut ligula efficitur aliquet id at tortor.
            Nulla ac turpis neque. In lacinia urna convallis pretium
            consectetur. Fusce rutrum arcu massa, quis facilisis massa tincidunt
            vitae. Praesent tristique ullamcorper lectus, a ornare libero
            ullamcorper vitae. Nullam consectetur justo ut est placerat, id
            viverra eros placerat. Mauris ac nisl viverra, mattis purus eu,
            sagittis sapien. Duis aliquet eros ac ligula varius lacinia. Sed
            lobortis est lacinia libero aliquam finibus. Etiam sollicitudin
            felis ac lacus elementum lacinia. Pellentesque ac dignissim nunc.
            Sed sit amet viverra metus. Ut vitae massa luctus, condimentum leo
            at, vehicula ligula. Maecenas a gravida lectus. Mauris vestibulum,
            est non vehicula gravida, libero nulla semper mi, non tincidunt
            lorem diam vitae lorem. Nam non dui ut turpis aliquet malesuada ac
            eget turpis. Etiam at cursus dolor, sed sollicitudin purus.
            Phasellus neque turpis, eleifend eget tincidunt sed, rhoncus
            porttitor urna. Etiam eu turpis purus. Morbi tristique vehicula
            lorem, gravida accumsan risus volutpat et. Nullam dictum nec ante in
            scelerisque. Nulla facilisi. Integer auctor porttitor elit, a
            ultrices lectus faucibus non. Donec sollicitudin nunc ac magna
            volutpat condimentum. Mauris ac mauris nec diam condimentum
            venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Etiam pretium elit sit amet velit
            rutrum vehicula. Morbi suscipit tortor vitae sapien elementum, sed
            laoreet nisl molestie. Curabitur ac sollicitudin ex. Ut blandit nisl
            elit, id feugiat enim malesuada vitae. Aenean metus dolor, lacinia a
            sollicitudin at, eleifend vehicula enim. Maecenas venenatis neque id
            ante blandit pellentesque. Nulla ultricies ipsum neque, malesuada
            placerat tellus gravida at. Mauris dictum condimentum interdum.
            Nulla ac ligula eros. In rhoncus velit a dapibus fringilla. Morbi ac
            aliquet ante, a porta enim. Donec maximus accumsan tellus, at
            convallis erat molestie sed. Donec felis massa, venenatis nec arcu
            vel, pulvinar rutrum ligula. Aliquam eu ornare erat. Vestibulum
            pretium pharetra lectus sit amet varius.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Info
