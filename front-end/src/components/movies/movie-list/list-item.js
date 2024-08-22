function ListItem({ movieTitle, isRentable, isHD, price }) {
  return (
    <tr>
      <td>{movieTitle}</td>
      {/* console.log("is rentable".isRentable); */}
      <td>{isRentable ? "Yes" : "No"}</td>
      {console.log("is isHD", isHD)}
      <td>{isHD ? "Available in HD" : "Not in HD"}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ListItem;
