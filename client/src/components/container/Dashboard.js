import React, { useState,useEffect } from 'react';

// View Components
import TextInput from '../presentation/TextInput';

function Dashboard() {

  // Declare state variables
  const [currentTopic, setTopic] = useState('');
  const [topics, addTopic] = useState([]);
  const [url,setUrl]=useState('')
  const [loading,setLoading]=useState(false)


  const fetchNews=()=>{
	  setLoading(true)
	  fetch(url)
	  .then(result=> result.json())
	  .then(data=> (setNews(dat.hits),setLoading(false)))
	  .catch(error=> console.log(error))
  }

  const handleChange=(event) =>{
	setSearchQuery(event.target.value)
  }

  const handleSubmit=event=>{
	 event.preventDefault()
	 setUrl(``) //url must have a $query to the api, it will be a search query
  }

  function updateTopic(e) {
	const newTopic = e.target.value;
	setTopic(newTopic)
  }

  function onSubmit(e) {
	e.preventDefault();
	console.log(currentTopic);
  }

  const showLoading=()=>{ { return loading ? <h2> Loading...</h2>: '' }}

 
  return (
	<div id='dashboard-container'>
	  <div className='dashboard-header'>
		Ephemeral
	  </div>
	  <div id='main-interface'>
		<h1 id='topic-input-header'>Dashboard</h1>
		<div id='topic-input-container'>
		  <TextInput name='topic' value={currentTopic} type='text' onChange={updateTopic} placeholder='Add a new topic' />
		  <input type='submit' value='Add Topic' className='btn btn-info btn-block mt-4' onClick={onSubmit} />
		</div>
	  </div>
	</div>
  )
}

export default Dashboard;

