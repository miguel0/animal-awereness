import './details.css';
import Related from './related';
import { Image, Form } from 'react-bootstrap';

function Animal(props) {
  const item = props.item;
  const details = item.details;

  return (
    <div id="main">
      <div id="data">
        <Image id="img" src={details.imgLink} />
        <div id="allTextData">
          <Form.Group className="textData">
            <Form.Label>Common name:</Form.Label>
            <Form.Control placeholder={details.name} readOnly />
          </Form.Group>
          <Form.Group className="textData">
            <Form.Label>Scientific name:</Form.Label>
            <Form.Control placeholder={details.sciName} readOnly />
          </Form.Group>
          <Form.Group className="textData">
            <Form.Label>Vulnerability status:</Form.Label>
            <Form.Control placeholder={details.status} readOnly />
          </Form.Group>
        </div>
      </div>
      <div id="allRelated">
        <Related type={1} related={item.relatedThreats} />
        <Related type={2} related={item.relatedHabitats} />
        <Related type={3} related={item.relatedCountries} />
      </div>
    </div>
  );
}

export default Animal;
