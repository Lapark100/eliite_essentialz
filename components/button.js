export default function Button (props) {

const variants = {
    default: 'bg-white text-black rounded-md hover:bg-gray-200 disabled:opacity-20 ',
    product: 'bg-black text-black rounded-md hover:bg-gray-200 disabled:opacity-20 '
}

const sizes = {
    xs: 'text-xs px-2 py-1',
    sm: 'text-sm px-3 py-1.5',
    base: 'text-base px-4 py-2',
    large: 'text-lg px-4 py-2'
}

return <button {...props} className={`${props.variant? variants[props.variants] : variants["default"]} ${props.sizes ? sizes[props.sizes] : sizes['base']}`}></button>
}