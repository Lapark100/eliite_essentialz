import Skeleton from "@/components/skeleton";

export default function ProductsFallback() {
    return (


        <div className=" space-y-5 md:space-y-0 md:flex w-full gap-4">
            <div className="w-full md:h-[400px] md:w-1/2">
                <Skeleton className="w-full h-full" />
            </div>
            <div className=" w-full md:h-[500px] md:w-1/2 flex flex-col space-y-6">
                <div className="h-[175px]">
                    <Skeleton className="w-full md:h-full" />
                </div>
                <div className=" hidden md:flex space-x-4 md:h-[200px]">
                    <Skeleton className="w-full h-full" />
                    <Skeleton className="w-full h-full" />
                </div>
            </div>
        </div>

    )
}