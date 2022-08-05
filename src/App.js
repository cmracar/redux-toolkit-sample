import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { getAllPosts, getAllUsers, getUserPosts } from "./features/posts/postSlice"
import { useEffect, useState } from "react"

function App() {
  const allPosts = useSelector((state) => state.post.posts)
  const allUsers = useSelector((state) => state.post.users)

  const dispatch = useDispatch()

  const [userID, setUserID] = useState();

  return (
    <>
      <div className="container mt-5 text-center">
        <h3>Redux Toolkit Sample Project</h3>
        <hr />
        <div className="row">
          <div className="col-md-6 mt-3">
            <h4>Get Posts by User</h4>

            <div className="col-md-12 mt-3">
              <h6>Search User's Posts</h6>
              <div className="row justify-content-between mb-3">
                <input className="form-control col-md-10" type="text" name="id" placeholder="Enter User ID" value={userID} onChange={(e) => setUserID(e.target.value)} />
                <button className="col-md-2 btn btn-success" onClick={() => dispatch(getUserPosts(userID))}>Search</button>
              </div>
            </div>

            <h4>Get All Posts</h4>
            <button className="btn btn-success m-2" onClick={() => dispatch(getAllPosts())}>Get All Posts</button>
            {
              allPosts?.map((item) => {
                return (
                  <>
                    <hr />
                    <div className="mt-2 mb-2 text-left p-2" key={item.id}>
                      <b>Item ID:</b> {item.id}
                      <br />
                      <b>Item Title:</b> {item.title}
                      <br />
                      <b>Description:</b> {item.body}
                    </div>
                    <hr />
                  </>
                )
              })
            }
          </div>
          <div className="col-md-6 mt-3">
            <h4>Users</h4>
            {
              allUsers?.map((item) => {
                return (
                  <>
                    <hr />
                    <div className="mt-2 mb-2 text-left p-2" key={item.id}>
                      <b>User ID:</b> {item.id}
                      <br />
                      <b>Name:</b> {item.name}
                      <br />
                      <b>E-Mail:</b> {item.email}
                    </div>
                    <hr />
                  </>
                )
              })
            }
            <button className="btn btn-success m-2" onClick={() => dispatch(getAllUsers())}>Get All Users</button>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
