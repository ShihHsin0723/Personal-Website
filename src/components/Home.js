import "../styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Home () {
    return (
        <div className="banner" id="home">
            <div className='name'>
                <h1 className='name name1'>Shih-Hsin Chuang</h1>
                <h2 className='name name2'>(Phoebe)</h2>
                <br />
                <h3 className='jobs'>Software Engineer | Web Developer </h3>
            </div>
            <div className='social-icon'>
                <a href='https://github.com/ShihHsin0723' target="_blank" rel="noreferrer"><span><FontAwesomeIcon icon={faGithub} className='icon'/></span></a>
                <a href='mailto:shihhsinchuang@gmail.com' target="_blank" rel="noreferrer"><span><FontAwesomeIcon icon={faEnvelope} className='icon' /></span></a>
                <a href='https://www.linkedin.com/in/shih-hsin-chuang/' target="_blank" rel="noreferrer"><span><FontAwesomeIcon icon={faLinkedinIn} className='icon'/></span></a>
            </div>
        </div>
    )
}

export default Home