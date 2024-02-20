import {Chrono} from "react-chrono"
import "./index.css"

const items = [
    { cardTitle:"It's not easy as it 1-2-0",
      cardSubtitle:`The jourrney of change may be long,but our session are quick
        we get the point and tell you what you want to know.he jourrney of change may be long.`
    },
    { cardTitle:'Old habits are hard to break',
      cardSubtitle:`bad behaviors die hard. Fortunately,we give you 
        great science-backend techinques. bad behaviors die hard.`
    },
    { cardTitle:"It's not easy as it 1-2-0",
      cardSubtitle:`The jourrney of change may be long,but our session are quick
        we get the point and tell you what you want to know.he jourrney of change may be long.`
    },
    { cardTitle:"It's not easy as it 1-2-0",
      cardSubtitle:`The jourrney of change may be long,but our session are quick
        we get the point and tell you what you want to know. bad behaviors die hard.`
    },
]

const SelfImprovement = () =>{
    return(
        <div className="self-container">
            <p className="self-para">Wrong with self-improvement & how we're fixing it.</p>
            <div className="self-card"> 
               <h1 className="self-head">Self Improvement.Ugh.</h1>
               <img src="https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHM0OYfiFeMI2p9MWie0CvL99U4GA1gf6_kayTt_kBblFwHwo8BW8JXlqfnYxKPmmBaM.nlv6lSmXhGY0w.y7u6LH3MY2btzV_PcIS7W272o74EvEDi5S4xhdoBizRBkGiIBHQYZ73JIE5vuEGnrP9W0-&format=source" className="img" alt="em-img"/>
            </div>
            <Chrono mode="VERTICAL" items={items}/>
        </div>
        
    )

}
export default SelfImprovement