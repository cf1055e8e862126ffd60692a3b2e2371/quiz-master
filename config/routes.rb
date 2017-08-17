Rails.application.routes.draw do
  resources :questions, only: [:index, :show, :create, :update, :destroy]
  get 'manage/index'
end
