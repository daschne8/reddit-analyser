Rails.application.routes.draw do
  scope '/api' do
    get :user, to: 'users#index'
  end
end
