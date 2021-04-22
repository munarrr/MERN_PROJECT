import axios from 'axios'


export const registration = async (email, password) => {
     try {
          const response = await axios.post(`http://localhost:8080/api/auth/registration`, {
               email,
               password
          })
          console.log(response)
          console.log(response.data.message)

     } catch (e) {
         console.log(e)
     }
     
     
}
