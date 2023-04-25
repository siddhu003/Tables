import React from 'react'

const UserIncome = ({ user }) => {
  var income = user.income
  income = income.substring(1)
  var car =  user.car
  return (
    <>
      {
        (car === "BMW" || car === "Mercedes-Benz") && (income < 5) ? 
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
          </> : 
          <>
            
          </>

      }
    </>
  )
}

export default UserIncome
