
const dateFormator = (date) => {
  let parsedDate = new Date(date);
  return (
    parsedDate.toLocaleDateString() +
    " " +
    parsedDate
      .toTimeString()
      .substring(0, parsedDate.toTimeString().indexOf("GMT"))
  );
};

export default dateFormator;
