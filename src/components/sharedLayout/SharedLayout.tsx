import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Container } from "./SharedLayout.styled";

export const SharedLayout = () => {
    return (       
    <div >
        <Header />
            <main>
            <Container>
                 <Suspense fallback={<div>Loading</div>}> 
            <Outlet />
                    </Suspense> 
                    
            </Container>   
        </main>
        <Footer />
    </div>
    );
};