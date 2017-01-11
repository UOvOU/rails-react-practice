
class ProductsController < ApplicationController
  def index
    render json: Product.all
  end

  def search
    query = params[:query]
    products = Product.where('name LIKE ? OR description LIKE ?',
                         "%#{query}%", "%#{query}%")
    render json: products
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render nothing: true, status: :bad_request
    end
  end

  def destroy
    @product = Product.find(params[:id])
    @product.destroy
    head :no_content
  end

  private

  def product_params
    params.require(:event).permit(:name, :description, :price)
  end

end

