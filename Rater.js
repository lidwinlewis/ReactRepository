var React = require('react')
var styles = 'bootstrap/dist/css/bootstrap.min.css';

module.exports = class Rater extends React.Component {
  render() {
    var items = [];
    console.log('this.props.maxlength :: ' ,this.props.maxlength);
    console.log('this.props.value :: ' ,this.props.value);
    for (var i = 1; i < this.props.maxlength; i++) {
      var clickHandler = this.props.onSelected && this.props.onSelected.bind(null, i);
      items.push(<div key={i} className={i >= this.props.value ? 'filled' : ''} onClick={clickHandler}>{'\u2605'}</div>)
    }
    return (
      <ul className="rating">{items}</ul>
    )
  }
}

