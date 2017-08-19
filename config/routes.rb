Rails.application.routes.draw do
  scope '/api', defaults: { format: 'json' } do
    resources :questions, only: [:index, :show, :create, :update, :destroy]
    match '*notfound', to: 'api#render_404', via: :all
  end

  match '*all', to: 'page#index', via: [:get]
end
