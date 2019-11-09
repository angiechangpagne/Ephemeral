import React, { useState, useEffect } from 'react'
import Carousal from './Carousel'
import axios from 'axios'


const  feedItemURL=""



const App=(props) => {
    const [imgList,setImgList] =useState([])


    useEffect(() => { //analogous to ComponentDidMount
        axios.get(URL)
        .then((resp) => {
            setImgList(resp.data.images)

        }).catch((err) =>{
            console.log('Unable to feach splashbase url',err)
        })
    },[])


    return (
        <div> 
            <h1> Carousal </h1>
            {imgList.length===0 && <div> Loading..</div>}
            {imgList.length>0 && 
            <Carousal imgList={imgList} img_width={300} img_height={300}
                visibleImages={3} duration={750} />
        }
        </div>
    )
}


export default App