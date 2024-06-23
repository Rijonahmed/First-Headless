import React, { useEffect, useState } from 'react';
import axios from 'axios';
const PostsWP = () => {

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        let url = `${process.env.REACT_APP_API_siteUrl}/wp-json/wp/v2/posts`
        console.log(url);
        axios.get(url)
        .then(res => {
            setPosts(res.data)});
       

        },[]);

        console.log(posts);
    return (
        <div>
            <h1>Word press posts</h1>

            {
              posts.map((post , i) => <div key={i}>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={post?.featured_image_src} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{post?.title?.rendered}</h2>
                <p dangerouslySetInnerHTML={{__html: post?.content?.rendered}}></p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
                
                
              </div>)
            }

            
        </div>
    );
};

export default PostsWP;