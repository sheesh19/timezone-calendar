Rails.application.routes.draw do
  root to: 'pages#home'
  resources :timeslots, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
