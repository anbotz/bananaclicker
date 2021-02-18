  
  import React from "https://unpkg.com/react@16/umd/react.development.js";
  import ReactDOM from "https://unpkg.com/react-dom@16/umd/react-dom.development.js";
  
  class Logo extends React.Component{
    render(){

      return(
          <img className="Logo" src={this.props.src} alt={this.props.name}/>
      )
    }
  }


  export default Logo;