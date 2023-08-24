import socket
import threading
import random

# Configurações do servidor
host = '127.0.0.1'
port = 12345
max_players = 2

# Lista de dicas e palavras secretas
hints = ["Animal de grande porte", "Algo amarelo", "Objeto usado para escrever"]
secret_words = ["elefante", "banana", "caneta"]

# Inicialização do servidor
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind((host, port))
server_socket.listen(max_players)

print("Aguardando jogadores...")

players = []
player_threads = []

# Função para lidar com cada jogador
def handle_player(player_socket, player_id):
    player_socket.send(f"Dica: {hints[player_id]}\nTente adivinhar a palavra secreta.".encode())

    while True:
        guess = player_socket.recv(1024).decode()
        if guess.lower() == secret_words[player_id]:
            response = "Parabéns! Você acertou!"
        else:
            response = "Palavra incorreta. Tente novamente."

        player_socket.send(response.encode())

        if response.startswith("Parabéns"):
            break

    player_socket.close()

# Aceitar conexões dos jogadores
try:
    while len(players) < max_players:
        player_socket, player_address = server_socket.accept()
        players.append(player_socket)
        print(f"Jogador {len(players)} conectado.")
        player_thread = threading.Thread(target=handle_player, args=(player_socket, len(players)-1))
        player_thread.start()
        player_threads.append(player_thread)

finally:
    # Esperar que todas as threads terminem antes de encerrar o servidor
    for thread in player_threads:
        thread.join()

    for player in players:
        player.close()

    server_socket.close()
