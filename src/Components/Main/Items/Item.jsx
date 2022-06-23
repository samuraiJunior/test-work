import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { DeleteItem, SetSelectCategory, SetSelectItem } from '../../../BLL/Slices/MainSlice'
import s from "./Items.module.scss"

const Item = ({ imgSrc, category, name, id }) => {
  const dispatch = useDispatch()
  const selectItem = useSelector(state => state.main.selectItem)
  const SetCategory = () => {
    dispatch(SetSelectCategory(category))
  }
  const handleClickforImg = (e) => {
    dispatch(SetSelectItem(id))
  }
  const removeItem = (e) => {
    if (e.key === "Delete") {
      if (selectItem.isSelected) {
        dispatch(DeleteItem(id))
        dispatch(SetSelectItem(null))
      }
    }
  }
  return (
    <div tabIndex={"0"} onKeyUp={(e) => removeItem(e)}
      className={selectItem.id === id && selectItem.isSelected ? `${s.ItemCard} ${s.active}` : s.ItemCard}>
      <img onClick={(e) => handleClickforImg(e)} src={imgSrc} alt="img" />
      <button onClick={SetCategory}>{category}</button>
      <h3>{name}</h3>
    </div>
  )
}

export default Item
