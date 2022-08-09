function Contact (props) {
    return (
        <div className="section-contact">
            <div className="section-contact-main">
                <div className="section-contact-main-block"></div>
                <div className="section-contact-main-phone">
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className="section-contact-text">
                <h4>{props.info}</h4>
            </div>
        </div>
    )
}
export default Contact;