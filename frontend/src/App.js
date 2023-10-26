import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";

import TestimonialForm  from "./components/TestimonialComponents/Testimonial_form";
import TestimonialList from "./components/TestimonialComponents/TestimonialList";


import TopSignup from "./components/signups/top_signup";
import BottomSignup from "./components/signups/bot_signup";
import BlogForm from "./components/BlogComponents/BlogForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SingleBlogPage from "./components/BlogComponents/SingleBlogPage";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <h1>React Home Page</h1>

            <TestimonialForm/>
            <TestimonialList/>

            <TopSignup/>
            <BottomSignup/>
          </Route>
          <Route path='/blog/:blogId'>
            <SingleBlogPage />

          </Route>
          <ProtectedRoute>
            <Route exact path='/admin'>
              <h1>Admin Page</h1>
            </Route>
            <Route exact path='/admin/post-blog'>
              <BlogForm />
            </Route>
          </ProtectedRoute>
        </Switch>
      )}
    </>
  );
}

export default App;
