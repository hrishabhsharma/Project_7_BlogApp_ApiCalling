import React, { useEffect, useState } from 'react'
import '../css/CardFooter.css'
import user from '../assets/Mask Group 16.png'
import {ShuffleCardsFooter} from './HelpingFunction'
import { Link } from 'react-router-dom'
import { ScrollToTop } from './HelpingFunction'
import axios from 'axios'

const CardFooter = ({Except_Card}) => {
    const [Api,setApi] = useState("")
    useEffect(()=>{
        axios(`https://hrishabh-blog-project.onrender.com/`)
        .then(res=>setApi(res.data))
        .catch(err=>console.log(err))
    },[Except_Card])
    const RandomCards = ShuffleCardsFooter(Except_Card)

    return (
        <div className='Card_Footer'>
            <div className='Footer_Cards_Title'>More From the Hrep</div>
            <div className='Footer_Cards'>
                {Api && Api.filter((data)=>data.id===RandomCards.find((j)=>j===data.id)).map((item,index)=>
                    <Link key={index} to={`/${item.genre}/${item.id}`} onClick={ScrollToTop}
                          className='Footer_Card' 
                    >
                        <img src={item.image} alt='not found'/>
                        <p className='Footer_Card_Heading'>{item.heading}</p>
                        <div className='Footer_Card_Author_Details'>
                            <img src={user} alt='not found'/>
                            <span>Written By<p>Hrishabh Sharma</p>{item.date}</span>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default CardFooter