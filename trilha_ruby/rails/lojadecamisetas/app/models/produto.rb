class Produto < ActiveRecord::Base
	validates :quantidade, presence: true
	validates :nome, presence: true, length: {minimum: 5}
	validates :preco, presence: true

	belongs_to :departamento

end