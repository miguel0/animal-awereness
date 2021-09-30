import './details.css';
import Related from './related';
import { Image, Form } from 'react-bootstrap';

function Threat(props) {
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
        <Related type={0} related={item.relatedAnimals} />
        <Related type={2} related={item.relatedHabitats} />
      </div>
    </div>
  );
}

export default Threat;
