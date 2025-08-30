import './DeliveryPerson.css'

import Input from "./Input";

const DeliveryPerson = () => {
    return (
        <div>
            <Input id="delivery-person-name" type="text" label="Nome" classNameDiv="container-relative" classNameInput="float-input" classNameLabel="float-label" required />
            <Input id="delivery-person-delivery" type="number" label="Entregas" classNameDiv="container-relative" classNameInput="float-input" classNameLabel="float-label" required />
            <Input id="delivery-person-extra" type="number" label="Extras" classNameDiv="container-relative" classNameInput="float-input" classNameLabel="float-label" required />
            <Input id="delivery-person-consumption" type="text" label="Consumo" classNameDiv="container-relative" classNameInput="float-input" classNameLabel="float-label" required />
        </div>
    )
}

export default DeliveryPerson
