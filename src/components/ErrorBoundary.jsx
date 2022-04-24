import React, {Component} from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        error: null,
       }
    }
  
   
  
    componentDidCatch(error, errorInfo) {
      console.log({error, errorInfo});
    }

     static getDerivedStateFromError(error) {
      return {error};
    }
  
    render() {
      if (this.state.hasError)
        
        return <h1>Something went wrong.</h1>;
      
  
      return this.props.children; 
    }
}

export default ErrorBoundary