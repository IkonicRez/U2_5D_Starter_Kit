import React from 'react'
import { H2Title, H3Title } from '../../components/styled/text'
import { NodeImage, PinBox, NodeList } from '../../components/styled/node'
import {Container} from '../../components/styled/containers'
import Classes from '../../data/index'

import styled from 'styled-components'

const NodeDetails = styled.div`
display:flex;`

const NodeTitle = styled.p`
padding-left:10px;
padding-right:10px;
margin: auto 0 auto 0;
border-right:2px solid black
`

const PinDesc = styled.p`
padding-left:10px;
padding:right:10px;
`

const NodeDesc = styled.p`
margin:30px 30px 30px 40px;
color:#6ec233;
`

class PinList extends React.Component {

    render() {
        return (
            <>
            <H3Title>{this.props.type}</H3Title>
                <NodeList>
                {this.props.list.map((item, id) => {
                    return ( 
                        <PinBox key={id}><NodeDetails><NodeTitle>{item[0]} </NodeTitle><PinDesc>{item[1]}</PinDesc></NodeDetails> </PinBox>
                    )
                })}
            </NodeList>
            </>
        );
    }

}

class Node extends React.Component {
    constructor(props) {
        super(props);
        this.props.state.focusType = Classes[this.props.state.class][this.props.state.mode][this.props.state.function]
    }


    render() {
        const { desc, inputs, outputs } = this.props.state.focusType;
        return (
            <Container>
                <H2Title>{this.props.state.class} {">"} {this.props.state.function}</H2Title>
                <NodeDesc>{desc}</NodeDesc>
                <NodeImage src={`${process.env.PUBLIC_URL}/img/` + this.props.state.class +"/"+ this.props.state.function + ".png"} />
                <PinList list={inputs} type="Inputs"/>
                <PinList list={outputs} type="Outputs"/>
            </Container>
        );
    }

}

export default Node;