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
    <div>
      <p>Related {props.type}:</p>
      <ListGroup>{listItems}</ListGroup>
    </div>
  );
}

export default Related;
