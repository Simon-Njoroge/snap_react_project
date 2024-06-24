import './body.scss'
import databiz from '../images/client-databiz.svg'
import audiophil from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'
const Body = () => {
    return (
        <>
            <div>

                <div className="entire">
                    <div className="leftside">
                        <div className="head">
                            <h1>Make remote work</h1>
                        </div>
                        <div className="paragraph">
                            <p>get your team in sync, no matter your location
                                streamline processess, Create team rituals, and
                                watch productivity soar.
                            </p>
                            <div className="learnmore">
                                <a href="#">Learn more</a>
                            </div>
                            <div className="logos">
                                <div><img src={databiz} alt="" /></div>
                                <div><img src={audiophil} alt="" /></div>
                                <div><img src={meet} alt="" /></div>
                                <div><img src={maker} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="rightside">

                    </div>

                </div>
            </div>
        </>
    )
}
export default Body