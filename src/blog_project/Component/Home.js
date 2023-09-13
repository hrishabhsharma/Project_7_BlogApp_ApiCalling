import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cards from './Cards'
import { Random_Number ,ScrollToTop } from './HelpingFunction'
import RightArrow from '../assets/arrow-1.svg'
import DownArrow from '../assets/arrow.svg'
import Advertise from '../assets/3573754.jpg'
import '../css/Home.css'


const Top_Thumbnails = Random_Number(3,1,100)
const The_Latest = Random_Number(3,1,100)
const Latest_Article = Random_Number(10,1,100)
const Top_Article = Random_Number(5,1,100)
const Latest_Stories = Random_Number(3,1,100)
const Bottom_Thumbnails = Random_Number(1,1,100)

const HomeComp = () => {
  const [Api,setApi] = useState([])
  useEffect(()=>{
    axios(`https://hrishabh-blog-project.onrender.com/`)
    .then(res=>setApi(res.data))
    .catch(err=>console.log(err))
  },[])
  const [LoadMore , setLoadMore] = useState(false)
  const ToggleLoadMore = ()=>{
    setLoadMore(!LoadMore);
    if(LoadMore){
      ScrollToTop();
    }
  }
  return (
    <>
    <div className='Home'>
      <div className='Thumbnails' >
        {Api && Api.filter((data)=>data.id===Top_Thumbnails.find((j)=>j===data.id)).map((item,index)=>
            <Link key={index} to={`/${item.genre}/${item.id}`} onClick={ScrollToTop}
                  style={{backgroundImage:`url(${item.image})`}}
                  className={`Thumb Thumb${index+1}`} 
            >
              <div className='Text_Box'>
                <p className='head'>{item.heading}</p>
                <p className='foot'><span>{item.genre}</span> / {item.date}</p>
              </div>
            </Link>
        )}
      </div>
      <div>
        <h1 className='Latest_Head'>The Latest</h1>
        <div className='Latest'>
          {Api && Api.filter((data)=>data.id===The_Latest.find((j)=>j===data.id)).map((item,index)=>
              <Link key={index} to={`/${item.genre}/${item.id}`} onClick={ScrollToTop}
                    className='Latest_Card' 
              >
                <img src={item.image} alt='not found'/>
                <div className='Latest_Card_Overview'>
                    <p className='Latest_Card_Head'>{item.heading}</p>
                    <p className='Latest_Card_Subhead'>{item.subheading}</p>
                    <p className='Latest_Card_Foot'><span>{item.genre}</span> / {item.date}</p>
                </div>
              </Link>
          )}
        </div>
      </div>
      <div className='Latest_Article'>
          <div className='section_1'>
            <h1 className='Latest_Article_Head'>Latest Articles</h1>
            {Api && Api.filter((data)=>data.id===Latest_Article.slice(0,5).find((j)=>j===data.id))
                .map((item,index)=>
                  <Cards key={index} type='main' id={item.id}
                         image={item.image} date={item.date}
                         heading={item.heading}
                         subheading={item.subheading}
                         genre={item.genre}
                  />
            )}
            {Api && Api.filter((data)=>data.id===Latest_Article.slice(5,10).find((j)=>j===data.id))
                .map((item,index)=>
                  <Cards key={index} type='main' id={item.id}
                         image={item.image} date={item.date}
                         heading={item.heading}
                         subheading={item.subheading}
                         genre={item.genre}
                         Toggle={LoadMore ? '' : 'Hide'}
                  />
            )}
            <div className='Toggle_Button' onClick={ToggleLoadMore}>
              <img src={LoadMore ? RightArrow : DownArrow} alt='icon not found'/>
              <span>{LoadMore ? 'LOAD LESS' : 'LOAD MORE'}</span>
            </div>
            {Api && Api.filter((data)=>data.id===Bottom_Thumbnails.find((j)=>j===data.id)).map((item,index)=>
                <Link key={index} to={`/${item.genre}/${item.id}`} onClick={ScrollToTop}
                      style={{backgroundImage:`url(${item.image})`}}
                      className={`Bottom_Thumb`}    
                >
                  <div className='Text_Box'>
                    <p className='head'>{item.heading}</p>
                    <p className='foot'><span>{item.genre}</span> / {item.date}</p>
                  </div>
                </Link>
            )}
          </div>
          <div className='section_2'>
            <img className='Advertisement' src={Advertise} alt='add not found'/>
            <h1 className='Top_Posts_Head'>Top Posts</h1>
            {Api && Api.filter((data)=>data.id===Top_Article.find((j)=>j===data.id)).map((item,index)=>
                <Cards key={index} type='top' id={item.id}
                       image={item.image} date={item.date}
                       heading={item.heading}
                       count={index+1}
                       genre={item.genre}
                />
            )}
          </div>
      </div>
      <h1 className='Latest_Stories_Head'>Latest Stories</h1>
      <div className='Latest_Stories'>
          {Api && Api.filter((data)=>data.id===Latest_Stories.find((j)=> j===data.id)).map((item,index)=>
              <Link key={index} to={`/${item.genre}/${item.id}`} onClick={ScrollToTop}
                    className='Latest_Card Stories' 
              >
                <div className='Latest_Card_Overview Stories_Overview'>
                    <p className='Latest_Card_Head'>{item.heading}</p>
                    <p className='Latest_Card_Subhead Stories_Subhead'>{item.content}</p>
                    <p className='Latest_Card_Foot Stories_Foot'><span>{item.genre}</span> / {item.date}</p>
                </div>
              </Link>
          )}
      </div>
    </div>
    </>
  )
}

export default HomeComp