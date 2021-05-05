import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Index'
import Sidebar from '../Components/SideBar/Index'
import Hero from '../Components/Hero/Index'
import InfoSection from '../Components/Info/Index'
import Services from '../Components/Services/Index'
import { homeObj1, homeObj2, homeObj3 } from '../Components/Info/Data'
import Footer from '../Components/Footer/Index'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <InfoSection  {...homeObj1} />
            <InfoSection  {...homeObj2} />
            <Services />
            <InfoSection  {...homeObj3} />
            <Footer />
        </>
    )
}

export default Home
