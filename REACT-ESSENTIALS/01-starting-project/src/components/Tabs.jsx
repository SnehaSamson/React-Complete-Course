export default function Tabs({children, buttons, buttonsContainer,ButtonsContainer}) {
// export default function Tabs({children, buttons, buttonsContainer,ButtonsContainer = "menu"}) {-> Setting the default props
    // const ButtonsContainer = buttonsContainer;
    return ( 
        <>
        <ButtonsContainer> {buttons} </ButtonsContainer>  
        {children}
        </>
    )
}