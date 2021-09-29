import './details.css';
import Related from './related';
import { Image, Form } from 'react-bootstrap';

function getDetails(name) {
  // TODO: get details from API
  return {
    name: "Agro-industry farming",
    image: "https://www.foodbusinessnews.net/ext/resources/2019/9/TractorFarm_Lead.jpg",
    timing: "ongoing",
    severity: "4.5",
    assoc_animals: [
      "Desert Lidless Skink",
      "Chaco Side-necked Turtle",
      "Two-streaked Snake-eyed Skink",
      "Be’er Sheva Fringe-fingered Lizard",
      "Semi-collared Hawk",
      "Oaxaca Arboreal Alligator Lizard",
      "Long-faced Loach",
      "Wattled Guan",
      "Terrestrial Arboreal Alligator Lizard",
      "Nicobar Sparrowhawk",
      "Brown Pricklenape"
    ],
    assoc_habitats: [
      "Wetlands (inland) - Shrub Dominated Wetlands",
      "Wetlands (inland) - Permanent Rivers/Streams/Creeks (includes waterfalls)",
      "Forest - Temperate",
      "Grassland - Temperate",
      "Forest - Subtropical/Tropical Moist Lowland",
      "Desert - Temperate",
      "Artificial/Aquatic - Ponds (below 8ha)",
      "Shrubland - Subtropical/Tropical Dry",
      "Artificial/Terrestrial - Rural Gardens",
      "Wetlands (inland) - Seasonal/Intermittent Freshwater Marshes/Pools (under 8ha)",
      "Forest - Subtropical/Tropical Moist Montane",
      "Artificial/Terrestrial - Subtropical/Tropical Heavily Degraded Former Forest",
      "Wetlands (inland) - Freshwater Springs and Oases",
      "Artificial/Terrestrial - Plantations",
      "Shrubland - Temperate",
      "Grassland - Subtropical/Tropical Seasonally Wet/Flooded"
    ]
  }
}

function Threat(props) {
  const details = getDetails(props.name);

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
            <Form.Label>Status:</Form.Label>
            <Form.Control placeholder={details.timing} readOnly />
          </Form.Group>
          <Form.Group className="textData">
            <Form.Label>Severity:</Form.Label>
            <Form.Control placeholder={details.severity + " / 5"} readOnly />
          </Form.Group>
        </div>
      </div>
      <div id="allRelated">
        <Related type={0} related={details.assoc_animals} />
        <Related type={2} related={details.assoc_habitats} />
      </div>
    </div>
  );
}

export default Threat;
