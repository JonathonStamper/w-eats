import React, { useEffect, useState } from 'react'
import ReviewList from './ReviewList'
import MapRes from './Map/Map'
import { supabase } from '@/lib/supabase'

export default function RestaurantComponent({data, setSelected}) {

  const [reviewData, setReviewData] = useState([])

  async function getReviews(){
    const {data : reviews, error} = await supabase.from('Review')
    .select()
    .eq('restaurant_id', data.id)

    if(!error){
      setReviewData(reviews)
    }
  }





  useEffect(() =>{
    getReviews()

  supabase
  .channel('Review')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'Review' }, getReviews())
  .subscribe()
  },[])


  // console.log(reviewData)

  function averageCalc(array){
    let count = 0
    let total = array.length

    for(let i = 0; i < array.length; i++){
      count += array[i].reviewNumber
    }
    return (count / total) 
  }

  return (
    <>
    <div className='popUp bg-white shadow-xl z-20 left-1/4 top-[15%] overflow-y-scroll small-scrollbar flex flex-col gap-5  w-[50%] h-[75%] absolute rounded-2xl p-6'>
                <button className='absolute z-20 right-0 mx-7 active:scale-95' onClick={() => {setSelected(null)}}>
                    <X/>
                </button>
                <div className='font-bold text-4xl mt-12 flex flex-wrap justify-between'><h2 className=''>{data.name} </h2>{`${data.total_rating} ⭐`}</div>

                <div className='flex flex-wrap gap-2 text-lg'>
                  <div className=' h-[70px] gap-1 font-bold flex justify-center items-center p-4 bg-slate-200 rounded-2xl' >
                     Adress: 
                     
                     <p className='font-normal'>{data.streetname} {data.streetnumber}{data.addressletter}</p>
                  </div>

                  <div className=' h-[70px] gap-1 font-bold flex justify-center items-center p-4 bg-slate-200 rounded-2xl' >
                     Postcode: 
                     
                     <p className='font-normal'>{data.postcode}</p>
                  </div>

                  <div className=' h-[70px] gap-1 font-bold flex justify-center items-center p-4 bg-slate-200 rounded-2xl' >
                     City: 
                     
                     <p className='font-normal'>{data.cityname}</p>
                  </div>

                 
                </div>


                <MapRes/>


               <div className='relative mt-2'>
                <ReviewList data={reviewData} restaurant_id={data.id}/>

               </div>
            
            </div>

            <div onClick={() => {setSelected(null)}} className='absolute bg-slate-300 h-screen w-full left-0 opacity-20 z-10 top-0'></div>
    </>
  )
}


const X = () =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className='w-10' viewBox="0 0 12 12"><path fill="currentColor" d="M2.22 2.22a.75.75 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.75.75 0 0 1 0-1.06"/></svg>
    )
}
