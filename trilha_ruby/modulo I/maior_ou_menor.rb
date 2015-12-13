def da_boas_vindas
	puts
    puts "        P  /_\  P                              "
    puts "       /_\_|_|_/_\                             "
    puts "   n_n | ||. .|| | n_n         Bem vindo ao    "
    puts "   |_|_|nnnn nnnn|_|_|     Jogo de Adivinhação!"
    puts "  |' '  |  |_|  |'  ' |                        "
    puts "  |_____| ' _ ' |_____|                        " 
    puts "        \__|_|__/                              "
    puts
	puts "\n\n\n"
	puts "Qual o seu nome?"
	nome = gets.strip
	puts "Seja bem vindo, #{nome}"
	puts "\n\n\n"
	puts "Começaremos o jogo para você #{nome}"
	nome
end

def sorteia_numero_secreto(dificuldade)
	case dificuldade
	when 1
		maximo = 30
	when 2
		maximo = 60
	when 3
		maximo = 100
	when 4
		maximo = 150
	else
		maximo = 200
	end
	puts "Escolhendo um número de 0 a #{maximo}..."
	sorteado = rand(maximo)
	puts "Escolhido... tenter adivinha qual número secreto eu estou pensado"
	puts "\n\n\n\n\n\n\n"
	sorteado
end

def pede_dificuldade
	puts "Qual o nível de dificuldade que você deseja?"
	puts "(1) Muito Fácil (2) Fácil (3) Normal (4) Difícil (5) Impossivel"
	puts "Escolha:"
	dificuldade = gets.to_i
end

def pede_um_numero(chutes, tentativa, limite_de_tentativas)
	puts "Tentativa #{tentativa} de #{limite_de_tentativas}"
	puts "Chutes até o agora: #{chutes}"
	puts "Entre com um número:"
	chute = gets.strip
	puts "\n\n\n"
	puts "Será que você acertou? Você chutou: #{chute}"
	chute.to_i
end

def verificar_se_acertou(numero_secreto, chute)
	acertou = numero_secreto == chute

	if acertou
		ganhou
		return true
	end

	maior = numero_secreto > chute
	if maior
		puts "O NÚMERO E MAIOR QUE #{chute} \n\n\n"
		return false
	else
		puts "O NÚMERO E MENOR QUE #{chute} \n\n\n"
	end
	false
end

def jogar(nome, dificuldade)
	numero_secreto = sorteia_numero_secreto dificuldade

	pontos_ate_agora = 1000
	limite_de_tentativas = 5
	chutes = []

	for tentativa in 1..limite_de_tentativas
		chute = pede_um_numero chutes, tentativa, limite_de_tentativas
		chutes << chute

		pontos_a_perder = (chute - numero_secreto).abs / 2.0
		pontos_ate_agora -= pontos_a_perder

		if verificar_se_acertou numero_secreto, chute
			break
		end
	end

	puts "Você tem #{pontos_ate_agora} pontos."
end

def nao_quer_jogar
	puts "QUER JOGAR NOVAMENTE? (S/N)"
	quero_jogar = gets.strip
	nao_quero_jogar = quero_jogar.upcase == "N"
end

def ganhou
    puts
    puts "             OOOOOOOOOOO               "
    puts "         OOOOOOOOOOOOOOOOOOO           "
    puts "      OOOOOO  OOOOOOOOO  OOOOOO        "
    puts "    OOOOOO      OOOOO      OOOOOO      "
    puts "  OOOOOOOO  #   OOOOO  #   OOOOOOOO    "
    puts " OOOOOOOOOO    OOOOOOO    OOOOOOOOOO   "
    puts "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  "
    puts "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO  "
    puts "OOOO  OOOOOOOOOOOOOOOOOOOOOOOOO  OOOO  "
    puts " OOOO  OOOOOOOOOOOOOOOOOOOOOOO  OOOO   "
    puts "  OOOO   OOOOOOOOOOOOOOOOOOOO  OOOO    "
    puts "    OOOOO   OOOOOOOOOOOOOOO   OOOO     "
    puts "      OOOOOO   OOOOOOOOO   OOOOOO      "
    puts "         OOOOOO         OOOOOO         "
    puts "             OOOOOOOOOOOO              "
    puts
    puts "               Acertou!                "
    puts
end

nome = da_boas_vindas
dificuldade = pede_dificuldade

jogar nome, dificuldade

loop do
	jogar nome, dificuldade
	if nao_quer_jogar?
		break
	end
end