import React from "react";
import { Link } from "react-router-dom";

/*
this view is to show the posts in the home page :
make the post itself a link to be able to oppen it in a separate view
in this view I have to show the title in h2 form
and date as well has to be shown by using its styling "psotDate"
when it comes to the body I dont need to show all the body, it can be big body so I show 30 leters only

*/

const Post = ({ post }) => {
  return (
    <div className="post">
        <Link to={`post/${post.id}`} >
            <h3> {post.title} </h3>
            <p className="postDate"> {post.datetime} </p>
            <p> 
                {
                    (post.body).length >= 30
                        ? post.body
                        : `${(post.body).slice(0,30)}...`
                } 
            </p>

        </Link>
    </div>
  );
};

export default Post;
/* 
  <article className='post'>
        <Link to={`/post/${post.id}`} >
            <h3> {post.title} </h3>
            <p className='psotDate'> {post.datetime} </p>
        </Link>
        <p className='postBody' >{
            (post.body).length <=30 
             ? post.body
             : ` ${(post.body).slice(0,30)}... ` 
         }

        </p>
    </article>
*/
