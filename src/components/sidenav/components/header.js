import React from 'react'
import { H1Title } from '../../styled/text'

class Header extends React.Component {
    render() {
        return (
            <div>
                <H1Title>{this.props.title}</H1Title>
            </div>
        )
    }

}

export default Header;