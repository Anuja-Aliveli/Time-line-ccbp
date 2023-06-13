// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {cardDetails} = props
  const {duration, courseTitle, description, tagsList} = cardDetails
  return (
    <div className="card-container">
      <div className="time-container">
        <h1 className="title-course">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle className="icon" />
          <p className="title-course">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="list-container">
        {tagsList.map(eachTag => (
          <p className="list-item" key={eachTag.id}>
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
