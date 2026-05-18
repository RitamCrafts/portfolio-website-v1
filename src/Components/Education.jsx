import React from 'react'
import EducationCard from './EducationCard'

function Education({education,data}) {
  return (
    <div>
      <EducationCard educationDetails={education[0]}/>
    </div>
  )
}

export default Education
