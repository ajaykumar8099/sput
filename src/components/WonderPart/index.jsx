import { Chrono } from "react-chrono"
import "./index.css"

const items = [
    {title:"You"},
    {title:"Anonymous 1"},
    {title:"Anonymous 2"},
    {title:"Anonymous 2"}
]

const WonderPart = () => {
return(
    <div className="woderpart-container">
        <div className="sub-wondered-card">
            <p className="wonder-para"> Let't Your Friends, and co-workers (anonymously) rate your skills. </p> 
            <h1 className="woder-head">Ever Wondered what others think of you ? </h1>
            <div className="wonder-items-container">
                <div className="sub-word-card">
                    <div >
                      <img src="https://www.shutterstock.com/image-vector/award-first-place-winner-prize-260nw-1590940444.jpg" alt="one-img" className="image"/>
                    </div> 
                    <p>Answer Questions on Your Social SKills</p>
                </div>
                <div className="sub-word-card">
                    <div >
                      <img src="https://www.shutterstock.com/image-vector/premium-award-ribbon-batch-icon-260nw-2154176829.jpg" alt="one-img" className="image"/>                  
                    </div> 
                    <p>Let, other anonymously, answer the same questions about you</p>
                </div>
                <div className="sub-word-card">
                    <div>
                      <img src="https://static.vecteezy.com/system/resources/previews/010/552/783/original/premium-award-ribbon-batch-icon-simple-illustration-number-three-free-vector.jpg" alt="one-img" className="image"/>
                    </div> 
                    <p>Find You Where You and others see the things same way</p>
                </div>
            </div>
            <div className="chrono-contiaier">
                <Chrono mode="HORIZONTAL" items={items}/>
            </div>
       </div>
    </div>
)
}
export default WonderPart