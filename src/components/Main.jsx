import Card from "./partials/Card"
import { posts } from '../db/posts.js';

function Main() {
    const tags = [];

    posts.map(post => post.tags.map(tag => {
        if (!tags.includes(tag)) {  
            tags.push(tag)
        }}
    ));

    return (
        <main>
            <div className="cards">
                {
                    posts.map(post => (
                        post.published &&
                            <Card
                                key={`post_${post.id}`}
                                image={post.image}
                                title={post.title}
                                content={post.content}
                                tags={post.tags}
                                published={post.published}
                            />
                    ))
                }
            </div>
            <div className="tags-container">
                <ul>
                    {
                        tags.map((tag, index) => (
                            <li className={`tag tag_${tag}`} key={`tag-${index}`}>{ tag }</li>
                        ))
                    }
                </ul>
            </div>
        </main>
    )
}

export default Main