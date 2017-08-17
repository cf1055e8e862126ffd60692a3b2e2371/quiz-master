Rails.application.routes.draw do
  get 'manage/index'

  scope '/api' do
    resources :questions, only: [:index, :show, :create, :update, :destroy]
  end
end
