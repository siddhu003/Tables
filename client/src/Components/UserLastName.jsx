import React from 'react'

const UserLastName = ({ user }) => {
    
    var lastName = user.last_name
    var c = lastName[0]

    var email = user.email

    var length = user.quote.length

  return (
    <>
          {
              (c === "M") && (length > 15) && (email.includes(lastName.toLowerCase())) ? 
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

export default UserLastName
