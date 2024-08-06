import React, { useState } from 'react'
import { client } from '@/lib/nominatim'
import { supabase } from '@/lib/supabase'
import { uuid } from 'uuidv4';



export default function RCreation() {
    const [creation, setCreation] = useState(false)
    const [restaurantName, setrestaurantName] = useState('')
    const [streetName, setStreetName] = useState('')
    const [streetNumber, setStreetNumber] = useState('')
    const [city, setCity] = useState('')
    const [postcode, setPostCode] = useState('')
    const [reviewerName, setRevieweName] = useState('Anonymous')
    const [reviewNumber, setReviewerNumber] = useState(1)
    const [review, setReview] = useState('No comment')
    const [errorMessage, setErrorMessage] = useState('')
    const [addressNumber, setAddressNumber] = useState('')
    const [errorPopUp, setErrorPopUp] = useState(false)
    const [successPopUp, setSuccessPopUp] = useState(false)
    const [geoLocation, setGeoLocation] = useState([])

    // const query = {
    //     q: '2515RH The haue Oranjelaan 38B',
    //     addressdetails: '1'
    //   };

    //   client.search(query).then((result) => console.log(result));



    // console.log('data:', {
    //     res: restaurantName,
    //     streetname: streetName,
    //     streetNuymber: streetNumber,
    //     postcode: postcode,
    //     ReviewName: reviewerName,
    //     review: review,
    //     reviewNumber: reviewNumber


    // })

    function formFilled() {
        if (restaurantName === '' || streetName === '' || streetNumber === '' || city === '' || postcode === '') {
            return true
        }

        return false
    }

    async function onCreation(e) {
        const query = {
            q: `${streetName} ${streetNumber}${addressNumber} ${postcode} ${city}`,
            addressdetails: '1'
        };

        const ID =  uuid()

        const result = await client.search(query).then((result) => { return result });

        // console.log(result[0])

        if (result.length === 0) {
            setErrorPopUp(true)
            setErrorMessage('This address does not exist, try another address')
        }


        else if (result.length > 0) {
            const { data, error } = await supabase.from('Restaurant')
            .upsert(
                { id: ID, 
                name:  restaurantName, 
                streetname: streetName, 
                streetnumber: streetNumber, 
                addressletter: addressNumber, 
                cityname: city, 
                postcode: postcode, 
                created_at: new Date().toISOString().toLocaleString('zh-TW'), 
                location: `POINT(${result[0].lat} ${result[0].lon})`, 
                total_rating: reviewNumber})
            .select()

            const {data : ReviewData, error : ReviewError} = await supabase.from('Review')
            .upsert({
                restaurant_id: ID,
                content: review,
                author: reviewerName,
                rating: reviewNumber,
                created_at: new Date().toISOString().toLocaleString('zh-TW'), 

            }).select()

            if(!ReviewError && !error){
                setSuccessPopUp(true)
                setCreation(false)
            }
        }


    }


    return (
        <>
            <button onClick={() => { setCreation(!creation) }} className='active:scale-95   rounded-2xl p-3 bg-slate-200 absolute  right-0 top-0 m-10'>
                <PlusSVG />
            </button>

            {errorPopUp && 
            <div className='popUp  flex flex-col  gap-5 font-bold items-center justify-center bg-white overflow-y-scroll shadow-xl  small-scrollbar z-40 left-[35%] top-[30%] p-6  w-[30%] small-scrolllbar h-[40%] absolute rounded-2xl'>
                <button className='absolute top-0 right-0 my-4 active:scale-95' onClick={() => { setErrorPopUp(false) }}>
                            <X />
                        </button>
                
                <p className='text-center hover:translate-y-[-2px] transition-all duration-700'>{errorMessage}</p>
                <BadSVG/>

            </div>
            }


{successPopUp && 
            <div className='popUp  flex flex-col  gap-5 font-bold items-center justify-center bg-white overflow-y-scroll shadow-xl  small-scrollbar z-40 left-[35%] top-[30%] p-6  w-[30%] small-scrolllbar h-[40%] absolute rounded-2xl'>
                <button className='absolute top-0 right-0 my-4 active:scale-95' onClick={() => {setSuccessPopUp(false)}}>
                            <X />
                        </button>
                
                <p className='text-center hover:translate-y-[-2px] transition-all duration-700'>The restaurant has been added successfully</p>
                    <GoodSVG/>
            </div>
            }

{successPopUp && <div onClick={() => {setSuccessPopUp(false); setErrorPopUp(false); setErrorMessage('') }} className='absolute bg-slate-300 h-screen w-full left-0 opacity-20 z-30 top-0'></div>}

            {creation && (
                <>


                    <div className='popUp bg-white overflow-y-scroll shadow-xl  small-scrollbar z-20 left-1/4 top-[15%] p-6  w-[50%] small-scrolllbar h-[75%] absolute rounded-2xl'>
                        <button className='absolute right-0 m-7 active:scale-95' onClick={() => { setCreation(false) }}>
                            <X />
                        </button>

                        <div className='font-bold text-4xl mt-7 flex flex-wrap justify-between'>{`Add a new restaurant 🧑‍🍳`}</div>


                        <form className='flex flex-col gap-3 mt-5'>
                            <h2 className='text-[30px] mb- font-bold'>Restaurant information</h2>


                            <div className='w-full'>
                                <label className='font-semibold text-lg'>Restaurant name</label>
                                <input required={true} placeholder='Burgers and Shake' className='w-full font-medium flex justify-center items-center p-3 bg-slate-200 rounded-xl' type='text' onChange={(e) => { setrestaurantName(e.target.value) }} />
                            </div>

                            <div className='w-full'>
                                <label className='font-semibold text-lg'>Street name</label>
                                <input placeholder='Bierstraat' className='w-full font-medium flex justify-center items-center p-3 required={true} bg-slate-200 rounded-xl' type='text' onChange={(e) => { setStreetName(e.target.value) }} />
                            </div>

                            <div className='flex gap-2'>

                                <div className='w-full'>
                                    <label className='font-semibold text-lg'>Street number</label>
                                    <input className='w-full font-bold flex justify-center items-center p-3 bg-slate-200 rounded-xl' required={true} placeholder='33' type='number'
                                        onChange={(e) => { setStreetNumber(e.target.value) }}
                                    />
                                </div>

                                <div className='w-full'>
                                    <label className='font-semibold text-lg'>Number letter</label>
                                    <input placeholder='B' className='w-full font-medium flex justify-center items-center p-3 required={true} bg-slate-200 rounded-xl' type='text' onChange={(e) => { setAddressNumber(e.target.value) }} />
                                </div>

                            </div>

                            <div className='flex gap-2'>
                                <div className='w-full'>
                                    <label className='font-semibold text-lg'>City name</label>
                                    <input placeholder='New York City' className='w-full font-medium flex justify-center items-center p-3 required={true} bg-slate-200 rounded-xl' type='text' onChange={(e) => { setCity(e.target.value) }} />
                                </div>

                                <div className='w-full'>
                                    <label className='font-semibold text-lg'>Postcode</label>
                                    <input className='w-full font-bold flex justify-center items-center p-3 bg-slate-200 rounded-xl' required={true} placeholder='0000 AA' type='text'
                                        onChange={(e) => { setPostCode(e.target.value) }} />
                                </div>
                            </div>



                            <h2 className='text-[30px] mt-3 font-bold'>Review</h2>


                            <div className='flex gap-2'>
                                <div className='w-full'>
                                    <label className='font-semibold text-lg'>Reviewer name</label>
                                    <input placeholder='Anonymous' className='w-full font-medium flex justify-center items-center p-3 bg-slate-200 rounded-xl' type='text'
                                        onChange={(e) => { setRevieweName(e.target.value) }} />
                                </div>

                                <div className='w-full'>
                                    <label className='font-semibold text-lg'>Rating number</label>
                                    <input className='w-full font-bold flex justify-center items-center p-3 bg-slate-200 rounded-xl' required={true} placeholder='1 to 5' max={5} min={1} type='number' onChange={(e) => { setReviewerNumber(e.target.value) }} />
                                </div>
                            </div>


                            <div className='w-full'>
                                <label className='font-semibold text-lg'>Review</label>
                                <textarea className='w-full h-[200px] font-bold flex justify-center items-center p-3 bg-slate-200 rounded-xl' type='text'
                                    onChange={(e) => { setReview(e.target.value) }} />
                            </div>

                            <button disabled={formFilled()} type='button' className={`w-full mt-4 font-semibold text-lg flex justify-center items-center p-3 ${formFilled() === true ? 'bg-slate-100' : 'bg-slate-200'} rounded-xl active:scale-95 transition-all `} onClick={(e) => { onCreation(e) }}> Post</button>

                        </form>

                    </div>

                    <div onClick={() => { setCreation(false) }} className='absolute bg-slate-300 h-screen w-full left-0 opacity-20 z-10 top-0'></div>
                    {errorPopUp && <div onClick={() => {setSuccessPopUp(false); setErrorPopUp(false); setErrorMessage('') }} className='absolute bg-slate-300 h-screen w-full left-0 opacity-20 z-30 top-0'></div>}


                </>
            )}
        </>
    )
}

