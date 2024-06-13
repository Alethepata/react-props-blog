import Card from "./partials/Card"
import { posts } from '../db/posts.js';

function Main() {
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
        </main>
    )
}

export default Main