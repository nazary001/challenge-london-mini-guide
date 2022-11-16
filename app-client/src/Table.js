import './Table.css';

function Table({cityAndCategoryData}) {
    return(
        <table>
            <thead>
                <tr>
                    <thg>#</thg>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {cityAndCategoryData.map((data, idx) => {
                    return(
                        <tr key = {idx}>
                            <td>{idx}</td>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.address}</td>
                            <td>{data.website}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;