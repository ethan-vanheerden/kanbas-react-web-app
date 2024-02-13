import ModuleList from '../Modules/List'
import {
  FaBan,
  FaCheck,
  FaDownload,
  FaEye,
  FaHome,
  FaBullhorn,
  FaRegBell,
  FaInfoCircle,
  FaTimes,
  FaCalendar,
} from 'react-icons/fa'
import { VscGraph } from 'react-icons/vsc'
import './index.css'
import '../../styles.css'

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill">
        <ModuleList />
      </div>
      <div
        className="flex-grow-0 me-2 d-none d-lg-block wd-course-status"
        style={{ width: '220px' }}
      >
        <h3>Course Status</h3>
        <div className="wd-publish-buttons">
          <button type="button" className="wd-course-button-unpublish">
            <div className="d-flex align-items-center">
              <FaBan className="me-2" />
              Unpublish
            </div>
          </button>
          <button type="button" className="wd-course-button-publish" disabled>
            <div className="d-flex align-items-center">
              <FaCheck className="me-2" />
              Published
            </div>
          </button>
        </div>
        <div>
          <button type="button" className="wd-course-button">
            <FaDownload className="me-2" />
            Import Existing Content
          </button>
          <button type="button" className="wd-course-button">
            <FaEye className="me-2" />
            Import from Commons
          </button>
          <button type="button" className="wd-course-button">
            <FaHome className="me-2" />
            Choose Home Page
          </button>
          <button type="button" className="wd-course-button">
            <VscGraph className="me-2" />
            View Course Stream
          </button>
          <button type="button" className="wd-course-button">
            <FaBullhorn className="me-2" />
            New Announcement
          </button>
          <button type="button" className="wd-course-button">
            <VscGraph className="me-2" />
            New Analytics
          </button>
          <button type="button" className="wd-course-button">
            <FaRegBell className="me-2" />
            View Notifications
          </button>
        </div>
        <h5>To Do</h5>
        <hr />
        <div className="wd-todo">
          <div className="row">
            <div className="col-1">
              <a className="wd-info-icon" href="javascript:void(0)">
                <FaInfoCircle />
              </a>
            </div>
            <div className="col-auto me-auto">
              <a href="javascript:void(0)">
                <h6>Grade A1 - HTML</h6>
              </a>
            </div>
            <div className="col-1">
              <a className="wd-times" href="javascript:void(0)">
                <FaTimes style={{ color: 'gray' }} />
              </a>
            </div>
          </div>
        </div>
        <div className="wd-todo-subtitle">100 points • Feb. 2 at 11:59pm</div>
        <h5>
          Coming Up
          <div>
            <a href="javascript:void(0)">
              <FaCalendar className="me-1 mb-1" style={{ color: 'gray' }} />
              Calendar
            </a>
          </div>
        </h5>
        <hr />
        <div className="wd-coming-up">
          <ul>
            <li>
              <a href="javascript:void(0)">
                <FaCalendar />
                Lecture
                <div>CS4550.12631.202410 Sep 7 at 11:45am</div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <FaCalendar />
                Lecture
                <div>CS4550.12631.202410 Sep 11 at 11:45am</div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <FaCalendar />
                CS5610 SP23 Lecture
                <div>Sep 11 at 6pm</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Home
