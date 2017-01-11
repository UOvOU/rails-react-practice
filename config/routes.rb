Rails.application.routes.draw do
  root 'dashboard#index'
  resources :products, only: [:index, :create, :destroy] do
    get :search, on: :collection
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
