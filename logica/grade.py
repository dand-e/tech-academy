prova1 = float(input('Digite a nota da p1: '))
prova2 = float(input('Digite a nota da p2: '))
trabalho = float(input('Digite a nota do trabalho: '))
media = ((prova1*2)+(prova2*2)+trabalho)/5

if media >= 6:
  print('Alune aprovade!!')
else:
  if media >= 3:
    print('Alune em recuperação')
  else:
    print('Alune reprovade')