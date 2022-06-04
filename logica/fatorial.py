numero = float(input('Digite um número: '))
contador = 1
fatorial = numero

while contador < numero:
  fatorial = fatorial * (numero-contador)
  contador = contador + 1
print('O fatorial de', numero,'é', fatorial)