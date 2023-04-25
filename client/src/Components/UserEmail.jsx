import React from 'react'

const UserEmail = ({user}) => {

    function containsNumbers(str) {
        return /[0-9]/.test(str);
    }

  var car = user.car
  var email = user.email


  return (
    <>
          {
        (car === "BMW" || car === "Mercedes-Benz" || car === "Audi") && (!containsNumbers(email)) ? 
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

export default UserEmail
