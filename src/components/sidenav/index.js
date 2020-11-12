import { SideNav as Nav } from "../styled/containers";
import Header from './components/header'
import ClassTable from './components/classtable'
import React from 'react'

class SideNav extends React.Component {

    render() {
        return (
            <Nav>
                <Header title={this.props.state.data.title} />
                <ClassTable state={this.props.state} functionCall={this.props.func} />
            </Nav>
        )
    }
}

export default SideNav;