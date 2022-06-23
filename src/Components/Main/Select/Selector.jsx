import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { SetSelectCategory } from "../../../BLL/Slices/MainSlice"
import s from "./Selector.module.scss"
const Selector = () => {
  const SelectCategory = useSelector(state => state.main.SelectCategory)
  const dispatch = useDispatch()
  const SetCategory = (e) => {
    dispatch(SetSelectCategory(e.target.value))
  }
  const options = [
    {
      value: "Show all",
      id: "1",
    },
    {
      value: "Design",
      id: "2",
    },
    {
      value: "Branding",
      id: "3",
    },
    {
      value: "illustration",
      id: "4",
    },
    {
      value: "Motion",
      id: "5",
    },
  ]
  return (
    <div className={s.container}>
      <label htmlFor="select"></label>
      <div className={s.selectorWrapper}>
        <select name="select" id="select"
          className={s.selector} defaultValue={"Show all"}
          onChange={(e) => SetCategory(e)}
          value={SelectCategory}>{options.map((opt) => {
            return (
              <option key={opt.id}>{opt.value}</option>
            )
          })}</select>
      </div>
    </div>
  )
}

export default Selector
