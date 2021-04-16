import {Link} from 'react-router-dom'

const NavBar = () => {

    return (

        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/matches">Matches</Link>

            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
        </ul>
    )
}
export default NavBar