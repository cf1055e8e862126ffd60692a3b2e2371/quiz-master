Rails.application.routes.draw do
  get 'manage/index'

  scope '/api' do
    resources :questions, only: [:index, :show, :create, :update, :destroy]
    match '*notfound', to: 'api#render_404', via: :all
  end
end
