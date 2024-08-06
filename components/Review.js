import React, { useState } from 'react'

export default function Review({item}) {

    const [clicked, setClicked] = useState(false)
    const date =  new Date(item.created_at)
    
    

  return (
    <div  className='py-5 border-b-4 border-0' >

    <div className='flex justify-between '>
    <h3 className='font-semibold text-lg'>{item.author}</h3>
            <p>{`${date.getDate() <10 ? `0${date.getDate()}` : `${date.getDate()}`}-${date.getMonth() < 10 ? `0${date.getMonth()}`:`${date.getMonth()}`}-${date.getFullYear()}`}</p>
        </div>

    <div className='flex justify-between '>
        <p className={`${clicked ? '' :' text-nowrap text-ellipsis'} overflow-hidden w-[80%]`}>{item.content}</p>
        <p className='font-bold'>{item.rating} </p>
        
    </div>
            <button className='font-bold hover:opacity-70 mt-2' onClick={()=>{setClicked(!clicked)}}>{`${!clicked ? 'read more': 'read less'}`}</button>
</div>
  )
}
