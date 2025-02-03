import { Link } from "react-router"
import { motion } from "framer-motion"

import { fadeTopBottom } from "../animations"
import { useState } from "react"

const links = [
    {
        redirect: "/gallery",
        name: "Gallery",
    },
    {
        redirect: "/panoramas",
        name: "Panoramas"
    },
    {
        redirect: "/",
        name: "Home"
    },
    {
        redirect: "/gear",
        name: "Gear"
    },
    {
        redirect: "/",
        name: "Support me"
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

   return(
    <motion.div 
    variants={fadeTopBottom}
    initial={"hidden"}
    animate={"visible"}
    
    className="navbar">
        <div className="left">
            <div className="nav-item">
                <Link to={"/gallery"}>Gallery</Link>
            </div>
            <div className="nav-item">
                <Link to={"/panoramas"}>Panoramas</Link>
            </div>
        </div>
        <div className="center">
            <span className="line"></span>
            <div className="nav-item">
                <Link to={"/"}>Home</Link>
            </div>
            <span className="line"></span>
        </div>
        <div className="right">
            <div className="nav-item">
                <Link to={"/gear"}>Gear</Link>
            </div>
            <div className="nav-item">
                <Link to={""}>Support me</Link>
            </div>
        </div>

        <div className="logo">
            <Link to={"/"}>Vlad.dji</Link>
        </div>
        <div 
        onClick={() => {
            setIsOpen((e) => !e)
        }}
        className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>

        <ExtendedNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
   )
}


function ExtendedNavbar(props: {
    isOpen: boolean,
    setIsOpen: (args0: boolean) => void
}) {

    

    return(
        <div className={
            `extended-nav ${props.isOpen ? "extended-nav-open" : ""}`
        }>
            {links.map((link: linkType, index: number) => {
                return <div 
                key={index}
                onClick={() => props.setIsOpen(false)}
                className="nav-item">
                    <Link to={link.redirect}>{link.name}</Link>
                </div>
            })}
        </div>
    )
}