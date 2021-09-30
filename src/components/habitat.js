import './details.css';
import Related from './related';
import { Image, Form } from 'react-bootstrap';

function Habitat(props) {
  const item = props.item;
  const details = item.details;

  return (
    <div id="main">
      <div id="data">
        <Image id="img" src={details.imgLink} />
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
        <Related type={0} related={item.relatedAnimals} />
        <Related type={1} related={item.relatedThreats} />
        <Related type={3} related={item.relatedCountries} />
      </div>
    </div>
  );
}

export default Habitat;
