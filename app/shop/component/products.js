import essential1 from '@/asset/elite-essentialz-1.jpg'
import essential2 from '@/asset/elite-essentialz-2.jpg'
import essential3 from '@/asset/elite-essentialz-3.jpg'
import Image from 'next/image'
export default function Products () {
    
return (
<>
<div className=" space-y-5 md:space-y-0 md:flex w-full gap-4">
    <div className="w-full  md:w-1/2">
        <Image src={essential2} className='rounded '/>
    </div>
    <div className=" w-full md:w-1/2 flex flex-col space-y-6">
    <div>
        <Image className='w-full h-[187px] object-cover rounded' src={essential3} width={400} height={400}/>
    </div>
    <div className=" hidden md:flex space-x-4">
    <Image className='rounded w-1/2 h-36' src={essential1} width={200} height={200}/>
    <Image className='rounded w-1/2 h-36' src={essential3} width={200} height={200}/>
    </div>
    </div>
</div>
</>
)
}