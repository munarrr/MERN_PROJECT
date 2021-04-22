import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import  Register  from './components/register/register';
import styles from 'styled-components'


const Wrapper = styles.div`
background: #E5E5E5;
width:100%;
height:100vh;
margin:0;
padding:0;
`


function App() {
	return (
		<BrowserRouter>
			<Wrapper className="app">
				<Navbar />
                    <Switch>
                    <Route path="/register" component={Register} />
                    </Switch>
			</Wrapper>
		</BrowserRouter>
	);
}

export default App;
