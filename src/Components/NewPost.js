import React from "react";

function NewPost({handleSubmit,postTitle,setPostTitle,postBody,setPostBody,}) {

  return (
    <main>
      <h2>New Post</h2>
        <form className="newPostForm" onSubmit={handleSubmit} >

          <label htmlFor="postTitle" >Title : </label>
          <input 
              id="postTitle"
              placeholder="write the title here"
              autoFocus
              required
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
          />

          <label htmlFor= "postDescription" >Description : </label>
          <textarea 
            id="postDescription"
            autoFocus
            placeholder="write the description here"
            value={postBody}
            onChange= {(e) => setPostBody(e.target.value)}
            required
          />

          <button onSubmit={handleSubmit}>Submit</button>

        </form>
    </main>
  );
}

export default NewPost;
/* 
 <form className="newPostForm" onSubmit={handleSubmit} >
        <label htmlFor="postTitle"></label>
        <input
            id="postTitle"
            placeholder="write your title here "
            required
            autoFocus
            value={postTitle}
            onChange={(e)=> setPostTitle(e.target.value)}  
        />
        <label htmlFor="postBody"></label>
        <textarea
            id="postBody"
            placeholder="write description here "
            required
            autoFocus
            value={postBody}
            onChange={(e)=> setPostBody(e.target.value)} 
        />
        <button type="submit" >Submit</button>

      </form>
*/