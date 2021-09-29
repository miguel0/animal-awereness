import './related.css';
import { ListGroup } from "react-bootstrap";

function goToRelatedItem(type, name) {
  // TODO: go to page of related item
  console.log('type: ', type, ' name: ', name);
}

function Related(props) {
  const listItems = props.related.map((item) =>
    <ListGroup.Item key={item} onClick={goToRelatedItem.bind(this, props.type, item)}>
      {item}</ListGroup.Item>
  );

  return (
    <div id="main">
      <h3>Related {props.type}:</h3>
      <ListGroup id="related">{listItems}</ListGroup>
    </div>
  );
}

export default Related;
