import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { getAllPosts } from "./features/posts/postSlice"
import { getAllUsers, getUsersPosts } from "./features/users/userSlice"
import { useState } from "react"

function App() {
  const allPosts = useSelector((state) => state.posts.posts)
  const allUsers = useSelector((state) => state.users.users)
  const usersPosts = useSelector((state) => state.users.usersPosts)

  const dispatch = useDispatch()

  const [userID, setUserID] = useState();

  return (
    <>
      <div className="container-fluid mt-5 text-center">
        <h3>Redux Toolkit Sample Project</h3>
        <hr />
        <div className="row">
          <div className="col-md-4 mt-3">
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
          <div className="col-md-4 mt-3">
            <h4>Get Posts by User</h4>
            <div className="row justify-content-between mt-3 mb-4">
              <input id="search-input" className="form-control col-md-9" type="text" name="id" placeholder="Enter User ID" value={userID} onChange={(e) => setUserID(e.target.value)} />
              <button id="search-button" className="col-md-3 btn btn-success" onClick={() => dispatch(getUsersPosts(userID))}>Search</button>
            </div>

            {
              usersPosts?.map((item) => {
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
          <div className="col-md-4 mt-3">
            <h4>Users</h4>
            <button className="btn btn-success m-2" onClick={() => dispatch(getAllUsers())}>Get All Users</button>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
