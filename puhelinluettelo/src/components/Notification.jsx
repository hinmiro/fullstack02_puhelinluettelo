const Notification = ({ message, remove }) => {
  if (message === null) {
    return null;
  }

  const style = remove
    ? {
        borderStyle: "solid",
        backgroundColor: "lightpink",
        color: "red",
        padding: 10,
      }
    : {
        borderStyle: "solid",
        backgroundColor: "palegreen",
        color: "green",
        padding: 10,
      };

  return <div style={style}>{message}</div>;
};

export default Notification;
