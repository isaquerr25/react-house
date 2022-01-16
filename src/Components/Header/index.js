/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css'
import logo from '../../img/logo.svg';
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return(
        <div className="container-menu">
            <div  className='logo'>
                <img src={logo} alt="Real Estate" />
            </div>
            <ul className='menu'>
                <li>
                    <a className='font-p' href="#">HOME</a>
                </li>
                <li>
                    <a href="#">PROPERTIES</a>
                </li>
                <li>
                    <a href="#">AGENTS</a>
                </li>
                <li>
                    <a href="#">BLOG</a>
                </li>
            </ul>
            <div className="btn font-p pointer-remove">
                <a href="#">Login</a>
            </div>
        </div>
    )
}