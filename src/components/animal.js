import './details.css';
import Related from './related';
import { Image, Form } from 'react-bootstrap';

function getDetails(details) {
  console.log(details);

  return {
    common_name: "Semi-collared Hawk",
    scientific_name: "Accipiter collaris",
    vulnerability_status: "vulnerable",
    conservation_measure: "Resource & habitat protection",
    imageLink: "http://faculty.ucr.edu/~chappell/INW/birds3raptors/semicollaredhawk019.jpg",
    assoc_habitats: [
      "Forest - Subtropical/Tropical Moist Montane"
    ],
    assoc_threats: [
      "Annual & perennial non-timber crops",
      "Agro-industry farming",
      "Livestock farming & ranching",
      "Agro-industry grazing, ranching or farming",
      "Work & other activities"
    ],
    assoc_countries: [
      "Colombia",
      "Ecuador",
      "Peru",
      "Venezuela, Bolivarian Republic of"
    ]
  }
}

function Animal(props) {
  const details = getDetails(props.details);

  return (
    <div id="main">
      <div id="data">
        <Image id="img" src={details.imageLink} />
        <div id="allTextData">
          <Form.Group className="textData">
            <Form.Label>Common name:</Form.Label>
            <Form.Control placeholder={details.common_name} readOnly />
          </Form.Group>
          <Form.Group className="textData">
            <Form.Label>Scientific name:</Form.Label>
            <Form.Control placeholder={details.scientific_name} readOnly />
          </Form.Group>
          <Form.Group className="textData">
            <Form.Label>Vulnerability status:</Form.Label>
            <Form.Control placeholder={details.vulnerability_status} readOnly />
          </Form.Group>
          <Form.Group className="textData">
            <Form.Label>Conservation measure:</Form.Label>
            <Form.Control placeholder={details.conservation_measure} readOnly />
          </Form.Group>
        </div>
      </div>
      <div id="allRelated">
        <Related type={1} related={details.assoc_threats} />
        <Related type={2} related={details.assoc_habitats} />
        <Related type={3} related={details.assoc_countries} />
      </div>
    </div>
  );
}

export default Animal;
