import { Button } from "react-bootstrap"


const Boton = ({label, type, onClick}) => {
    return (
        <div>
            <Button variant = {type} onClick={onClick}>{label}</Button>
        </div>
    )
}

export default Boton