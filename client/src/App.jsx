import React from "react";
import { Button } from "./components/ui/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteAddCategory, RouteBlog, RouteBlogAdd, RouteBlogByCategory, RouteBlogDetails, RouteBlogEdit, RouteCategoryDetails, RouteCommentDetails, RouteEditCategory, RouteIndex, RouteProfile, RouteSearch, RouteSignIn, RouteSignUp, RouteUser } from "./helpers/RouteName";
import Layout from "./layout/Layout";
import Index from "./pages/Index";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Profile from "./pages/Profile";
import AddCategory from "./pages/Category/AddCategory";
import CategoryDetails from "./pages/Category/CategoryDetails";
import EditCategory from "./pages/Category/EditCategory";
import AddBlog from "./pages/Blog/AddBlog";
import BlogDetails from "./pages/Blog/BlogDetails";
import EditBlog from "./pages/Blog/EditBlog";
import SingleBlogDetails from "./pages/SingleBlogDetails";
import BlogByCategory from "./pages/Blog/BlogByCategory";
import SearchResult from "./pages/SearchResult";
import Comments from "./pages/Comments";
import User from "./pages/User";
import AuthRouteProtection from "./components/AuthRouteProtection";
import OnlyAdminAllowed from "./components/OnlyAdminAllowed";

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path={RouteIndex} element={<Layout />}>
      <Route  index element={<Index />} />

      {/* public routes  */}
      {/* blog */}
       <Route  path={RouteBlogDetails()} element={<SingleBlogDetails />} />
      <Route  path={RouteBlogByCategory()} element={<BlogByCategory />} />
      <Route  path={RouteSearch()} element={<SearchResult />} />
      
      

        {/* user acsessable routes  */}
      <Route element={<AuthRouteProtection/>}>
      <Route  path={RouteProfile} element={<Profile />} />
      <Route  path={RouteBlogAdd} element={<AddBlog/>} />
      <Route  path={RouteBlog} element={<BlogDetails />} />
      <Route  path={RouteBlogEdit()} element={<EditBlog />} />
      <Route  path={RouteCommentDetails} element={<Comments />} />
      </Route>
       
       {/* only Admin acsessable routes  */}
      <Route element={<OnlyAdminAllowed/>}>
      <Route  path={RouteProfile} element={<Profile />} />
      <Route  path={RouteAddCategory} element={<AddCategory />} />
      <Route  path={RouteCategoryDetails} element={<CategoryDetails />} />
      <Route  path={RouteEditCategory()} element={<EditBlog />} />
      <Route  path={RouteUser} element={<User />} />
      
      </Route>
       
      </Route>

     {/* Authentication Routes  */}
    <Route path={RouteSignIn} element={<Signin/>}/>
    <Route path={RouteSignUp} element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
)
};

export default App;
