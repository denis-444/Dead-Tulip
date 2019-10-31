import React from "react";
import Product from "../components/Product";
import roze from "../images/roze.jpg";
import hrizantema from "../images/hrizantema.jpg";
import austoma from "../images/austoma.jpg";
import rozapink from "../images/rozapink.jpg";
import tylpan from "../images/tylpan.jpg";
import pion from "../images/pion.jpg";
import lilija from "../images/lilija.jpg";
import romashka from "../images/romashka.jpg";
import rozapion from "../images/rozapion.jpg";

class List extends React.Component {
    render() {
        return (
            <div className="Products">
                <Product name="Роза" amount="8" src={roze} cost={5}/>
                <Product name="Хризантема" amount="25" src={hrizantema} cost={3}/>
                <Product name="Эустома" amount="9" src={austoma} cost={4}/>
                <Product name="Роза (Розовая)" amount="8" src={rozapink} cost={7}/>
                <Product name="Тюльпан" amount="50" src={tylpan} cost={2}/>
                <Product name="Пион" amount="5" src={pion} cost={9}/>
                <Product name="Лилия" amount="6" src={lilija} cost={4}/>
                <Product name="Ромашка" amount="32" src={romashka} cost={3}/>
                <Product name="Роза (Пионовидная)" amount="3" src={rozapion} cost={11}/>
            </div>
        );
    }
}
export default List;