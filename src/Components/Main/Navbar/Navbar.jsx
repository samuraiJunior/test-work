import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { SetSelectCategory } from '../../../BLL/Slices/MainSlice'
import s from "./Navbar.module.scss"

const Navbar = () => {
    const dispatch = useDispatch()
    const [active, setActive] = useState("Show all")
    const SelectCategory = useSelector(state => state.main.SelectCategory)
    const ToggleActiveClass = (name) => {
        if (active === name) {
            return s.active
        }
        if (SelectCategory === name) {
            setActive(name)
            return s.active
        }
        return null
    }
    const SetCategory = (name) => {
        setActive(name)
        dispatch(SetSelectCategory(name))
    }
    return (
        <ul className={s.navbar}>
            <li onClick={() => SetCategory("Show all")} className={ToggleActiveClass("Show all")}>Show all</li>
            <li onClick={() => SetCategory("Design")} className={ToggleActiveClass("Design")}>Design</li>
            <li onClick={() => SetCategory("Branding")} className={ToggleActiveClass("Branding")}>Branding</li>
            <li onClick={() => SetCategory("illustration")} className={ToggleActiveClass("illustration")}>illustration</li>
            <li onClick={() => SetCategory("Motion")} className={ToggleActiveClass("Motion")}>Motion</li>
        </ul>
    )
}

export default Navbar
