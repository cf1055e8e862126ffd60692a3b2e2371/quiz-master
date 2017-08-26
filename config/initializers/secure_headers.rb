if Rails.env.development?
  SecureHeaders::Configuration.default do |config|
    config.csp = {
      default_src: %w('none'),
      script_src: %w('self' http://0.0.0.0:8080 'unsafe-eval'),
      connect_src: %w('self' http://localhost:8080 ws://localhost:8080),
      style_src: %w('self'),
      img_src: %w('self' data:),
      font_src: %w('self')
    }
  end
else
  SecureHeaders::Configuration.default do |config|
    config.csp = {
      default_src: %w('none'),
      script_src: %w('self'),
      connect_src: %w('self'),
      style_src: %w('self'),
      img_src: %w('self' data:),
      font_src: %w('self')
    }
  end
end
