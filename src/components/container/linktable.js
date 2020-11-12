import React from 'react'
import { NodeButton, NodeDetails, NodeDesc, NodeTitle } from '../styled/class'
import { NavButton } from '../styledcomponents'
import { NodeList } from '../styled/node'
import Classes from '../../data/index'

let dataType = {};

class LinkTable extends React.Component {

    checkDataType = () => {
        if (this.props.mode === "function") { dataType = Classes[this.props.state.class].function } else { dataType = Classes[this.props.state.class].macro };
    }

    retrieveData = (e, item) => {
        this.checkDataType();
        e.preventDefault();
        this.props.state.mode = this.props.mode;
        this.props.state.function = item;
        this.props.state.datalog.push(this.props.state.function);
        this.props.state.type = "function"
        this.props.functionCall(this.props.state);
    }

    render() {
        this.checkDataType()

        return (
            <NodeList>
                {Object.keys(dataType).map((item, id) => {
                    const { desc } = dataType[item];
                    return (
                        <NodeButton key={id}>
                            <NavButton onClick={(e) => this.retrieveData(e, item)} ><NodeDetails><NodeTitle>{item}</NodeTitle><NodeDesc >{desc}</NodeDesc></NodeDetails></NavButton>
                        </NodeButton>
                    );
                })}
            </NodeList>
        );
    }

}

export default LinkTable;
