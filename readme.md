# Exercicio - if/else

Neste exercicio em vez de usar dimensões fixas, optei por fazer ums tela que se adapta-se a qualquer ecrã de compudador, preenchendo a forma dela na totalidade.
Usei "(mouseX < width / 2)" para dividir o ecrã ao meio e consoante a posição horizontal do mouse, o fundo ir mudando de cor entre um tom mais claro (lado esquerdo) e outro mais escuro (lado direito). 
Voltei a dividir o ecrã mas desta vez com o "mouseY", onde consoante a posição vertical do mouse a figura central ia alterando entre um retângulo (cima) e um circulo (baixo). Usei aqui o "fill" para defenir então as suas cores.
Para garantir que as formas ficavam sempre no centro do ecrã usei o "(width / 2 e height / 2)"

Referências:
https://p5js.org/es/reference/p5/mouseX/
https://p5js.org/reference/p5/background/
https://p5js.org/reference/p5/mouseY/
https://p5js.org/reference/p5/rect/
https://p5js.org/reference/p5/ellipse/
https://p5js.org/reference/p5/fill/
https://p5js.org/reference/p5/strokeWeight/
https://p5js.org/reference/p5/stroke/