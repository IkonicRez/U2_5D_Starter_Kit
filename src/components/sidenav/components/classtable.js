import React from 'react'
import { NavButton, ItemList } from '../../styledcomponents'

class ClassTable extends React.Component {

    retrieveData = (e) => {
        e.preventDefault();
        this.props.state.class = e.target.firstChild.data;
        this.props.state.datalog.push(this.props.state.class);
        this.props.state.type = "class";
        this.props.functionCall(this.props.state);
    }

    render() {
        return (
            <ItemList>
                {this.props.state.data.classes.map((item, id) => {
                    return (
                        <li key={id}>
                            <NavButton onClick={this.retrieveData.bind(this)} >{item}</NavButton>
                        </li>
                    );
                })}
            </ItemList>
        );
    }

}

export default ClassTable;
