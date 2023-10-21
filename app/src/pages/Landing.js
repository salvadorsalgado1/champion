import react from 'react'
import { Link } from 'react-router-dom'
import '../styles/Landing.css'
const Landing = () => {
    return(
        <div className="landing">
            <div className="container">
                <div className='row align-items-start'>
                    <h1>Landing Page</h1>
                    <p><Link className="btn btn-primary" to="/home">Home</Link></p>
                </div>
            </div>
            
        </div>
    )
}

export default Landing