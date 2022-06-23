import React, { useState } from 'react'
import { useSelector } from "react-redux"
import Item from './Item'
import s from "./Items.module.scss"
const ItemsWrapper = () => {
    const items = useSelector(state => state.main.items)
    const SelectCategory = useSelector(state => state.main.SelectCategory)
    const portionCount = Math.ceil(items.length / 9)
    const [portionNumber, SetportionNumber] = useState(1)

    const rightportionNumber = portionNumber * 9
    const rangeItems = () => {
        if (SelectCategory === "Show all") {


            const item = items.filter(p => p.id <= rightportionNumber).map(i => <Item key={i.id} id={i.id} name={i.name} category={i.category} imgSrc={i.imgSrc} />)

            return item
        } else {
            const item = items.filter(i => i.category === SelectCategory).map(i =>
                <Item key={i.id} name={i.name} id={i.id} category={i.category} imgSrc={i.imgSrc} />)
            return item
        }
    }
    return (
        <div className={s.itemsWrapper}>
            <div className={s.Items}>
                {rangeItems()}
            </div>


            <div className={s.btnWrapper}>
                {portionCount > portionNumber ? <button onClick={() => SetportionNumber(portionNumber + 1)}>Load more</button>
                    : <button onClick={() => SetportionNumber(portionNumber - 1)}>Back</button>}
            </div>
        </div>

    )
}

export default ItemsWrapper
