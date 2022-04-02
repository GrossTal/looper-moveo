// import './PlayButton.css'; 

function ControlButton({onClick, title}){
    return (
        <div>
            <button onClick={onClick}>
            <h3>{title}</h3>
            </button>
        </div>
    )
}
export default ControlButton