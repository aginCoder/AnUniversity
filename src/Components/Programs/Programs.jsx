import React from 'react'
import './Programs.css'
import prg1 from '../../Assets/prg1.png'
import prg2 from '../../Assets/prg2.png'
import prg3 from '../../Assets/prg3.png'
import program1 from '../../Assets/program1.png'
import program2 from '../../Assets/program2.png'
import program3 from '../../Assets/program3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={prg1} alt="" />
        <div className="caption">
            <img src={program1} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={prg2} alt="" />
        <div className="caption">
            <img src={program2} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={prg3} alt="" />
        <div className="caption">
            <img src={program3} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
