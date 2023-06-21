import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  //   props.children shows other div that are inside of Card component
  return <div className={classes}>{props.children}</div>;
};

export default Card;
