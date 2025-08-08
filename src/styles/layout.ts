import styled from 'styled-components';

const StyledContainer = styled.div`
width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: ${((emp) => emp.theme.colors.background}};`

const StyledWrapper = styled.div
`display: flex; flex-direction: row; gap: 20px; width: 100%; max-width: 1200px; margin: 0 auto; `${(emp) => emp.theme.mix.wrapper}};`

export { StyledContainer, StyledWrapper };