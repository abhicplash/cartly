// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./Pages/Home/Home";
// import ProductDetails from "./Pages/ProductDetails/ProductDetails";
// import SingleProduct from "./Pages/SingleProduct/SingleProduct";
// import Cart from "./Pages/Cart/Cart";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
// import Wishlist from "./Pages/Wishlist/Wishlist";
// import AuthPage from "./Pages/Auth/AuthPage";
// import { getCurrentUser } from "aws-amplify/auth";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     checkUser();
//   }, []);

//   const checkUser = async () => {
//     try {
//       const currentUser = await getCurrentUser();
//       setUser(currentUser);
//     } catch {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogin = (user) => {
//     setUser(user);
//   };

//   if (loading)
//     return (
//       <div style={{ textAlign: "center", marginTop: "100px" }}>Loading...</div>
//     );

//   return (
//     <>
//       <Provider store={store}>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<ProductDetails />} />
//             <Route path="/products/:id" element={<SingleProduct />} />
//             {/* <Route/> */}
//             <Route
//               path="/login"
//               element={
//                 !user ? <AuthPage onLogin={handleLogin} /> : <Navigate to="/" />
//               }
//             />
//             <Route
//               path="/cart"
//               element={user ? <Cart /> : <Navigate to="/login" />}
//             />
//             <Route
//               path="/Wishlist"
//               element={user ? <Wishlist /> : <Navigate to="/login" />}
//             />
//           </Routes>
//         </BrowserRouter>
//       </Provider>
//     </>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";
import AuthPage from "./Pages/Auth/AuthPage";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { getCurrentUser } from "aws-amplify/auth";
import NotFound from "./Pages/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>Loading...</div>
    );
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout user={user} onLogout={handleLogout}>
                <Home />
              </Layout>
            }
          />

          <Route
            path="/products"
            element={
              <Layout user={user} onLogout={handleLogout}>
                <ProductDetails />
              </Layout>
            }
          />

          <Route
            path="/products/:id"
            element={
              <Layout user={user} onLogout={handleLogout}>
                <SingleProduct />
              </Layout>
            }
          />

          <Route
            path="/cart"
            element={
              user ? (
                <Layout user={user} onLogout={handleLogout}>
                  <Cart />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/wishlist" // ✅ fixed lowercase
            element={
              user ? (
                <Layout user={user} onLogout={handleLogout}>
                  <Wishlist />
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/login"
            element={
              !user ? <AuthPage onLogin={handleLogin} /> : <Navigate to="/" />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
