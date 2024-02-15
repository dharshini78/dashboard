import React from 'react'
import './Courses.css'
import hero from '../assets/hero.jpg';
import maxresdefault from '../assets/maxresdefault.jpg';
import anatomy from '../assets/muscles-anatomy-58545dc85f9b586e02f71781.jpg'
import medicine from '../assets/Public Opinion Research 1200x666.jpg'
import {Link} from 'react-router-dom'

const Courses = () => {
  return (
    <div className='coursesContainer'>
      <div className='videoCard'>

        <div className='courseimg'>
        <img src={maxresdefault} alt='' ></img>
        </div>
        <div className='columnfonts'>
          <h1 className='coursetitle'>Cancer Biology Specilization</h1>
          <h4 className='modules'>
            <li>Understanding Cancer Metastasis</li>
            <li>Understanding Prostate Cancer</li>

          </h4>
          <h3 className='duration'>Duration: 3 weeks</h3>
          <div className='progressbar'>80%</div>
        </div>
        <div className='buttonsofclaim'>
          <button className='view'>View</button>
          <button className='claim'>claim reward</button>


        </div>

      </div>

      <div className='videoCard'>

        <div className='courseimg'>
        <img src={medicine} alt='' ></img>

        </div>
        <div className='columnfonts'>
          <h1 className='coursetitle'>Biomedical Visulatization (II)</h1>
          <h4 className='modules'>
            <li>Introduction to human body</li>
            <li>Virtual reality visualtization</li>

          </h4>
          <h3 className='duration'>Duration: 2 weeks</h3>
          <div className='progressbar' style={{width: "20%"}}>20%</div>
        </div>
        <div className='buttonsofclaim'>
          <button className='view'>View</button>
          <button className='claim'>claim reward</button>


        </div>

      </div>


<div className='videoCard'>

<div className='courseimg'>
<img src={anatomy} alt='' ></img>
</div>
<div className='columnfonts'>
  <h1 className='coursetitle'>Anatomy Specialization Two</h1>
  <h4 className='modules'>
    <li>Cardiovascular, Respiratory and Urinary Systems</li>
    <li>Human Neuroanatomy</li>

  </h4>
  <h3 className='duration'>Duration: 3 weeks</h3>
  <div className='progressbar' style={{width: "100%"}}>100%</div>
</div>
<div className='buttonsofclaim'>
  <button className='view'>View</button>
    <Link to='/notifications'>
    <button className='claim'>
    claim reward</button>
    </Link>
    


</div>

</div>


<div className='videoCard'>

<div className='courseimg'>
<img src={hero} alt='' ></img>

</div>
<div className='columnfonts'>
  <h1 className='coursetitle'>Introduction to medicine (I)</h1>
  <h4 className='modules'>
    <li>Understanding pathology</li>
    <li>Handon experience with Kidney and pancreas</li>

  </h4>
  <h3 className='duration'>Duration: 3 weeks</h3>
  <div className='progressbar' style={{width: "1%"}}>0%</div>
</div>
<div className='buttonsofclaim'>
  <button className='view'>View</button>
  <button className='claim'>claim reward</button>


</div>

</div>



    </div>
  )
}

export default Courses