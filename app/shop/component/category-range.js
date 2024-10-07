import Select from "@/components/select"


export default function CategoryRangeSelect (props) {
return <Select {...props}>
<option value="all"> All </option>
<option value="Face"> Face </option>
<option value="Soap"> Soap </option>
<option value="Mask"> Mask </option>
</Select>
}