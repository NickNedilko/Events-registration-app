import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Container } from "./SharedLayout.styled";
import { Toaster } from "react-hot-toast";

export const SharedLayout = () => {
    return (       
    <>
        <Header />
            <main>
            <Container>
                 <Suspense fallback={<div>Loading</div>}> 
            <Outlet />
                    </Suspense> 
                    
                </Container> 
            <Toaster />    
        </main>
        <Footer />
    </>
    );
};