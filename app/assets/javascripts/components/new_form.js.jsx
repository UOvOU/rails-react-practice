var NewForm = React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        price: React.PropTypes.string,
        description: React.PropTypes.string
    },
    getInitialState: function() {
        return {
            name: '',
            price: '',
            description: ''
        }
    },
    handleAdd: function(e) {
        e.preventDefault();
        var self = this;
        if (this.validForm()) {
            $.ajax({
                url: '/products',
                method: 'POST',
                data: { event: self.state },
                success: function(data) {
                    self.props.handleAdd(data);
                    self.setState(self.getInitialState());
                },
                error: function(xhr, status, error) {
                    alert('Cannot add a new record: ', error);
                }
            })
        } else {
            alert('Please fill all fields.');
        }
    },
    validForm: function() {
        if (this.state.name && this.state.price &&
            this.state.description) {
            return true;
        } else {
            return false;
        }
    },
    handleChange: function(e) {
        var input_name = e.target.name;
        var value = e.target.value;
        this.setState({ [input_name] : value });
    },
    render: function() {
        return(
            <form className="form-inline" onSubmit={this.handleAdd}>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           name="name"
                           placeholder="Name"
                           ref="name"
                           value={this.state.name}
                           onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           name="price"
                           placeholder="Price"
                           ref="price"
                           value={this.state.price}
                           onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           name="description"
                           placeholder="Description"
                           ref="description"
                           value={this.state.description}
                           onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        )
    }
});