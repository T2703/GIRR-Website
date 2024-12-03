import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Resources.css'

/**
 * The resources page where the users can find resources about this topic.
 * @returns The resources page
 */
function Resources() {
  return (
    <div>
      <Navbar />
      <div id="resources-container">
      <h1>Resources:</h1>
        <ul>
            <li>
            <Link to={`https://lgbtqia.ucdavis.edu/support/gender-inclusive-restrooms`}>LGBTQIA UC Davis Gender Inclusive Restrooms</Link>
            </li>
            <li>
            <Link to={`https://lgbtqia.ucdavis.edu/educated/glossary#c`}>LGBTQIA UC Davis Glossary</Link>
            </li>
            <li>
            <Link to={`https://campusmap.ucdavis.edu/?s=gender_inclusive`}>UC Davis Gender Inclusive Restroom Map</Link>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Resources;

// NOTES:
// <h1>To better inform yourseleves :)</h1> for the information page