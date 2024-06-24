import './navbar.scss'
import arrowdown from '../images/icon-arrow-down.svg'
import logo from '../images/logo.svg'
import calender from '../images/icon-calendar.svg'
import reminder from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'
import todo from '../images/icon-todo.svg'
import close from '../images/icon-close-menu.svg'
import menu from '../images/icon-menu.svg'
const Navbar = () => {
const show =()=>{
    document.body.classList.toggle("show")
    document.body.classList.remove("hide")
}
const hide =()=>{
    document.body.classList.toggle("hide")
    document.body.classList.remove("show")
}
const showfeatures = ()=>{
    document.body.classList.toggle("features")
    document.body.classList.remove("Hfeatures")
}
const showcompany = ()=>{
    document.body.classList.toggle("companies")
    document.body.classList.remove("Hcompanies")
}
const hidefeatures = ()=>{
    document.body.classList.toggle("Hfeatures")
    document.body.classList.remove("features")
}
const hidecompany = ()=>{
    document.body.classList.toggle("Hcompanies")
    document.body.classList.remove("companies")
}
    return (
        <>
            <div className="whole">
                <img src={menu} alt="" id='menu' onClick={show} />
                <div className="left">
                    <div className='img'>
                        <img src={logo} alt="" />
                    </div>

                    <div className="navbar1">
                        <img src={close} alt="" id='close' onClick={hide} />
                        <div><a href="#" className='feature' onClick={showfeatures} >Features </a> <img src={arrowdown} alt="" id='arrow1'/>
                            <div className='extra' onMouseLeave={hidefeatures}>
                                <div><span><img src={todo} alt="" /><a href="#">Todo List</a></span></div>
                                <div><span><img src={calender} alt="" /><a href="#">Calendar</a></span></div>
                                <div><span><img src={reminder} alt="" /><a href="#">Reminder</a></span></div>
                                <div><span><img src={planning} alt="" /><a href="#">Planning</a></span></div>
                            </div>
                        </div>
                        <div><a href="#" onClick={showcompany}>Company </a> <img src={arrowdown} alt="" />
                            <div className='extra1' onMouseLeave={hidecompany}>
                                <div><span><a href="#">History</a></span></div>
                                <div><span><a href="#">Our team</a></span></div>
                                <div><span><a href="#">Blog</a></span></div>
                            </div>
                        </div>
                        <div><a href="#">Career</a></div>
                        <div><a href="#">About</a></div>

                    </div>
                </div>

                <div className="regester">
                    <a href="#">Login</a>
                    <div>
                    <a href="#" id='regi'>Register</a>
                    </div>
                </div>


            </div>

        </>
    )
}
export default Navbar