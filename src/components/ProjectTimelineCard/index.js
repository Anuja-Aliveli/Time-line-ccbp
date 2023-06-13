// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {cardDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = cardDetails
  return (
    <div className="card-container">
      <img className="image" alt="project" src={imageUrl} />
      <div className="time-container">
        <h1 className="title-course">{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar className="icon" color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="visit-link"
      >
        Visit
      </a>
    </div>
  )
}
export default ProjectTimeLineCard
