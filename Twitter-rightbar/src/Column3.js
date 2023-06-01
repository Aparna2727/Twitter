import React from 'react'
import Styles from './Column.module.css'
import Searchbar from './RightBarsection/Searchbar/Searchbar'
import TrendBox from './RightBarsection/TrendBox/TrendBox'
import FollowBox from './RightBarsection/FollowBox/FollowBox'

function Column3() {
  return (
    <div className={Styles.column3}>
        <Searchbar/>
        <TrendBox/>
        <FollowBox/>
    </div>
  )
}

export default Column3