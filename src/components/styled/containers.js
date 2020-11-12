import styled from 'styled-components'

const Container = styled.div`
  margin-left 250px;
`
const SideNav = styled.div`  
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #6ec233;
  overflow-x: hidden;
  box-shadow: 5px 0px 5px #444; 
`

export { Container, SideNav }