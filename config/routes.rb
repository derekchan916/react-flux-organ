Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {form: :json} do
    resources :tracks
  end
end
