import React, { Fragment, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Header from "../component/header/Header";
import Layout from "../component/menuResturant/orderResponsiv/Layout";
import Login from "../component/loginandregister/Login";
import Register from "../component/loginandregister/Register";
import AboutUs from "../component/Footer/AboutUs";
import CollectingComponentsForMenuResturant from "../component/menuResturant/layout/CollectingComponentsForMenuResturant";
import CollectingComponentsForMenuResturant from "../component/home-Page/layout/CollectingComponentsForHomepage";


const Paginition = () => {

    const context = useContext(ContextOrderFood)

    const location = useLocation()
    let header = ''
    let footer = ''
    if (location.pathname === "/login" || location.pathname === "/register") {
        header = ''
        footer = ''
    } else {
        header = <Header />
        footer = <Footer />
    }

    return (
        <Fragment>
            {header}
            <Routes>
                <Route path="/shoppingcart" element={<Layout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/aboutus" element={<AboutUs />} />
                {context.resturant.map(o => (
                    <Route path={o.name} element={<CollectingComponentsForMenuResturant />} />
                ))}
                <Route path="/" exact element={<CollectingComponentsForHomepage />} />
            </Routes>
            {footer}
        </Fragment>
    )

}

export default Paginition