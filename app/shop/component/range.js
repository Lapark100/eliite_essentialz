"use client"

import { usePathname, useSearchParams, useRouter } from "next/navigation"
import CategoryRangeSelect from "./category-range"

export default function Range() {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()

    const range = searchParams.get('range') ?? 'all'

    const handleChange = (e) => {
        const params = new URLSearchParams()
        params.set('range', e.target.value)
        replace(`${pathname}?${params.toString()}`)
    }
    return <CategoryRangeSelect value={range} onChange={handleChange} />
}