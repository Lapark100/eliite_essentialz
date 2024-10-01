export default function Category({categories,filterItems}) {
    return (
        
        <div className="flex space-x-2">
        {categories.map((category, index) => {
          return <button className=" w-16 h-10 rounded-3xl px-3 bg-white/40 hover:bg-white hover:text-black hover:font-semibold " type="button" key={index} onClick={()=> {
              filterItems(category)
          }}  >{category}</button>
        })}
      </div>

    )
}

