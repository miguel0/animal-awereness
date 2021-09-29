import './details.css';
import Related from './related';
import { Image, Form } from 'react-bootstrap';

function getDetails(name) {
  // TODO: get details from API
  return {
    name: "Azerbaijan",
    flag: "http://cdn.wonderfulengineering.com/wp-content/uploads/2015/07/azerbaijan-flag-13.png",
    coordinate: "lat: 40.143105 lng: 47.576927",
    assoc_animals: [
      "Northern Goshawk",
      "Two-streaked Snake-eyed Skink",
      "Caucasian Bream",
      "Levant Sparrowhawk",
      "Shikra",
      "Redpoll"
    ],
    assoc_habitats: [
      "Forest - Boreal",
      "Artificial/Terrestrial - Urban Areas",
      "Wetlands (inland) - Permanent Rivers/Streams/Creeks (includes waterfalls)",
      "Savanna - Dry",
      "Forest - Temperate",
      "Grassland - Temperate",
      "Forest - Subtropical/Tropical Moist Lowland",
      "Shrubland - Subtropical/Tropical Dry",
      "Artificial/Terrestrial - Rural Gardens",
      "Wetlands (inland) - Permanent Freshwater Marshes/Pools (under 8ha)",
      "Grassland - Subtropical/Tropical Dry",
      "Artificial/Terrestrial - Plantations",
      "Shrubland - Mediterranean-type Shrubby Vegetation",
      "Wetlands (inland) - Permanent Freshwater Lakes (over 8ha)",
      "Grassland - Tundra",
      "Shrubland - Temperate"
    ]
  }
}

function Animal(props) {
  const details = getDetails(props.name);

  return (
    <div id="main">
      <div id="data">
        <Image id="img" src={details.flag} />
        <div id="allTextData">
          <Form.Group className="textData">
            <Form.Label>Name:</Form.Label>
            <Form.Control placeholder={details.name} readOnly />
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

export default Animal;
