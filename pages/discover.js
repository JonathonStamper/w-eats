import List from '@/components/List'
import RCreation from '@/components/RCreation'
import { supabase } from '@/lib/supabase'
import React, { useEffect, useState } from 'react'
import { client } from '@/lib/nominatim';

export default function Discover() {
    const [resData, setResData] = useState([])
    
    async function fetchData(){
        const {data, error} = await supabase.from('Restaurant').select()

        if(!error){
            setResData(data)
        }
    }   
    
    useEffect(() =>{

        fetchData()

    }, [])

    // console.log(resData)

    const listData = [
        {
            name: 'Mc donalds Den Haag Centrum',
            rating: 4, 
            streetname: 'Centrum',
            streetnumber: 25,
            postcode: '2416 CH',
            location: '',
            reviews: [
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 3,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 5,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },{
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4.6,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                }
            ]
        },
        {
            name: 'Mc donalds Den Haag Centrum',
            rating: 4, 
            streetname: 'Centrum',
            streetnumber: 25,
            postcode: '2416 CH',
            location: '',
             reviews: [
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 5,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 5,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 5,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },{
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 5,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                }
            ]
        },
        {
            name: 'Mc donalds Den Haag Centrum',
            rating: 4, 
            streetname: 'Centrum',
            streetnumber: 25,
            postcode: '2416 CH',
            location: '',
            reviews: [
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 3,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 5,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },{
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4.6,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                }
            ]
        },
        {
            name: 'Mc donalds Den Haag Centrum',
            rating: 4, 
            streetname: 'Centrum',
            streetnumber: 25,
            postcode: '2416 CH',
            location: '',
               reviews: [
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 3,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 5,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },{
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4.6,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                }
            ]
        },
        {
            name: 'Mc donalds Den Haag Centrum',
            rating: 4, 
            streetname: 'Centrum',
            streetnumber: 25,
            postcode: '2416 CH',
            location: '',
        reviews: [
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 3,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 5,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },{
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4.6,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                }
            ]
        },
        {
            name: 'Mc donalds Den Haag Centrum',
            rating: 4, 
            streetname: 'Centrum',
            streetnumber: 25,
            postcode: '2416 CH',
            location: '',
               reviews: [
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 3,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 5,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },{
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4.6,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                }
            ]
        },
        {
            name: 'Mc donalds Den Haag Centrum',
            rating: 4, 
            streetname: 'Centrum',
            streetnumber: 25,
            postcode: '2416 CH',
            location: '',
          reviews: [
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 3,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 5,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },{
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4.6,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                }
            ]
        },
        {
            name: 'Mc donalds Den Haag Centrum',
            rating: 4, 
            streetname: 'Centrum',
            streetnumber: 25,
            postcode: '2416 CH',
            location: '',
              reviews: [
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 3,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },
                {
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 5,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                },{
                    review: 'Korum ipsum, ipsum lorumn, jhdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',
                    reviewNumber: 4.6,
                    publishedBy: 'Anonymous',
                    publishedDate: new Date() ,

                }
            ]
        }
    ]


    function getCords(){

    }

  return (
    <main className='h-screen relative flex items-center p-5'>
        <List data={resData}/>

        <RCreation/>
    </main>
  )
}


