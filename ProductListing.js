var React = require('react')
var axios = require('axios')
var Product = require('./Product')
var styles = 'bootstrap/dist/css/bootstrap.min.css';

module.exports = class ProductListing extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			products: []
		}
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		axios.get('http://localhost:3000/products')
			.then(productlisting => { this.setState({ products: productlisting.data }) })
			.catch(error => { this.setState(error) });
	}
	handleClick(e) {
		e.preventDefault();
		this.setState({ counter: this.state.counter + 1 })
	}

	render() {
		var items = [];
		this.state.products ? this.state.products.forEach((item, index) => {
			items.push(<div key={index} className="col-4">
				<Product pid={item.pdtCode} price={item.pdtPrice} name={item.pdtName} desc={item.pdtDescription} img={item.pdtImg} rating={item.avgFeedback} status={item.isDiscontinued} />
			</div>);
		}) : items.push(null)
		return (
			<html>
				<body>
					<link rel="stylesheet" href="customstyles.css" />
					<div>
						<div className="container">
							<div className="row" >
								<div className="col-md-12">
								{items.length > 0 ? items : null}
								 </div> 
							</div>
						</div>
					</div>
					<script src="/bundle.js" />
				</body>
			</html>
		);
	}
}
