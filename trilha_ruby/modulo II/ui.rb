def da_boas_vindas
	puts "BEM VINDO AO JOGO DA FORCA!!!"
	puts "QUAL O SEU NOME"
	nome = gets.strip
	puts "\n\n\n\n\n\n"
	puts "Comecaremos o jogo para você #{nome}."
	nome
end

def nao_quero_joga?
	puts "QUER JOGAR NOVAMENTE? (S/N)"
	quero_jogar = gets.strip
	nao_quero_joga = quero_jogar.upcase == "N"
end

def cabecalho_de_tentativas(chutes, erros, mascara)
	puts "\n\n\n\n"
	puts "Palavra secreta:  #{mascara}"
	puts "Erros ate agora:  #{erros}"
	puts "Chutes até agora: #{chutes}"
end

def pede_um_chute
	puts "Entre com uma letra ou uma palavra"
	chute = gets.strip.downcase
	puts "Será quer você acertou? Você chutou #{chute}"
	chute
end

def avisa_chute_efetuado chute
	puts "VOCÊ JÁ CHUTOU #{chute}"
end

def letra_nao_encontrado
	puts "Letra não encontrada"
end

def avisa_letra_encontrada(total_encontrado)
	puts "Letra encontrada #{total_encontrado} vezes. "
end

def avisa_acertou_palavra
	puts "PARABEÉNS! VOCÊ ACERTOU!"	
end

def avisa_errou_palavra
	puts "QUE PENA... ERROU"
end

def avisa_pontos(pontos_ate_agora)
	puts "Você ganhou #{pontos_ate_agora} pontos."
end

def avisa_escolhendo_palavra
	puts "Escolhendo palavra secreta..."
end

def avisa_palavra_escolhida(palavra_secreta)
	puts "Palavra secreta com #{palavra_secreta.size} letras... boa sorte!"
	palavra_secreta
end