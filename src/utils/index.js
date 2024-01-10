// Format the date to be displayed as dd.mm.yyyy
export const formatDate = (date) => {
  const formattedDate = new Date(date);
  const day = formattedDate.getDate().toString().padStart(2, "0"); // Get the day and pad with leading zero if necessary
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0"); // Get the month (months are zero-indexed) and pad with leading zero if necessary
  const year = formattedDate.getFullYear(); // Get the year
  return `${day}.${month}.${year}`;
};
