import React from 'react'
import underConstruction_img from '../../assets/under-construction-podium.jpg';

const UnderConstruction = () => {
    return (
        <div style={{textAlign: 'center', paddingTop: '3rem'}}>
            {/* <h1>This Experience App is</h1> */}
            <img src={underConstruction_img} alt="Under Construction"/>
        </div>
    )
}

export default UnderConstruction
