import React,{useEffect,useState} from 'react'
import { Routes,Route } from 'react-router-dom'
import Economic from '../economics/Economic'
import Entertainment from '../entertainment/Entertainment'
import Health from '../health/Health'
import India from '../Indianews/India'
import "../Newscontainer/News.css"
import Politics from '../politics/Politics'
import Science from '../science/Science'
import Sports from '../sports/Sports'
function Newscontainer() {
    const [first, setfirst] = useState([])
    
    
    useEffect(() => {
        fetch( "https://newsapi.org/v2/everything?q=world&apiKey=fea5587a2bc24f31b14228e9c7b8c4a9"
        ).then(res=>res.json())
        .then(response=>{
            setfirst(response.articles)
        })
      
    }, [])

    const holder=first.map((elem,id)=>{
        if(elem.content!==null){
            return <div className="topnews" key={id}>
            <h5>Headline: {elem.content}</h5>
        </div>
        }    
    })
    
    return (
        <div className="container">
<Routes>
<Route path='/' element={<India/>}></Route>
<Route path='/economics' element={<Economic/>}></Route>
<Route path='/entertainment' element={<Entertainment/>}></Route>
<Route path='/politics' element={<Politics/>}></Route>
<Route path='/health' element={<Health/>}></Route>
<Route path='/science' element={<Science/>}></Route>
<Route path='/sports' element={<Sports/>}></Route>

</Routes>


            <div className="right">
<div className="heading">
    <h3>Top Headlines</h3>
</div>
{holder}
                            </div>
        </div>
    )
}

export default Newscontainer
