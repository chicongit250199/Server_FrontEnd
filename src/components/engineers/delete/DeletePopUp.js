import React, { Component } from 'react'

export default class DeletePopUp extends Component {
  constructor(props){
      super(props);
  }
  render() {
    
    return (
      <div className="DeletePopUp">
        {/* <div class="modal-content"> */}
          <div class="modal-header">
              <h4 class="modal-title">Delete</h4>
          </div>
          <div class="modal-body">You will delete completely this engineer</div>
          {/* <div class="modal-footer">
              <button type="button" onClick={this.props.onClose} class="btn red">OK</button>
          </div> */}
      {/* </div> */}
      </div>
    )
  }
}