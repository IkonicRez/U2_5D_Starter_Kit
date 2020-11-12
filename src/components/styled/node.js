import styled from 'styled-components'
import { style, List } from '../styledcomponents'

const PinBox = styled.li` ${style} margin: 2px;  `

const NodeList = styled(List)` padding-left:6%; padding-right:5%; `

const NodeImage = styled.img` display:block; margin-left:5%; `

export { PinBox, NodeList, NodeImage }