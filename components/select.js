import { forwardRef } from "react"

export default forwardRef (function Select(props , ref) {
    return <select {...props} ref={ref} className="w-full rounded-md shadow-sm border border-gray-300 bg-gray-950 py-2 px-2" ></select>
})
