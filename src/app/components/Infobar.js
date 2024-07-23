function Infobar(props) {
    return (
        <div>
            <div className={props.dayView ? "v-infobar" : "infobar"} id="infobar">
                <div className={props.dayView ? "pad-title" : "title"}>{props.title}</div>
                <br/>
                <div className="subtitle">{props.date}{props.dist}</div>
                <div className={props.hide ? "subtitle" : "description"}>{props.desc}</div>
                <button className={props.hide ? "hidden" : "button"} onClick={props.fn}>Back</button>
            </div>
        </div>
    )
}

export default Infobar