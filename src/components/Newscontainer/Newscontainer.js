import React from 'react'
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
                            </div>
        </div>
    )
}

export default Newscontainer