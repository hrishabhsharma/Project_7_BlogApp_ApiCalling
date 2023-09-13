import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import PageFooter from './PageFooter';
import CardFooter from './CardFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faSquareTwitter, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
import user from '../assets/Mask Group 16.png'
import clap from '../assets/rythm.svg'
import sharing from '../assets/share.svg'
import '../css/CardDetail.css'
import ErrorPage from './ErrorPage';

const CardDetail = () => {
  const Url = useParams()
  const Navigator = useNavigate()
  const [Api,setApi] = useState("")
  useEffect(()=>{
    axios(`https://hrishabh-blog-project.onrender.com/${Url.genre}/${Url.id}`)
    .then(res=>setApi(res.data))
    .catch(err=>console.log(err))
  },[Url])
  if(Url.genre!=='bollywood' && Url.genre!=='technology' && 
     Url.genre!=='hollywood' && Url.genre!=='fitness' && Url.genre!=='food'){
      // console.log(Url.genre)
      return <ErrorPage/>
  }
  return (
    <>
      <div className='Card_Header'>
            <Link to={"/"} className='Logo'>
                <div className='left'>The</div>
                <div className='right'>Hrep</div>
            </Link>
            <div className="CardHeader_Logo_GetStarted">
                Get Started
            </div>
      </div >
      <div className="Floating_Section">
            <div className="Like_Box">
              <img src={clap} alt="not found" />
              <span>9.3K</span>
            </div>
            <div className="Share_Box">
              <img src={sharing} alt="not found" />
              <span>Share this article</span>
            </div>
      </div>
      {Api && Api.map((item,index)=>{
        const para = item.content.split("  ")
        return(
          <div key={index}>
            <div className='Card_Main_Body'>
              <button className="Back_Button_Sliding" onClick={()=>{Navigator(-1)}}>Go Back</button>
              <div className='Content'>
                <div className='Content_Title'>{item.heading}</div>
                <div className='Author'>
                  <div className='Author_Details'>
                    <img src={user} alt='not found'/>
                    <span><p>Hrishabh Sharma</p>{item.date}</span>
                  </div>
                  <div className="Social_Sites">
                    <FontAwesomeIcon icon={faSquareFacebook} size="xl" style={{ color: "#b3b3b3", }} />
                    <FontAwesomeIcon icon={faSquareTwitter} size="xl" style={{ color: "#b3b3b3", }} />
                    <FontAwesomeIcon icon={faSquareInstagram} size="xl" style={{ color: "#b3b3b3", }} />
                    <FontAwesomeIcon icon={faSquareYoutube} size="xl" style={{ color: "#b3b3b3", }} />
                  </div>
                </div>
                <div><img className='Content_Image' src={item.image} alt='not found'/></div>
                <div className='Content_Desc'>
                    {para && para.map((item, index) => (
                      <p key={index} className='para'>{item}</p>
                    ))}
                </div>
                <div className="Lang_Tag">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Animation</span>
                </div>
                <div className="Like_Box">
                  <img src={clap} alt="not found" />
                  <span>9.3K claps</span>
                </div>
                <div className='Author_Details Bottom_Author'>
                  <img src={user} alt='not found'/>
                  <span>Written By<p>Hrishabh Sharma</p>{item.date}</span>
                </div>
              </div>
            </div>
            <CardFooter Except_Card={item.id}/>
          </div>
      )})}
      <PageFooter/>
    </>
  )
}

export default CardDetail