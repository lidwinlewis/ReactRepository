var React = require('react')
var Link = require('react-router-dom')
var Rater = require('./Rater')


module.exports = class Product extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			products : []
		}
    }
    
    render() {
        //console.log('rating', this.props.rating)
        return (
          <div style={{'marginTop':'20px'}} className={"thumbnail"}>
            <img src={this.props.img} className={"img img-rounded img-responsive"} alt="Product img"/>
            <div className={"caption"} style={{ "textAlign": "center" }}>
            <a href src={`/products/${this.props.pid}`} >{this.props.name}</a>
              <h4><span style={{ "color": "red" }}>Rs.{this.props.price}</span></h4>
              {this.props.status ? <h5 style={{ "color": "red", "font-weight": "bold" }}>The product is discontinued.</h5> : <p className={"description"}>{this.props.desc}</p>}
                <Rater value={this.props.rating} maxlength="6" />&nbsp;&nbsp;
                  <span style={{ "fontSize": "9px" }}>{this.props.rating}/5</span>
            </div>
          </div>
        )
      }

}