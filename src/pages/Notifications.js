import React from 'react'
import './Notifications.css'

const Notifications = () => {
  return (
    
    <div className='notifications'>
    <div className='containernoti'>
       <p className='smallcontainer'>Hooray! You started the course | cancer specilization.
       
       <p style={{"font-size":"12px"}}>2 days ago</p></p>
       <p className='smallcontainer'>Maintain consistency, finish today!
        <p style={{"font-size":"12px"}}>2 days ago</p>

       </p>

       <p className='smallcontainer'>Congratulations! you finished the course| Anatomy specilization.
       <p style={{"font-size":"12px"}}>2 days ago</p>

       <button className='noticlaim'>claim reward</button>
       </p>

       <p className='smallcontainer'>Great work! You finished 80% of the course | cancer specilization.
       <p style={{"font-size":"12px"}}>2 days ago</p>

        </p>

      </div>  
    </div>
  )
}

export default Notifications