"use server"

import { createClient } from "./supabase/server";

export default async function createProduct(formData) {
    const productName = formData.get("productName");
    const category = formData.get("category");
    const quantity = formData.get("quantity");
    const description = formData.get("description");
    const imageFile = formData.get("image_url");

    const supabase = createClient()

    let imageUrl = ""; // Declare imageUrl

    // Handle image upload if a file is provided
    if (imageFile) {
        const { data, error } = await supabase.storage
            .from("product-image") // Ensure the bucket name is correct
            .upload(`images/${Date.now()}_${imageFile.name}`, imageFile);

        if (error) {
            console.error("Image upload failed:", error);
            throw error;
        }

        // Generate the public URL for the uploaded image
        const { data: publicUrlData } = supabase
            .storage
            .from("product-image")
            .getPublicUrl(data.path);

        imageUrl = publicUrlData.publicUrl; // Use the public URL for the image
        console.log("Image URL:", imageUrl);
    }

    const {data: product, error: insertError} = await supabase
    .from("products")
    .insert([
        {
            productName,
            category,
            description,
            quantity,
            image_url: imageUrl
        }
    ])

    if (insertError) {
        console.error("Product creation failed:", insertError);
        throw insertError;
    }

    return product
}