const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>County</th>
          <th>Factory</th>
          <th>Brand</th>
          <th>Item</th>
          <th>Capicity</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.country.countryname}</td>
            <td>{item.country.factory.factoryname}</td>
            <td>{item.country.factory.brand.brandname}</td>
            <td>{item.country.factory.brand.item.itemname}</td>
            <td>{item.country.factory.brand.item.capacity}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
