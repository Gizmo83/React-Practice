import React, { Component }from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      margin: '25px auto',
      padding: 30,
      display: "flex",
      height: "90vh",
      width: "90vh",
      flexWrap: "wrap",
      textAlign: "center",
      overflow: "auto"
    };

    const closeBtn = {
      color: "#56B055",
      position: "absolute",
      top: "10px",
      right: "10px",
      fontSize: "1.5em"
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
        {this.props.favorites.map(result => {
            //console.log(result)
            let dob = result.dob.date.split("T")
            return(
                <div className="card" key={result.email}>
                    <img className="card-img-top" src={result.picture.large} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{result.name.first.charAt(0).toUpperCase() + result.name.first.slice(1)} {result.name.last.charAt(0).toUpperCase() + result.name.last.slice(1)}</h5>
                        <p className="card-text">Gender: {result.gender}</p>
                        <p className="card-text">DOB: {dob}</p>
                        <p className="card-text">Location: {result.location.city.charAt(0).toUpperCase() + result.location.city.slice(1)}, {result.location.state.charAt(0).toUpperCase() + result.location.state.slice(1)}</p>
                    </div>
                </div>
            )
        })}    
          <div className="footer">
            <button onClick={this.props.onClose} style={closeBtn}>
              <i className="far fa-window-close" style={closeBtn}></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool
};

export default Modal;