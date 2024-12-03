import React from 'react';
import Navbar from './Navbar';
import '../styles/Main.css'

/**
 * The main page that informs the auidence of the gender neutral bathrooms.
 * @returns The main starting page.
 */
function Main() {
  return (
    <div>
      <Navbar />

      <div id="main-container">
        <h1>Gender Neutral Restroom UC Davis</h1>
        <p>
          Physical violence and verbal harassment regularly occur against transgender and gender non-conforming peoples when using binary restrooms <a href="#footnote-1">[1]</a>.
        </p>
        <p>
          “1 in 22 Aggies are transgender or nonbinary,” making up a considerable portion of our community <a href="#footnote-2">[2]</a>. 
        </p>
        <p>
          Binary restrooms have been the source of power and control over gender, specifically reinforcing gender binaries <a href="#footnote-1">[1]</a>.
        </p>
        <p>
          Transgender and gender non-conforming peoples have intersectionally experienced historical oppression through gender, disabilities, 
          and race most predominantly, as public restrooms were segregated by race and lacked accessibility laws for even longer. <a href="#footnote-3">[3]</a>.
        </p>
        <p>
          Transgender and gender neutral peoples would be necessarily safer through having regular access to gender inclusive restrooms.
        </p>
        <p>
          The needs of trans and GNC peoples will not subside without organizational consciousness and action to follow.
        </p>
      </div>

      <div style={{ height: '400px' }}></div>
      <div style={{ marginTop: '50px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
        <h1>Citations:</h1>
        <p id="footnote-1">
          <a href="https://doi.org/10.1080/0966369X.2015.1073699" target="_blank" rel="noopener noreferrer">
            [1] (Bender-Baird, K. (2016). Peeing under surveillance: bathrooms, gender policing, and hate violence. 
            Gender, Place and Culture: A Journal of Feminist Geography, 23(7), 983–988.)
          </a>
        </p>
        <p id="footnote-2">
          <a href="https://lgbtqia.ucdavis.edu/trans-student-rights" target="_blank" rel="noopener noreferrer">
            [2] 
            LGBTQIA Resource Center
            UC Davis
          </a>
        </p>
        <p id="footnote-3">
          <a href="https://transgenderlawcenter.org/wp-content/uploads/2012/05/94930982-PIP-Resource-Guide.pdf" target="_blank" rel="noopener noreferrer">
            [3] 
            Transgender Law Center & San Francisco Human Rights Commission. (2005). 
            A resource guide for transgender activists and allies. 
            In Transgender Law Center. 
          </a>
        </p>
      </div>
    </div>
  );
}

export default Main;

// Old stuff just incase.
/*return (
  <div>
    <Navbar />
    <h1>Gender Neutral Bathroom UC Davis</h1>
    <h3>
      Transgender and gender non-conforming members of UC Davis are often institutionally marginalized and diminished, 
      including in their control, knowledge, and participation in the facilities that marginalize them. 
      Lack of gender neutral restrooms, and the inflexible and esoteric nature of requesting such restrooms, 
      barricades queer UCD members from being able to change the deleterious designations, and instead promote stagnant stressors.
    </h3>
    <br />
    <h3>
      With the inclusion of gender neutral bathrooms, it would be very beneficial for transgender and gender non-conforming members of UC Davis, 
      as it would provide a safer environment for bathrooms, where those who identify can feel comfortable in those areas. 
      This website is designed to inform about why UC Davis should include gender neutral bathrooms on campus.
    </h3>
    <br />
    <h3>
      About 1 in 22 students at UC Davis are transgender or nonbinary. This would help give reason to why
      gender neutral bathrooms are needed on campus because students may not correlate with cultural gender bathroom.
      Gender neutral bathrooms are single stall, lockable bathrooms that anyone of all genders can use these bathrooms provide
      a more safer and private space for transgender or nonbinary people and also for those who face disabilities. 
    </h3>
  </div>
);*/

// NOTES:
// After header 3 (second h3) add something about the high need of gender neutral bathrooms and why it's valid, UC Davis non-genders popluation statistics, 
// 

// Navbar: 
// Info tab, avodacsity, resources, connect with (living doc where they can jot down info and share resources), petitoin