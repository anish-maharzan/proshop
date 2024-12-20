import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>Message</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
