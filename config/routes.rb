Rails.application.routes.draw do
  scope '/api' do
    get :comment, to: 'comments#index'
  end

  scope '/api' do
    get :names, to: 'comments#get_names'
  end


end
