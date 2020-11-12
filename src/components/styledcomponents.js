import styled from 'styled-components';

const style = "background-color: #6ec233; border: none; color: #111; padding: 8px 14px; font-weight:750; font-size:15px; text-align:left;"

const NavButton = styled.button `
  ${style} width:100%;
  :hover { background-color:#83cc50; };
  :focus { outline:none; }`

const List = styled.ul` list-style-type:none; margin-block-start:0.3em; `

const ItemList = styled(List)` padding:5%; `

export { style, List, NavButton, ItemList }