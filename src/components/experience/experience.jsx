import React from 'react'
import'./experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Basic</small> 
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>Java</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

       {/*end of frontend*/}
        <div className="experience__backend">
        <h3>AREA OF INTEREST</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>FRONT END DEVELOPMENT</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>PROGRAMMING</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experienced_details-icon'/> 
              <div>
                <h4>WEB DESIGNING</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience