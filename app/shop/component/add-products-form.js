"use client";

import Label from "@/components/label";
import Input from "@/components/input";
import Select from "@/components/select";
import { categories } from "@/lib/const";
import Button from "@/components/button";
import createProduct from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function AddProductsForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: "onTouched"
    });

    const router = useRouter();
    const onSubmit = async (data) => {
        const formData = new FormData();

        // Append the form data fields to FormData
        formData.append("productName", data.productName);
        formData.append("category", data.category);
        formData.append("date", data.date);
        formData.append("quantity", data.quantity);
        formData.append("description", data.description);
        formData.append("image", data.image_url[0]); 
        try {
            await createProduct(formData); // Send form data to server action
            router.push('/shop');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form className="space-y-8 mb-8" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-bold">Add Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                    <Label>Product Name</Label>
                    <Input {...register("productName", { required: "Product name is required" })} type="text" />
                    {errors.productName && <p className="text-red-500">{errors.productName.message}</p>}
                </div>

                <div className="space-y-3">
                    <Label>Select Category Type</Label>
                    <Select {...register("category", { required: "Category is required" })}>
                        <option value="">Select Product Category</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </Select>
                    {errors.category && <p className="text-red-500">{errors.category.message}</p>}
                </div>


                <div className="space-y-3">
                    <Label>Quantity</Label>
                    <Input {...register("quantity", { required: "Quantity is required", valueAsNumber: true })} type="number" />
                    {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
                </div>

                <div className="space-y-3 ">
                    <Label>Description</Label>
                    <Input {...register("description", { required: "Description is required" })} type="text" />
                    {errors.description && <p className="text-red-500">{errors.description.message}</p>}
                </div>
                <div className="space-y-3 col-span-2">
                    <Label>Product Image</Label>
                    <Input {...register("image_url", { required: "Product image is required" })} type="file" />
                    {errors.image && <p className="text-red-500">{errors.image.message}</p>}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
}
