import { BrowserRouter as
  Router, Route } from  'react-router-dom'
import "./components/FontAwesomeIcons"
import { Provider } from 'react-redux'
import  store  from './store'

//LAYOUTS
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

//PAGES
import Home from './components/views/pages/Home'
import About from './components/views/pages/About'
import Contacts from './components/views/pages/Contacts'
import petRegistration from './components/views/pages/PetRegistration'
import petAppointment from './components/views/pages/petAppointment'



function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <div className="router">
          <Navbar />
          <Route path="/" exact render={(props) =>(
            <>
              <Home />
            </>
          )} />    
          <Route path="/aboutPet" component={About} />
          <Route path="/contact" component={Contacts} />
          <Route path="/petRegistration" component={petRegistration} />
          <Route path="/petAppointment" component={petAppointment} />
          <Footer />
        </div>
      </Router>

    </Provider>
  );
}
export default App;
