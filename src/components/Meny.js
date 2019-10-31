import React, {Fragment} from "react";
import List from "../components/List";
import Contact from "../components/Contact";
import About from "../components/About";


class Meny extends React.Component {

    state = {
        active: 1,
    }

    handle = (e) => {
        this.setState({
            active: +e.target.getAttribute('data-name'),
        })
    }

    render() {
        const {active} = this.state
        return (
            <Fragment>
                <div className="Meny">
                    <h1>Dead tulip</h1>
                    <button data-name={1} onClick={this.handle}>Каталог</button>
                    <button data-name={2} onClick={this.handle}>О нас</button>
                    <button data-name={3} onClick={this.handle}>Контакты</button>
                </div>
                {active === 1 && <List/>}
                {active === 2 && <About/>}
                {active === 3 && <Contact/>}
            </Fragment>
        )
    }
}

export default Meny;