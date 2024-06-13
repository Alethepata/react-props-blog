import img from '../../assets/img/img-post.jpg';

function Card() {
    return (
        <div className="card">
            <figure>
                <img src={img} alt=""/>
            </figure>
            <div className="card-content">
                <div className="card-text">
                    <h3>
                        Titolo del Post
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil necessitatibus beatae, veniam fuga similique illo iure itaque dolorem rem sed, aspernatur voluptatibus voluptates? Vel cum dolorum, aliquam tempora possimus modi quos unde. Nulla unde ipsa voluptatem facere accusamus delectus aliquid enim rem rerum in recusandae consequatur, dolore laborum distinctio consectetur eius iusto placeat. Omnis fugit, pariatur atque laboriosam doloremque itaque.
                    </p>
                </div>
                <div className="card-action">
                    <button className="button">Leggi di più</button>
                </div>
            </div>

        </div>
    )
}
export default Card