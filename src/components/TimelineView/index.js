// Write your code here
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  renderList = eachItem => {
    if (eachItem.categoryId === 'COURSE') {
      return <CourseTimelineCard cardDetails={eachItem} key={eachItem.id} />
    }
    return <ProjectTimelineCard cardDetails={eachItem} key={eachItem.id} />
  }

  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="app-container">
        <h1 className="head">
          MY JOURNEY OF
          <br />
          <span className="head2">CCBP 4.0</span>
        </h1>
        <div className="chrono-container">
          <Chrono
            theme={{
              secondary: 'white',
            }}
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
            slideShow="true"
          >
            {timelineItemsList.map(eachItem => this.renderList(eachItem))}
          </Chrono>
        </div>
      </div>
    )
  }
}
export default TimelineView
