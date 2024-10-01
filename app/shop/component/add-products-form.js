import Label from "@/components/label"
import Input from "@/components/input"
import Select from "@/components/select"
import { categories } from "@/lib/const"

export default function AddProductsForm () {
return (
    <form className="space-y-8 mb-8">
        <h1 className="text-2xl font-bold">Add Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
                <Label className="">
                    Product Name
                </Label>
                <Input type="text" className=""/>
            </div>

            <div className="space-y-3">
                <Label className="">
                    Select Category Type
                </Label>
                <Select>
                    <option value="">Select Product Category</option>
                {categories.map( cat => <option key={cat}>{cat}</option>)}
                </Select>
            </div>
        </div>
    </form>
)
}