const PlusSVG = () => {
    return (
        <>

            <svg xmlns="http://www.w3.org/2000/svg" fill='#A8CF84' className='w-[30px]' viewBox="0 0 256 256"><path fill="currentColor" d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12" /></svg>
        </>
    )
}

const X = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-7' viewBox="0 0 12 12"><path fill="currentColor" d="M2.22 2.22a.75.75 0 0 1 1.06 0L6 4.939L8.72 2.22a.749.749 0 1 1 1.06 1.06L7.061 6L9.78 8.72a.749.749 0 1 1-1.06 1.06L6 7.061L3.28 9.78a.749.749 0 1 1-1.06-1.06L4.939 6L2.22 3.28a.75.75 0 0 1 0-1.06" /></svg>
    )
}

const BadSVG = () => {
    return <svg className='w-[140px]' viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="88.5" cy="88.5" r="86.5" stroke="#C61349" strokeWidth="4" strokeLinejoin="round" />
        <path d="M92.7726 88L102.012 78.761C103.329 77.4431 103.329 75.3064 102.012 73.9884C100.694 72.6705 98.557 72.6705 97.239 73.9884L88 83.2274L78.761 73.9884C77.4431 72.6705 75.3064 72.6705 73.9884 73.9884C72.6705 75.3064 72.6705 77.4431 73.9884 78.761L83.2274 88L73.9884 97.239C72.6705 98.5569 72.6705 100.694 73.9884 102.012C74.6474 102.67 75.5111 103 76.3747 103C77.2384 103 78.1021 102.671 78.761 102.012L88 92.7726L97.239 102.012C97.8979 102.67 98.7616 103 99.6252 103C100.489 103 101.353 102.671 102.011 102.012C103.329 100.694 103.329 98.5569 102.011 97.239L92.7726 88Z" fill="#C61349" />
    </svg>
}

const GoodSVG = () => {
    return <svg width="177" height="177" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="88.5" cy="88.5" r="86.5" stroke="#A9B121" strokeWidth="4" strokeLinejoin="round" />
        <path d="M83.3555 101.682L71.9155 90.1758C71.2282 89.4845 71.2282 88.3637 71.9155 87.6724L74.4045 85.1691C75.0917 84.4778 76.2062 84.4778 76.8935 85.1691L84.6 92.9199L101.107 76.3185C101.794 75.6272 102.908 75.6272 103.596 76.3185L106.085 78.8218C106.772 79.5131 106.772 80.6338 106.085 81.3252L85.8445 101.682C85.1572 102.373 84.0428 102.373 83.3555 101.682Z" fill="#A9B121" />
    </svg>
}

