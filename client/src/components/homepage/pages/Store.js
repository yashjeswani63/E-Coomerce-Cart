import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../../../productsStore';
import ProductCard from '../components/ProductCard';
import './Store.css'
import { Container } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar';
import CartProvider from '../../../CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
// [{... }, {... }, {... }]
function Store({setLoginUser}) {

    return (
        <div className='store'>
            <CartProvider>
            <div id='fixed'><NavbarComponent></NavbarComponent></div>
             <Container>
            <Row><h1 align="center" className="p-3">Trending Products</h1></Row>
            <Row><h2 align="center" className="p-3">Select Your Items From Here !</h2></Row>
            <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
            </Container>
            </CartProvider>
        </div>
    )
}

export default Store;