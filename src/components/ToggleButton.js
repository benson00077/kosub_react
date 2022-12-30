import { useState } from 'react'

/**
 *
 * ref: tailwind Flowbite
 *
 */
function TogglerButton({ onClickCb, text }) {
  const [checked, setChecked] = useState(true)
  return (
    <label class="inline-flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        class="sr-only peer"
        checked={checked}
        onClick={onClickCb}
        onChange={(e) => {
          setChecked(!checked)
        }}
      />
      <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 select-none">{text}</span>
    </label>
  )
}

export default TogglerButton
