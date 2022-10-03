import React from 'react'
import './SecondRowCardStyle.css'


export default function SecondRowCard({title, data, style, progressBar, icon}) {

    const ProgressBarToggle = progressBar ? <div className="ProgressBar"></div> : <div className='noProgressBar'></div>

    return (
        <div className="card-container">
            <div className="card-data-wrapper">
                <div className="left-side" style={style.LeftSide}></div>
                <div className="right-side">
                    <div className="title-data">
                        <p className="card-title" style={style.Title}>{title}</p>
                        <p className="card-black-text">{data}</p>
                    </div>
                    <div className="ProgressBarContainer">
                        {ProgressBarToggle}
                    </div>
                    <div className="icon">
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    )
}
