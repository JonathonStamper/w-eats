import React, { useState } from 'react'
import Review from './Review'
import { supabase } from '@/lib/supabase'

export default function ReviewList({data, restaurant_id}) {
    const [clicked, setClicked] = useState(false)
    const [reviewData, setReviewData] = useState(null)
    const [creation, setCreation] = useState(false)
    const [successPopUp, setSuccessPopUp] = useState(false)
    const [author, setAuthor] = useState('Anonymous')
    const [rating, setRating] = useState(1)
    const [reviewContent, setReviewContent] = useState('')

    function formIsFilled(){
        if(author === '' || rating === '' || reviewContent === ''){
            return true
        }

        else{
            return false
        }
    }

 function averageCalc(array){
            let count = 0
            let total = array.length + 1
        
            for(let i = 0; i < array.length; i++){
              count += array[i].rating
            }
            return ((count + +rating) / total) 
          } 


    async function reviewCreation(){

        // console.log(averageCalc(data))

        const {data: reviewData, error: reviewError} = await supabase.from('Review')
        .insert({author: author, content: reviewContent, rating: rating, restaurant_id: restaurant_id, created_at: new Date().toISOString().toLocaleString('zh-TW')})

        const TotalRating = data.length

        const {data: RestaurantData, error: RestaurantError} = await supabase.from('Restaurant')
        .update({total_rating: averageCalc(data)})
        .eq('id', restaurant_id)


        if(!reviewError && !RestaurantError){
            setSuccessPopUp(true)
            setCreation(false)
        }

        else{
            console.log(reviewError, RestaurantError)
        }
    } 



  return (<>
   {successPopUp && <div onClick={() => {setSuccessPopUp(false);  }} className='absolute bg-slate-300 h-screen w-full left-0 opacity-20 z-30 top-0'></div>}

        
    {successPopUp && 
            <div className='popUp  flex flex-col  gap-5 font-bold items-center justify-end bg-white overflow-y-scroll shadow-xl  small-scrollbar z-40 left-[25%] top-[30%] p-6  w-[50%] small-scrolllbar h-[90%] absolute rounded-2xl'>
                <button className='absolute top-0 right-0 my-4 active:scale-95' onClick={() => {setSuccessPopUp(false)}}>
                            <X />
                        </button>
                
                <p className='text-center hover:translate-y-[-2px] transition-all duration-700'>The review has been added successfully</p>
                    <GoodSVG/>
            </div>
            }
    <div className=' relative w-full h-full  overflow-hidden bg-slate-100 p-5 rounded-2xl'>
        <div className='flex justify-between items-center'><h2 className='text-[30px] mb-4 font-bold'>Reviews</h2> <button onClick={() =>{setCreation(!creation) }} className='active:scale-95  rounded-2xl p-3 bg-slate-200 '>
    <PlusSVG/>
    </button></div>

   
       
        <div className='p-  overflow-hidden relative'>
 {(creation) && <div className='popUp w-full mt-3  bg-white h-full shadow-xl rounded-xl z-30 p-7'>  
                <button className='absolute right-0 mx-4 active:scale-95' onClick={() => {setCreation(!creation) }}>
                    <X/>
                </button>
                
                <form className='flex flex-col gap-3 mt-5'>

                <div className='flex gap-2'>
                <div className='w-full'>
                    <label className='font-semibold text-lg'>Name</label>
                    <input onChange={(e) => setAuthor(e.target.value)} placeholder='Anynomous' className='w-full font-medium flex justify-center items-center p-3 bg-slate-200 rounded-xl' type='text'/> 
                </div>

                <div className='w-full'>
                    <label className='font-semibold text-lg'>Rating number</label>
                    <input onChange={(e) => setRating(e.target.value)} className='w-full font-bold flex justify-center items-center p-3 bg-slate-200 rounded-xl' required={true} placeholder='1 to 5' max={5} min={1} type='number'/> 
                </div>
                </div>


                <div className='w-full'>
                    <label className='font-semibold text-lg'>Review</label>
                    <textarea onChange={(e) => setReviewContent(e.target.value)} className='w-full h-[200px] font-bold flex justify-center items-center p-3 bg-slate-200 rounded-xl' placeholder='Comment' type='text'/> 
                </div>

                
                {/* <div className='w-full'>
                    <label className='font-semibold text-lg'>Rating number</label>
                    <input className=' font-bold flex justify-center items-center p-3 bg-slate-200 rounded-xl' type='number'/> 
                    </div> */}

                <button type='button' disabled={formIsFilled()} className={`${formIsFilled() === true ? 'bg-slate-100' : 'bg-slate-200'} font-semibold text-lg flex justify-center items-center p-3 rounded-xl active:scale-95 transition-all `} onClick={() =>{reviewCreation(); }}> Post</button>

                </form>


               
            </div>}


        {data.length != 0 ? 
        (data.map((item, index) => (
            <>
             <Review item={item}/>
            </>
        ))
        
        )
        : <div className='flex justify-center '>{`There aren't any reviews yet`}</div>}
      
        </div>
    </div>
        </>
  )
}

const X = () =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className='w-8' viewBox="0 0 12 12"><path fill="currentColor" d="M2.22 2.22a.75.75 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.75.75 0 0 1 0-1.06"/></svg>
    )
}


const PlusSVG = () =>{
    return(
        <>
  
<svg xmlns="http://www.w3.org/2000/svg" fill='#A8CF84' className='w-[30px]' viewBox="0 0 256 256"><path fill="currentColor" d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12"/></svg>
        </>
    )
}

const GoodSVG = () => {
    return <svg width="177" height="177" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="88.5" cy="88.5" r="86.5" stroke="#A9B121" strokeWidth="4" strokeLinejoin="round" />
        <path d="M83.3555 101.682L71.9155 90.1758C71.2282 89.4845 71.2282 88.3637 71.9155 87.6724L74.4045 85.1691C75.0917 84.4778 76.2062 84.4778 76.8935 85.1691L84.6 92.9199L101.107 76.3185C101.794 75.6272 102.908 75.6272 103.596 76.3185L106.085 78.8218C106.772 79.5131 106.772 80.6338 106.085 81.3252L85.8445 101.682C85.1572 102.373 84.0428 102.373 83.3555 101.682Z" fill="#A9B121" />
    </svg>
}

