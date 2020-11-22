import React, { useState } from 'react'
import tw from 'twin.macro'

function SimpleToggle() {
  const [isOn, setIsOn] = useState(false)
  return (
    <span
      role="checkbox"
      aria-checked={isOn}
      tabIndex="0"
      onClick={() => setIsOn(!isOn)}
      css=
      {[isOn ? tw`bg-indigo-600` : tw`bg-gray-200`, tw`relative inline-block flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline`]}
    >
      <span
        aria-hidden="true"
        css={[isOn ? tw`translate-x-5` : tw`translate-x-0`, tw`inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200`]}
      ></span>
    </span>
  )
}
export default SimpleToggle