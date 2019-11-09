import React, {useState, useEffect, useRef } from 'react'
import './Carousal.css'

const IMG_WIDTH=300
const IMG_HEIGHT=300
const parentPad=0
const VISIBLEIMAGES=3
const DURATION=750

const Carousal=(props) =>{
    //these are the hooks
    //img list image passed from parent
    const {imgList=[],img_width=IMG_WIDTH,img_height=IMG_HEIGHT,visibleImages=VISIBLE_IMAGES,duration=DURATION,autoNext=false,timeForNext=3000}=props
    //currentFrstImg middle primary element
    const [currFirstImg,setCurrFirstImg]=useState(0)
    const [actualFirst,setActualFirst]=useState('')
    const [visibleItemProps,setVisibleItemsProps]=useState({order:[],styles:{}})
    const currMiddleImgRef=useRef(0)
    const intervalRef=useRef(0)
    const imgDifference=useRef(1)
    const durationRef=useRef(duration)

    const parentHeight=img_height+2*parentPad
    const parentWidth=img_width*3
    const elementsInLeft=Math.ceil(visibleImages/2)
    const elementsInRight=visibleImages-elementsInLeft
    

useEffect(() =>{
    clearInterval(intervalRef.current)
    if(actualFirst!==''){
        intervalRef.current=setInterval(()=>{
            if(actualFirst!=='' && actualFirst!==currMiddleImgRef.currrent){
                cycleToNextImage(actualFirst)
            }else if(actualFirst !== '' && actualFirst===currMiddleImgRef.current){
                setActualFirst('')
                imgDifference.current=1
                clearInterval(intervalRef.current)
            }
        },durationRef.current-100)
    }
},[actualFirst])

useEffect(()=>{
    constructVisibleItemsProps()
    currMiddleImgRef.current=currFirstImg
},[currFirstImg])

useEffect(()=>{
    if(autoNext){
        setInterval(()=>{
            const nextImg=currMiddleImgRef.current+1<imgList.length ? currMiddleImgRef.current+1 : 0
            setCurrFirstImg(nextImg)
        },timeForNext)
    }
},[])



    const loadCarousel=()=>{
        return (
            <ul className="carousalWrapper" style={{height: parentHeight+'px',width:parentWidth+'px',padding:parentPad+'px',perspective:'500px'}}>
                {
                    imgList.map(({large_url,url,id},index) =>{
                        const dn=visibleItemsProps.order.indexOf(index)===-1
                        const styles=visibleItemsProps[index] ? visibleItemsProps[index].styles: {}
                        return (
                            <li key={id} className={'imgWrap '+(dn ? 'dn':'')} style={{...styles,position:'absolute',transition: `all ${durationRef.current}ms linear`}} onClick={(e) =>{changeCenter({e,index,large_url})} }>
                                <img src={url} alt={'img_'+id} width={img_width} height={img_height}/>
                            </li>
                        )
                })
            }
            </ul>
        )
        }

        const changeCenter=({event,index,large_url})


        return (
            <React.Fragment>
                {loadCarousel()}
            </React.Fragment>
        )

}
expore default Carousel
