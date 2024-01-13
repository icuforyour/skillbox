export default function currentDateTime() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");;
  const minutes = date.getMinutes().toString().padStart(2, "0");;
  const seconds = date.getSeconds().toString().padStart(2, "0");;

  const customDateString = `${day}-${month}-${year}`;
  const customTimeString = `${hours}:${minutes}:${seconds}`;

  const obj = {
    date: customDateString,
    time: customTimeString
  };

  return obj;
}
