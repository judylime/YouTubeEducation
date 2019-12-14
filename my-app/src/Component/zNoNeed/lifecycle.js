
    //////////////////////////////
        componentDidMount() {
            console.log('Component DID MOUNT!')
            console.log("this.state",this.state)
            console.log("this.props",this.props)
       }
       componentWillReceiveProps(newProps) {
             console.log('Component WILL RECEIVE PROPS!')
             console.log("newProps",newProps)
             console.log("this.state",this.state)
             console.log("this.props",this.props)
       }
       shouldComponentUpdate(newProps, newState) {
            console.log('Component Should UPDATE!')
            console.log("newProps",newProps)
            console.log("newState",newState)
            console.log("this.state",this.state)
            console.log("this.props",this.props)
             return true;
       }
       componentWillUpdate(nextProps, nextState) {
             console.log('Component WILL UPDATE!');
             console.log("nextProps",nextProps)
            console.log("nextState",nextState)
             console.log("this.state",this.state)
             console.log("this.props",this.props)
       }
       componentDidUpdate(prevProps, prevState) {
             console.log('Component DID UPDATE!')
             console.log("prevProps",prevProps)
             console.log("prevState",prevState)
             console.log("this.state",this.state)
             console.log("this.props",this.props)

       }
       componentWillUnmount() {
              console.log('Component WILL UNMOUNT!')
              console.log("this.state",this.state)
              console.log("this.props",this.props)
       
       }
       //////////////////////////////////