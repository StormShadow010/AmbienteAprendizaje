import styled from 'styled-components'
const ContainerComponent=styled.div`	
    width: 100%;
	margin:5rem auto;
`

export const Container = (props) => {
    return(
        <ContainerComponent>
            {props.children}
        </ContainerComponent>
    )
}
