var ProductTable = React.createClass({
    render: function() {
        var products = [];
        this.props.products.forEach(function(product) {
            products.push(<Product product={product}
                               key={'product' + product.id}/>);
        }.bind(this));
        return(
            <table className="table table-striped">
                <thead>
                <tr>
                    <th className="col-md-3">Name</th>
                    <th className="col-md-4">Description</th>
                    <th className="col-md-3">Price</th>
                    <th className="col-md-4">Option</th>
                </tr>
                </thead>
                <tbody>
                {products}
                </tbody>
            </table>
        )
    }
});