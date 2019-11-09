import React, { CompositionEvent, useState, useEffect } from './node_modules/react'
import {Route} from 'react-router-dom'
import Header from '../components/Header'
import axios from 'axios'


const App = (props) => {
    const [imgList,setImgList]=setList([])
}
const CarouselApp=() => {
    const [news,setNews] =useState([])
    const [searchQuery,setSearchQuery] =useState('react')
    const[url, setUrl]=useState('api url')
    const [loading,setLoading]=useState(false)

    const fetchNews= () => {
        setLoading(true)
        fetch(url)
            .then(result => result.json())
            .then(data => (setNews(data.hits),setLoading(false)))
            .catch(error => console.log(error))
    }

    const handleChange = (event) => {
        setSearchQuery(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        setUrl(`appi  search?query=${searchQuery}`)
    }

    const showLoading = () => {  { return loading ? <h2> Loading..</h2> : ''} }
    
    const searchForm = () => {
        return (
            <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={handleChange} />
            <button> Search</button>
            </form>
        )

    }



    const showNews = () => {
        return news.map((element,index) => (<p key={index}>{element.title}</p>))
    }



    useEffect(() => {
        axios.get(URL
            .then((resp) => {
                setImgList(resp.data.images)
            }).catch((err) => {
                console.group(err)
            }))
    })
    //lifecycle hok
    useEffect(() => {
        fetchNews()
    },[url])

    return (
        <div>
            <h2> News</h2>
                {/* //for loopo images */}
            {/* <Route path={`/viewArticles`} component={Carousel}/>
            <Route path={  `/viewArticle/:id`} component={} */}
            {showLoading()} 
            {showNews()}
        </div>
    )
}

export default CarouselApp