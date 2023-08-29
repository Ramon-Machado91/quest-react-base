const alertLabel = ()=>{
    alert(`A label desse botão é ${Button.defaultProps.label}`)
}



const Button = ({label})=>{
    return(
        <>
        <button onClick={alertLabel}>{label}</button>
        </>
    )
}


Button.defaultProps={
    label: 'Baixar CV'
}


export default Button;