import { forwardRef } from "react"

export default forwardRef(function Input (props, ref) {
    const styles = {
        'file': 'file:border-gray-300 rounded pl-2 file:bg-transparent file:text-sm file:font-medium disabled:opacity-50 file:text-gray-200',
        'default': 'w-full rounded-md shadow-sm border bg-gray-950 disabled:opacity-75 py-2 px-2'
    }    

    // throw new Error('reset')
    return (<input {...props} className={`${styles[props.type] ?? styles['default'] } ${props.className} `} ref={ref}></input>)
})


