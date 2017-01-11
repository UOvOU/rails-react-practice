var ProductApplication = React.createClass({
    getInitialState: function() {
        return { products: [] };
    },
    componentDidMount: function() {
        this.getDataFromApi();
    },
    getDataFromApi: function() {
        var self = this;
        $.ajax({
            url: '/products',
            success: function(data) {
                self.setState({ products: data });
            },
            error: function(xhr, status, error) {
                alert('Cannot get data from API: ', error);
            }
        });
    },
    handleSearch: function(products) {
        this.setState({ products: products });
    },
    handleAdd: function(product) {
        var products = this.state.products;
        products.push(product);
        this.setState({ products: products });
    },
    render: function() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>SHOP</h1>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <SearchForm handleSearch={this.handleSearch} />
                    </div>
                    <div className="col-md-8">
                        <NewForm handleAdd={this.handleAdd} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <ProductTable products={this.state.products}/>
                    </div>
                </div>
            </div>
        )
    }
});