import React from 'react'
import {useSelector} from 'react-redux'
import UserIncome from './UserIncome'
import UserPhone from './UserPhone'
import UserLastName from './UserLastName'
import UserEmail from './UserEmail'
import "./Table.css"

const Table = () => {
  const users = useSelector((state) => state.tablesReducer)
  console.log(users)

  var setCity = new Set()

  for (let i = 0; i < users.length; i++)
  {
    setCity.add([users[i].city, 0,0])
  }

  console.log(setCity)

  
  for (let i = 0; i < users.length; i++)
  {
    setCity.forEach(element => {
      if (element[0] === users[i].city)
      {
        let temp = parseInt(users[i].income.substring(1))
        element[1] += 1;
        element[2] += temp;
        }
    });
  }

  console.log(setCity)

  let arr = Array.from(setCity)
  // console.log(arr)

  function sortFunction(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? 1 : -1;
    }
  }
  
  arr.sort(sortFunction)

  console.log(arr)

  let arr2 = []

  for (let i = 0; i < 10; i++)
  {
    arr2[i] = arr[i]
  }
  
  console.log(arr2)

  return (
    <div>
      {
        users.length === 0 ? 
          <>
            <p>Loading....</p>
          </> :
          <>
            <div className="income">
              <h1>Income greater than $5 and owns BMW or Mercedes</h1>
              {/* {
                    <UserIncome user={users[0]}/>
                } */}
                <table>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Income</th>
                    <th>City</th>
                    <th>Car</th>
                    <th>Quotes</th>
                    <th>Phone Price</th>
                  </tr>
                {
                  users.map((user) => (
                    <UserIncome user={user} key={user?.id} />
                ))
                }
                </table>
            </div>

            <div className="phonePrice">
              <h1>Male Users which have phone price greater than 10,000</h1>

              <table>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Income</th>
                    <th>City</th>
                    <th>Car</th>
                    <th>Quotes</th>
                    <th>Phone Price</th>
                </tr>

                {
                  users.map((user) => (
                    <UserPhone user={user} key={user?.id} />
                ))
                }

                </table>
            </div>

            <div className="lastName">
              <h1>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name</h1>

              <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Income</th>
                    <th>City</th>
                    <th>Car</th>
                    <th>Quotes</th>
                    <th>Phone Price</th>
                </tr>

                {
                  users.map((user) => (
                    <UserLastName user={user} key={user?.id} />
                ))
                }
              </table>
            </div>

            <div className="emailDigit">
              <h1>Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit</h1>

              <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Income</th>
                    <th>City</th>
                    <th>Car</th>
                    <th>Quotes</th>
                    <th>Phone Price</th>
                </tr>

              {
                  users.map((user) => (
                    <UserEmail user={user} key={user?.id} />
                ))
                }
                
              </table>
            </div>

            <div className="top10Cities">
              <h1>The data of top 10 cities which have the highest number of users and their average income</h1>

              <table>
                <tr>
                  <th>City</th>
                  <th>Number of Users</th>
                  <th>Average income</th>
                </tr> 

                {
                  arr2.map((array) => (
                    <>
                      <tr>
                        <td>{array[0]}</td>
                        <td>{array[1]}</td>
                        <td>{"$"+parseFloat(array[2]/array[1]).toFixed(2)}</td>
                      </tr>
                    </>  
                ))
                }
              </table>
            </div>
          </>
      }
      
    </div>
  )
}

export default Table
