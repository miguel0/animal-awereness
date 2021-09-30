import './related.css';
import { ListGroup } from "react-bootstrap";

function goToRelatedItem(type, id) {
  window.location.href = '/details?type=' + type + '&id=' + id;
}

function Related(props) {
  const listItems = props.related.map((item) =>
    <ListGroup.Item className="relatedItem" key={item.id} action onClick={goToRelatedItem.bind(this, props.type, item.id)}>
      {item.name}</ListGroup.Item>
  );

  const type = ['Animals', 'Threats', 'Habitats', 'Countries'];

  return (
    <div id="main">
      <h3>Related {type[props.type]}:</h3>
      <ListGroup id="related">{listItems}</ListGroup>
    </div>
  );
}

export default Related;
