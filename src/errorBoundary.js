import React, {Component} from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError:false
        }
    }

  
    static getDerivedStateFromError(error){
        console.log('Logging545454', error);

      return { hasError: true };
    };
  
    componentDidCatch(error, errInfo){
        console.log('Logging', error);
    };
  
    render() {
      const { hasError } = this.state;
      console.log("hasError",hasError);

      return hasError ? <h5 style={{color:'red', display:'grid', placeContent:'center'}}>
                           Catched Error</h5> : this.props.children;
    }
  }