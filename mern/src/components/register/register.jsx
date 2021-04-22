import React from 'react';
import { registration } from '../../actions/user';
import Input from '../input/input'
import styles from 'styled-components'

const Field = styles.div`
background:#fff;
border-radius:10px;
width:300px;
`
const Formik = styles.form`
display:flex;
flex-direction:column;
padding:20px;
`
const Button = styles.button`
background:green;
border:none;
outline:none;
padding:4px;
color:#fff;
border-radius:5px;
width:30px

`

export default function Register() {
     const [email,SetEmail] = React.useState("")
     const [password,SetPassword] = React.useState("")
  return (
       <Field >
          <Formik>
               <Input type="text" placeholder="email" value={email} setValue={SetEmail} />
                <Input type="password" placeholder="password"  value={password} setValue={SetPassword}/>
               
          </Formik>
           <Button onClick={() => registration(email,password)}>POST</Button>
    </Field>
  );
}

