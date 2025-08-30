import Button from "./Button";

import "./Main.css";

const Main = () => {
    return (
        <main id="main-container">
            <div className="container">
                <h1>Relatório</h1>
                <section>
                    <h2>Entregadores</h2>
                    <form>
                        <Button id="delivery-person-name" type="text" label="Nome" required/>
                        {/* {id, classNameDiv, classNameInput, classNameLabel, type = "text", label, ...rest} */}
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Main
