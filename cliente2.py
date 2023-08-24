import socket

# Configurações do cliente
host = '127.0.0.1'
port = 12345

# Conexão com o servidor
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect((host, port))

try:
    # Receber instruções do servidor
    instructions = client_socket.recv(1024).decode()
    print(instructions)

    while True:
        guess = input("Digite seu palpite: ")
        client_socket.send(guess.encode())

        response = client_socket.recv(1024).decode()
        print(response)

        if response.startswith("Parabéns") or response.startswith("A palavra era"):
            break

finally:
    # Encerrando a conexão
    client_socket.close()
