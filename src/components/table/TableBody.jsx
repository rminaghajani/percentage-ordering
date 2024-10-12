import TableRow from "./TableRow";

export default function TableBody({ data }) {
  return (
    <>
      {data.map((value) => {
        return <TableRow data={value} key={value.id}></TableRow>;
      })}
    </>
  );
}
