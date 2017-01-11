var Product = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        description: React.PropTypes.string,
        price: React.PropTypes.string,

    },
    render: function() {
        var product = this.props.product;
        return(
            <tr>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>option</td>
            </tr>
        )
    }
});