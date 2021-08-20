import React from 'react';

export default function FriendForm(props) {
    const {
        values,
        submit,
        change,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checked' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h2>Create Your Pizza</h2>

            <div className='form-group inputs'>
                <div id='name-input'>
                <h4>Customer Information</h4>
                <label>Name:
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                </div>

                <h4>Build Your Pizza</h4>
                    <div id='size-dropdown'>
                    <label>Size: 
                        <select 
                            onChange={onChange}
                            value={values.size}
                            name='size'
                        >
                            <option value=''>-- Select Pizza Size --</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>
                    </div>

                    <div id='toppings'>
                    <h5>Toppings:</h5>
                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                        />
                    </label>
                    <label>Meatballs
                        <input
                            type='checkbox'
                            name='meatballs'
                            checked={values.meatballs}
                            onChange={onChange}
                        />
                    </label>
                    <label>Bacon
                        <input
                            type='checkbox'
                            name='bacon'
                            checked={values.bacon}
                            onChange={onChange}
                        />
                    </label>
                    <label>Sausage
                        <input
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={onChange}
                        />
                    </label>
                    </div>

                <div id='instructions'>
                <h4>Special instructions</h4>
                <input 
                    type='text'
                    name='instructions'
                    id='special-instructions'
                    value={values.instructions}
                    onChange={onChange}
                />
                </div>
            </div>

            <div className='form-group submit'>
                <button id='order-button'>Order</button>

                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
            </div>
        
        </form>
    )

}