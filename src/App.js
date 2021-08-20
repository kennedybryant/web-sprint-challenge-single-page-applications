import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from './Home';
import PizzaForm from './PizzaForm';
import axios from 'axios';
import schema from './formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  meatballs: false,
  bacon: false,
  sausage: false,
  instructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
}

const initialPizzas = []
const initialDisabled = true


const App = () => {
//////////////// STATES ////////////////
const [pizzas, setPizzas] = useState(initialPizzas)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

//////////////// HELPERS ////////////////
const postNewPizza = newPizza => {
  axios.post('https://reqres.in/api/orders', newPizza)
    .then(res => {
      // console.log([...pizzas, res.data]);
      setPizzas([...pizzas, res.data])
    }).catch(err => console.error(err))

    setFormValues(initialFormValues)
}

//////////////// EVENT HANDLERS ////////////////
const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({ ...formErrors, [name]: '' }))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value)
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const formSubmit = () => {
  const newPizza = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    toppings: ['pepperoni', 'meatballs', 'bacon', 'sausage'].filter(topping => !!formValues[topping])
  }

  postNewPizza(newPizza);
}

//////////////// SIDE EFFECTS ////////////////
useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])


  return (
    <div className='container'>

      <header>
      <h1>Lambda Eats</h1>
      <nav className='home-link'>
        <Link to = '/'>Home</Link>
      </nav>
      </header>

    <Switch>
      <Route exact route path ='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <PizzaForm 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
    </Switch>

    </div>
  );
};
export default App;
