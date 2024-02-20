import "./Home.css"
const Home = () => {
return(
    <div className="home-bg-container">
        <div className="home-sub-card">
            <p className="home-para">Ahead up</p>
            <h1 className="home-head">Master Your life by <br/> Mastering Emotions</h1>
            <div className="home-sub">
                <div className="apple-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png" alt="apple" className="apple-logo"/>
                <div className="rating-container">
                    <img src="data:image/png;base64,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" alt="star-img" className="star-img"/>
                    <p className="review-100">100+ App Store Reviews</p>
                </div>
            </div>
            </div>
        </div>
    </div>
)
}
export default Home