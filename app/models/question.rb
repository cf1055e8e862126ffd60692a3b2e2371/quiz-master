class Question < ApplicationRecord
  validates :content, presence: true, length: { minimum: 1 },
            safe_html: true
  validates :answer, presence: true, length: { minimum: 1 }
end
