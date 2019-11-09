import React, { CompositionEvent, useState, useEffect } from './node_modules/react'


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

    //lifecycle hok
    useEffect(() => {
        fetchNews()
    },[url])

    return (
        <div>
            <h2> News</h2>
            {showLoading()}
            {searchForm()}
            {showNews()}
        </div>
    )
}

export default CarouselApp