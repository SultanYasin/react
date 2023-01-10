import "./App.css";
import { Route, Routes, Switch} from "react-router-dom";
import React, { useState, useEffect} from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import NewPost from "./Components/NewPost";
import PostPage from "./Components/PostPage";
import About from "./Components/About";
import Missing from "./Components/Missing";
import Footer from "./Components/Footer";
import Tamim from "./Components/tamim";
import { useHistory } from 'react-router-dom';



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First", datetime: "July 01", body: "buy some stuff" },
    { id: 2, title: "Secound", datetime: "Aug 01", body: "buy food" },
    { id: 3, title: "Theard", datetime: "Sep 01", body: "buy water " },
  ]);

  
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const history = useHistory();
/* 
  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])
 

   */

  useEffect(() => {

    const filteredResult = posts.filter( post =>
       ((post.title).toLowerCase().includes(search.toLowerCase()))
    || (post.body).toLowerCase().includes(search.toLowerCase()) )
    
    setSearchResults(filteredResult.reverse())

  },[posts , search])

  const currentDate = new Date();
  const currentDate2  = currentDate.toLocaleDateString();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = new Date().toString() ;
    const newPost = { id, title: postTitle, datetime , body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    history.push('/');
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    history.push('/');
  }

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path="/">
          <Home posts={searchResults} />
        </Route>
        <Route exact path="/post">
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        </Route>
        <Route path="/post/:id">
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>
        <Route path="/about" component={About} />
        <Route path="*" component={Missing} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
/* 
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  return (
      <div className="App">
        <Header title="React from app.js" />
        <Nav search={search} setSearch={setSearch} />
<Switch></Switch>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route  path="/post" component={NewPost} />
          <Route exact path="/post/:id" component={PostPage} />
          <Route path="/about" component={About} />
          <Route
            path="/*"
            render={() => <Missing message="Oops! The page you are looking for does not exist." />}/>
        </Routes>

        <Tamim />
        <Footer />
      </div>
  );
} */

