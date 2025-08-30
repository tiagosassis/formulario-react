import DeliveryPerson from "./DeliveryPerson";

import "./Main.css";

const Main = () => {
    return (
        <main id="main-container">
            <div className="container">
                <h1>Relatório</h1>
                <section>
                    <h2>Entregadores</h2>
                    <form>
                        <DeliveryPerson />
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Main
