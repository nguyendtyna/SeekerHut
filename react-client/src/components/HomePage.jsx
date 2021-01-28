import React, {useState, useRef} from 'react';
import { Container, Modal } from 'react-bootstrap';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import AddEntryButton from './AddEntryButton.jsx';

const HomePage = ({ data }) => {

  const [list, setList] = useState(data);
  // const dragItem = useRef();

  const handleDragStart = (e, parameters) => {
    console.log("Drag starting...", parameters);
    // dragItem.current = parameters;
  }

  return (
      <Container>
        <div className="drag-drop">
          {/* Category 1 */}
          <div className="drag-drop-group">
            <div className="group-title">
              {"APPLIED"}
              <AddEntryButton />
            </div>
            <div draggable onDragStart={handleDragStart} className="drag-drop-item">
              <p><b>Date Applied | </b> 12-13-20</p>
              <p><b>Company | </b> Apple</p>
              <p><b>Role | </b> Software Engineer</p>
              <p><b>Location | </b> Austin, TX</p>
            </div>
            <div draggable onDragStart={handleDragStart} className="drag-drop-item">
              <p><b>Date Applied | </b> 12-15-20</p>
              <p><b>Company | </b> Snowflake</p>
              <p><b>Role | </b> Software Engineer</p>
              <p><b>Location | </b> Denver, CO</p>
            </div>
            <div draggable onDragStart={handleDragStart} className="drag-drop-item">
              <p><b>Date Applied | </b> 12-16-20</p>
              <p><b>Company | </b> Oracle</p>
              <p><b>Role | </b> Software Engineer</p>
              <p><b>Location | </b> Austin, TX</p>
            </div>
          </div>

          {/* Category 2 */}
          <div className="drag-drop-group">
            <div className="group-title">
              {"INTERVIEWS"}
              <IconButton><AddCircleIcon fontSize="small"/></IconButton>
              </div>
            <div draggable onDragStart={handleDragStart} className="drag-drop-item">
              <p><b>Interview Date | </b> 12-16-20</p>
              <p><b>Interview Time | </b> 9:00AM CST</p>
              <p><b>Interviewer | </b> Frank D</p>
              <p><b>Company | </b> SolarWinds</p>
              <p><b>Role | </b> Software Engineer</p>
            </div>
          </div>

          {/* Category 3 */}
          <div className="drag-drop-group">
            <div className="group-title">
              {"OFFERS"}
              <IconButton><AddCircleIcon fontSize="small"/></IconButton>
              </div>
            <div draggable onDragStart={handleDragStart} className="drag-drop-item">
              <p><b>Deadline | </b> 12-30-20</p>
              <p><b>Start Date | </b> 1-25-21</p>
              <p><b>Company | </b> Uber</p>
              <p><b>Role | </b> Junior Web Dev</p>
              <p><b>Location | </b> Austin, TX</p>
            </div>
          </div>

          {/* Category 4 */}
          <div className="drag-drop-group">
            <div className="group-title">
              {"REJECTED"}
              <IconButton><AddCircleIcon fontSize="small"/></IconButton>
            </div>
            <div draggable onDragStart={handleDragStart} className="drag-drop-item">
              <p><b>Date Applied | </b> 12-04-20</p>
              <p><b>Company | </b> Amazon</p>
              <p><b>Role | </b> Solutions Architect</p>
              <p><b>Location | </b> Austin, TX</p>
            </div>
            <div draggable onDragStart={handleDragStart} className="drag-drop-item">
              <p><b>Date Applied | </b> 12-17-20</p>
              <p><b>Company | </b> Google</p>
              <p><b>Role | </b> Software Engineer</p>
              <p><b>Location | </b> Austin, TX</p>
            </div>
          </div>

        </div>
      </Container>
  )
};

export default HomePage;