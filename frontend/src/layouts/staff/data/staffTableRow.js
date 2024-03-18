import react from 'react'

const StaffRow = ({id, username, name, email, phone, position, handleUpdate, handleDetails, handleDelete}) => {
    return (
        <tr>
            <td className='pt-3 fs-6'>{username}</td>
            <td className='text-left pt-3 fs-6'>{name}</td>
            <td className='pt-3 fs-6'>{email}</td>
            <td className='pt-3 fs-6'>{phone}</td>
            <td className='pt-3 fs-6'>{position}</td>
            <td className='pt-3 fs-6'>
                <button onClick={() => handleUpdate(id)} className="btn btn-outline-info btn-sm ml-1 mr-3 mx-1">Update</button>
                <button onClick={() => handleDetails(id)} className="btn btn-outline-success btn-sm ml-1 mr-2 mx-1">Details</button>
                <button onClick={() => handleDelete(id)} className="btn btn-outline-danger btn-sm ml-1 mr-2">Delete</button>
            </td>
        </tr>
    );
}

export default StaffRow