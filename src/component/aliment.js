
const Aliment = (props) => {
    const menu = props.menu

    return(
        <div className="list aliment">
            <h2>{menu}</h2>  
        </div>
        )
}
export default Aliment;