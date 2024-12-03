import { Link } from 'react-router-dom';

/**
 * The dropdown menu for advocacy.
 * @returns The dropdown menu for Advocacy
 */
function Dropdown() {
    return (
    <div className="dropdown-menu">
        <ul>
            <li>
                <a href="https://chng.it/VLHPkMKjQS" target="_blank" rel="noopener noreferrer">
                    Petition
                </a>
            </li>
            <li>
                <Link to={`/`}>Reach Out To Advocacy Websites (WIP)</Link>
            </li>
        </ul>
    </div>
);
};

export default Dropdown;