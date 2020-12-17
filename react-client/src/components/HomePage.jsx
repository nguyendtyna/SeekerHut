import React, {useState} from 'react';
import { Container, Modal } from 'react-bootstrap';
import { IconButton, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

// import AddEntryButton from './AddEntryButton.jsx';

const HomePage = ({ data }) => {

  const [list, setList] = useState(data);
  const [open, setOpen] = useState(false);

  const handleDragStart = (e) => {
    console.log("DRAG STARTING...")
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
      <Container>
        <div className="drag-drop">
          {/* Category 1 */}
          <div className="drag-drop-group">
            <div className="group-title">
              {"APPLIED"}
              <IconButton onClick={handleClickOpen}><AddCircleIcon fontSize="small"/></IconButton>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Application Information</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    id="name"
                    placeholder="false"
                    label="Date Applied"
                    type="date"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    id="name"
                    label="Company"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    id="name"
                    label="Role"
                    type="text"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Add
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            <div draggable onDragStart={handleDragStart} className="drag-drop-item">
              <p><b>Date Applied | </b> 12-13-20</p>
              <p><b>Company | </b> Apple</p>
              <p><b>Role | </b> Software Engineer</p>
            </div>
            <div draggable onDragStart={handleDragStart} className="drag-drop-item">
              <p><b>Date Applied | </b> 12-15-20</p>
              <p><b>Company | </b> Snowflake</p>
              <p><b>Role | </b> Software Engineer</p>
            </div>
            <div draggable onDragStart={handleDragStart} className="drag-drop-item">
              <p><b>Date Applied | </b> 12-16-20</p>
              <p><b>Company | </b> Oracle</p>
              <p><b>Role | </b> Software Engineer</p>
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
            </div>
            <div draggable onDragStart={handleDragStart} className="drag-drop-item">
              <p><b>Date Applied | </b> 12-17-20</p>
              <p><b>Company | </b> Google</p>
              <p><b>Role | </b> Software Engineer</p>
            </div>
          </div>

        </div>
      </Container>
  )
};

export default HomePage;