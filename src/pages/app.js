import React from 'react';
import data from '../data/classindex'
import SideNav from '../components/sidenav'
import Node from './subpages/node'
import Class from './subpages/class'
import Index from './subpages/index'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { class: "", function: "", id: -1, type: "home", data: data, datalog: [data.title], mode: ""}
    }

    retrieveState = (state) => {
        this.setState(state);

    }

    render() {
        switch (this.state.type) {
            case "home": {
                return (
                    <>
                        <SideNav state={this.state} func={this.retrieveState.bind(this)} />
                        <Index/>
                    </>
                );
            }
            case "class": {
                return (
                    <>
                        <SideNav state={this.state} func={this.retrieveState.bind(this)} />
                        <Class state={this.state} func={this.retrieveState.bind(this)}/>
                    </>
                )
            }
            case "function": {
                return (
                    <>
                        <SideNav state={this.state} func={this.retrieveState.bind(this)} />
                        <Node state={this.state}/>
                    </>
                )
            }
            default: { return ( <p>This is not a valid page and should not have been shown. Please refresh the browser.</p> ) }
        }
    }
}

export default App;
