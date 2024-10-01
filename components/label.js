export default function Label (props) {
return (<label {...props} className={`text-gray-200 ${props.className}`}></label>)
}