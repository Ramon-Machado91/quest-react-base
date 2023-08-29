import './paragrafo.css'

const Paragrafo = ({children, color, text})=>{
    return(
        <div style={{ color: color, textTransform: text}}>
            {children}
        </div>
    )
}

Paragrafo.defaultProps = {

    color: 'red',
    text: 'upperCase'
}


export default Paragrafo