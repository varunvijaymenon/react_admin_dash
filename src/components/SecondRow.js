import React from 'react'
import './SecondRow.css'
import SecondRowCard from './SecondRowCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'

const CalendarIcon = <FontAwesomeIcon icon={faCalendar} />
const DollarIcon = <FontAwesomeIcon icon={faDollarSign} />
const ClipboardList = <FontAwesomeIcon icon={faClipboardList} />
const CommentIcon = <FontAwesomeIcon icon={faComments} />

const FirstCard = {
  LeftSide: {
    backgroundColor: '#4E73DF'
  },
  Title:{
    color: '#4E73DF'
  },
}

const SecondCard = {
  LeftSide: {
    backgroundColor: '#2BCA8E'
  },
  Title:{
    color: '#2BCA8E'
  },
}

const ThirdCard = {
  LeftSide: {
    backgroundColor: '#37B8CC'
  },
  Title:{
    color: '#37B8CC'
  },
}
const FourthCard = {
  LeftSide: {
    backgroundColor: '#F6C23D'
  },
  Title:{
    color: '#F6C23D'
  },
}

export default function SecondRow() {
  return (
    <div className='SecondRowCards'>
      <SecondRowCard title='EARNINGS (MONTHLY)' data='$40,000'  style={FirstCard}  progressBar={false} icon={CalendarIcon}/>
      <SecondRowCard title='EARNINGS (ANNUAL)'  data='$215,000' style={SecondCard} progressBar={false} icon={DollarIcon}/>
      <SecondRowCard title='TASKS'              data='50%'      style={ThirdCard}  progressBar={true}  icon={ClipboardList}/>
      <SecondRowCard title='PENDING REQUESTS'   data='18'       style={FourthCard} progressBar={false} icon={CommentIcon}/>
    </div>
  )
}
