var Product = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        description: React.PropTypes.string,
        price: React.PropTypes.string,

    },
    handleDelete: function(e) {
        e.preventDefault();
        $.ajax({
            method: 'DELETE',
            url: '/products/' + this.props.product.id,
            success: function(data) {
                this.props.handleDeleteRecord(this.props.product);
            }.bind(this),
            error: function(xhr, status, error) {
                alert('Cannot delete requested record: ', error);
            }
        });
    },
    render: function() {
        var product = this.props.product;
        return(
            <tr>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                    <a className="btn btn-danger btn-xs"
                       onClick={this.handleDelete} >
                        Delete
                    </a>
                </td>
            </tr>
        )
    }
});