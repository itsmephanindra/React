import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import GetPost from "./GetPost";

function Posts() {
  let [postData, setPostsData] = useState([]);
  let [title, setTitle] = useState("");

  function showTitle(e) {
    setTitle(e);
  }

  useEffect(() => {
    async function getData() {
      let apiResponse = await axios.get("https://dummyjson.com/posts");
      setPostsData(apiResponse.data.posts);
      console.log(apiResponse);
    }

    getData();
  }, []);

  return (
    <div className="container">
      <div className="row"><div className="col-12"><Header /></div></div>

      <div className="row mt-3"><div className="col-12">Selected Title is :: {title} </div></div>

      <div className="row mt-3">
        {postData.map((post) => (
          <GetPost title={post.title} showTitle={showTitle}/>
        ))}
      </div>

      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Posts;
