import { kanbasLinks } from '../index'
import { Link, useLocation } from 'react-router-dom'
import './index.css'
import '../../styles.css'
import { FaTimes } from 'react-icons/fa'

type CollapsedKanbasNavigationProps = {
  closeAction: () => void
}

function CollapsedKanbasNavigation({
  closeAction,
}: CollapsedKanbasNavigationProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="wd-collapse-padding">
      <div className="d-flex justify-content-between align-items-center ps-2 pe-2">
        <h1 className="wd-fg-red">Kanbas</h1>
        <button className="wd-icon-button wd-x-button" onClick={closeAction}>
          <FaTimes />
        </button>
      </div>

      <ul className="wd-kanbas-nav-items">
        {kanbasLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={
                link.label == 'Courses'
                  ? currentPath
                  : `/Kanbas/${link.label}`
              }
              onClick={closeAction}
            >
              <div className="d-flex mb-3">
                <div className="me-4">{link.icon}</div>
                {link.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CollapsedKanbasNavigation
