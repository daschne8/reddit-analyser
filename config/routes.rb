Rails.application.routes.draw do
  scope '/api' do
    get :comment, to: 'comments#index'
  end
end
