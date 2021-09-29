import './details.css';
import Related from './related';
import { Image, Form } from 'react-bootstrap';

function getDetails(details) {
  console.log(details);
  
  return {
    name: "Artificial/Aquatic - Ponds (below 8ha)",
    image: "http://thumb1.shutterstock.com/display_pic_with_logo/1771478/323878760/stock-photo-small-artificial-decorative-pond-with-rocks-and-plants-on-the-backyard-in-summer-323878760.jpg",
    suitability: "Suitable",
    assoc_animals: [
      "Chaco Side-necked Turtle"
    ],
    assoc_countries: [
      "Paraguay",
      "Argentina",
      "Bolivia, Plurinational States of"
    ],
    assoc_threats: [
      "Temperature extremes",
      "Livestock farming & ranching",
      "Problematic native species/diseases",
      "Intentional use: (subsistence/small scale) [harvest]",
      "Droughts",
      "Agro-industry grazing, ranching or farming",
      "Fishing & harvesting aquatic resources",
      "Agro-industry farming",
      "Annual & perennial non-timber crops"
    ]
  }
}

function Habitat(props) {
  const details = getDetails(props.details);

  return (
    <div id="main">
      <div id="data">
        <Image id="img" src={details.image} />
        <div id="allTextData">
          <Form.Group className="textData">
            <Form.Label>Name:</Form.Label>
            <Form.Control placeholder={details.name} readOnly />
          </Form.Group>
          <Form.Group className="textData">
            <Form.Label>Suitability:</Form.Label>
            <Form.Control placeholder={details.suitability} readOnly />
          </Form.Group>
        </div>
      </div>
      <div id="allRelated">
        <Related type={0} related={details.assoc_animals} />
        <Related type={1} related={details.assoc_threats} />
        <Related type={3} related={details.assoc_countries} />
      </div>
    </div>
  );
}

export default Habitat;
