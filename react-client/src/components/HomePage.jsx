import React from 'react';
import { Container } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div className="app-container">
      <Container>
        <div className="app">
          <header className="app-header">
            <div className="drag-drop">

              {/* Category 1 */}
              <div className="drag-drop-group">
                <div className="group-title">APPLIED</div>
                <div className="drag-drop-item">
                  <p><b><em>Company:</em></b> Apple</p>
                  <p><b><em>Role:</em></b> Software Engineer</p>
                  <p><b><em>Date Applied:</em></b> 12-13-20</p>
                </div>
                <div className="drag-drop-item">
                  <p>ITEM 2</p>
                </div>
                <div className="drag-drop-item">
                  <p>ITEM 3</p>
                </div>
              </div>

              {/* Category 2 */}
              <div className="drag-drop-group">
                <div className="group-title">INTERVIEWS</div>
                <div className="drag-drop-item">
                  <p>ITEM 1</p>
                </div>
                <div className="drag-drop-item">
                  <p>ITEM 2</p>
                </div>
              </div>

              {/* Category 3 */}
              <div className="drag-drop-group">
                <div className="group-title">OFFERS</div>
                <div className="drag-drop-item">
                  <p>ITEM 1</p>
                </div>
                <div className="drag-drop-item">
                  <p>ITEM 2</p>
                </div>
              </div>

              {/* Category 4 */}
              <div className="drag-drop-group">
                <div className="group-title">REJECTED</div>
                <div className="drag-drop-item">
                  <p>ITEM 1</p>
                </div>
                <div className="drag-drop-item">
                  <p>ITEM 2</p>
                </div>
              </div>

            </div>
          </header>
        </div>
      </Container>
    </div>
  )
};

export default HomePage;