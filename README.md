🚀 Desenvolvi um novo projeto em JavaScript e estou empolgado(a) para compartilhar com vocês! 🤓 É um jogo de adivinhação de número secreto onde o sistema escolhe um número aleatório e desafia o jogador a adivinhar. 🎯

A mágica por trás disso? A função `Math.random()` escolhe um número aleatório (entre 0 e 1), e a função `parseInt()` transforma isso em um número inteiro para facilitar o jogo. 💡 Se o jogador não acertar, o sistema dá dicas se o número é maior ou menor e reinicia o loop até que o segredo seja descoberto!

Mas, como limitar o intervalo para algo como 1 a 10? Simples! Usamos `parseInt(Math.random() * 10 + 1)` para garantir que o número aleatório esteja dentro desse range. ⚡️

Pra quem ainda não conhece:

🔎 **`parseInt()`**: Converte uma string para um número inteiro, perfeito quando precisamos transformar textos em valores numéricos.
🔄 **`Math.random()`**: Gera um número pseudo-aleatório entre 0 e 1, que depois ajustamos para o intervalo que queremos.

Experimente por si só!
