function Card({image, title, content, tags, published }) {
    return (
    <div className = "card" >
        <figure>
            {
                image != '' ? <img src={image} alt=""/> : <img src="https://placehold.co/600x400" alt=""/>
            }
        </figure>
        <div className="card-content">
            <div className="card-text">
                <h3>
                    {title}
                </h3>
                <p>
                    {content}
                </p>
                {
                    tags.map((tag, index) => (
                        <span className={`tag tag_${tag}`} key={`tag_${index}`}>#{tag}</span>
                    ))
                }
            </div>
            <div className="card-action">
                <button className="button">Leggi di più</button>
            </div>
        </div>

        </div>
    )
}
export default Card