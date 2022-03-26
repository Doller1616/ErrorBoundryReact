import React, {Component} from 'react'

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError:false
        }
    }

  
    static getDerivedStateFromError(error){
        console.log('Logging', error);

      return { hasError: true };
    };
  
    componentDidCatch(error, errInfo){
        console.log('Logging', error,errInfo);
    };
  
    render() {
      const { hasError } = this.state;
      return hasError ? <h5 style={{color:'red', display:'grid', placeContent:'center'}}>
                           Catched Error</h5> : this.props.children;
    }
  }