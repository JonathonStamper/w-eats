import React, { useState } from 'react'
import RestaurantComponent from './RestaurantComponent'

export default function List({data}) {
    const [selected, setSelected] = useState(null)

    function averageCalc(array){
      let count = 0
      let total = array.length

      for(let i = 0; i < array.length; i++){
        count += array[i].reviewNumber
      }
      return (count / total) 
    }

  return (
    <section className='h-[100%] bg-[#2e432a bg-gray-700 xl:w-[30%] p-4 rounded-2xl overflow-y-scroll small-scrollbar'>
        <div className=''>

        </div>

        <div className='flex flex-col gap-4 small-scrollbar'>
        {data.map((item, index) =>(<>
            <div className=' click w-full fl h-24 border-2 rounded-2xl border-[#cccccc] bg-white flex p-4 items-center justify-between' onClick={() =>{ setSelected(index)}} key={index}>
                <p className='font-bold'>{item.name}</p>
                <div className=''>{(item.total_rating)}</div>
            </div>

            {selected === index && (<RestaurantComponent data={item} setSelected={setSelected}/>)}
        </>

        ))}
        </div>


        
    </section>

  )
}
