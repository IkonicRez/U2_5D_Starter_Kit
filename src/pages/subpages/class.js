import React from 'react'
import {Container} from '../../components/styled/containers'
import {H2Title, H3Title} from '../../components/styled/text'
import LinkTable from '../../components/container/linktable'

class Class extends React.Component {

    render() {
        return (
            <Container>
                <>
                    <H2Title>{this.props.state.class}</H2Title>
                    <H3Title>Functions</H3Title>
                    <LinkTable state={this.props.state} mode="function" functionCall={this.props.func} />
                    <H3Title>Macros</H3Title>
                    <LinkTable state={this.props.state} mode="macro" functionCall={this.props.func} />
                </>
            </Container>
        )
    }

}

export default Class;