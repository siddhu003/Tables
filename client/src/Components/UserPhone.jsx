import React from 'react'

const UserPhone = ({user}) => {
    var gender = user.gender
    var price = user.phone_price

  return (
    <>
        {
          (gender === "Male") && (price > 10000) ? 
              <>
              <tr>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.income}</td>
                <td>{user.city}</td>
                <td>{user.car}</td>
                <td>{user.quote}</td>
                <td>{user.phone_price}</td>
              </tr>
              </>
              :
              <>
            </>
                      
      }
    </>
  )
}

export default UserPhone
