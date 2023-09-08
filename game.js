class Game {
    constructor() {
        this.palavras = [
            {
                palavra: "Bicicleta",
                dicas: [
                    "Meio de transporte com duas rodas e pedais.",
                    "Frequentemente usada em competições como o Tour de France.",
                    "Um veículo que promove um estilo de vida saudável.",
                    "Pode ser dobrável ou de estrada.",
                    "Uma alternativa ecológica ao carro."
                ]
            },
            {
                palavra: "Piano",
                dicas: [
                    "Um instrumento de teclado com uma variedade de notas.",
                    "Famoso por composições clássicas de Beethoven e Mozart.",
                    "Requer habilidade para tocar com expressão.",
                    "Possui cordas e martelos em seu interior.",
                    "Muitas vezes encontrado em salas de concerto."
                ]
            },
            {
                palavra: "Floresta",
                dicas: [
                    "Um ecossistema complexo com árvores, plantas e vida selvagem.",
                    "Atua como um sumidouro de carbono na luta contra as mudanças climáticas.",
                    "Lar de criaturas misteriosas como o lince ibérico.",
                    "As árvores liberam oxigênio durante a fotossíntese.",
                    "Requer proteção para preservar sua biodiversidade."
                ]
            },
            {
                palavra: "Computador",
                dicas: [
                    "Uma máquina binária que processa informações eletronicamente.",
                    "Inventado por Charles Babbage no século XIX.",
                    "Os supercomputadores são usados para simulações complexas.",
                    "A revolução digital transformou a sociedade.",
                    "Um exemplo de hardware é a unidade de processamento central."
                ]
            },
            {
                palavra: "Montanha",
                dicas: [
                    "Uma característica geográfica elevada e escarpada.",
                    "Formadas por processos tectônicos ao longo de milhões de anos.",
                    "O Monte Everest é a montanha mais alta do mundo.",
                    "O alpinismo requer habilidades técnicas e resistência.",
                    "Montanhas podem ser vulcânicas ou dobradas."
                ]
            },
            {
                palavra: "Chocolate",
                dicas: [
                    "Um doce derivado do cacau com várias variações de sabor.",
                    "A Suíça é conhecida por seus chocolates de alta qualidade.",
                    "Contém substâncias estimulantes como a teobromina.",
                    "Pode ser transformado em deliciosas trufas e pralinas.",
                    "Tem propriedades antioxidantes benéficas à saúde."
                ]
            },
            {
                palavra: "Cinema",
                dicas: [
                    "Uma forma de arte que combina elementos visuais e sonoros.",
                    "Oscar é o prêmio mais prestigioso para filmes.",
                    "Filmes como 'Cidadão Kane' são considerados clássicos.",
                    "A montagem é uma técnica crucial na edição de filmes.",
                    "Muitas vezes associado a diretores famosos como Hitchcock."
                ]
            },
            {
                palavra: "Amizade",
                dicas: [
                    "Um vínculo emocional e afetivo entre indivíduos.",
                    "A confiança é um pilar fundamental da amizade.",
                    "Amigos verdadeiros estão lá nos bons e maus momentos.",
                    "A empatia é essencial para construir relacionamentos sólidos.",
                    "O apoio mútuo é uma característica-chave da amizade duradoura."
                ]
            },
            {
                palavra: "Cachorro",
                dicas: [
                    "Um animal domesticado com uma grande variedade de raças.",
                    "Os cães têm uma incrível capacidade de comunicação não verbal.",
                    "São usados em várias funções, como cães de resgate e guias.",
                    "A inteligência dos cães permite treinamento complexo.",
                    "Cães são conhecidos por sua lealdade inabalável aos humanos."
                ]
            },
            {
                palavra: "Aventura",
                dicas: [
                    "Uma jornada emocionante e arriscada em busca de experiências únicas.",
                    "Exploradores famosos como Marco Polo buscaram aventuras.",
                    "A adrenalina é uma parte intrínseca das aventuras radicais.",
                    "Requer coragem para enfrentar o desconhecido.",
                    "Muitas vezes, resulta em histórias extraordinárias e memórias duradouras."
                ]
            },
            {
                palavra: "Bicicleta",
                dicas: [
                    "Meio de transporte com duas rodas e pedais.",
                    "Frequentemente usada em competições como o Tour de France.",
                    "Um veículo que promove um estilo de vida saudável.",
                    "Pode ser dobrável ou de estrada.",
                    "Uma alternativa ecológica ao carro."
                ]
            },
            {
                palavra: "Piano",
                dicas: [
                    "Um instrumento de teclado com uma variedade de notas.",
                    "Famoso por composições clássicas de Beethoven e Mozart.",
                    "Requer habilidade para tocar com expressão.",
                    "Possui cordas e martelos em seu interior.",
                    "Muitas vezes encontrado em salas de concerto."
                ]
            },
            {
                palavra: "Floresta",
                dicas: [
                    "Um ecossistema complexo com árvores, plantas e vida selvagem.",
                    "Atua como um sumidouro de carbono na luta contra as mudanças climáticas.",
                    "Lar de criaturas misteriosas como o lince ibérico.",
                    "As árvores liberam oxigênio durante a fotossíntese.",
                    "Requer proteção para preservar sua biodiversidade."
                ]
            },
            {
                palavra: "Computador",
                dicas: [
                    "Uma máquina binária que processa informações eletronicamente.",
                    "Inventado por Charles Babbage no século XIX.",
                    "Os supercomputadores são usados para simulações complexas.",
                    "A revolução digital transformou a sociedade.",
                    "Um exemplo de hardware é a unidade de processamento central."
                ]
            },
            {
                palavra: "Montanha",
                dicas: [
                    "Uma característica geográfica elevada e escarpada.",
                    "Formadas por processos tectônicos ao longo de milhões de anos.",
                    "O Monte Everest é a montanha mais alta do mundo.",
                    "O alpinismo requer habilidades técnicas e resistência.",
                    "Montanhas podem ser vulcânicas ou dobradas."
                ]
            },
            {
                palavra: "Chocolate",
                dicas: [
                    "Um doce derivado do cacau com várias variações de sabor.",
                    "A Suíça é conhecida por seus chocolates de alta qualidade.",
                    "Contém substâncias estimulantes como a teobromina.",
                    "Pode ser transformado em deliciosas trufas e pralinas.",
                    "Tem propriedades antioxidantes benéficas à saúde."
                ]
            },
            {
                palavra: "Cinema",
                dicas: [
                    "Uma forma de arte que combina elementos visuais e sonoros.",
                    "Oscar é o prêmio mais prestigioso para filmes.",
                    "Filmes como 'Cidadão Kane' são considerados clássicos.",
                    "A montagem é uma técnica crucial na edição de filmes.",
                    "Muitas vezes associado a diretores famosos como Hitchcock."
                ]
            },
            {
                palavra: "Amizade",
                dicas: [
                    "Um vínculo emocional e afetivo entre indivíduos.",
                    "A confiança é um pilar fundamental da amizade.",
                    "Amigos verdadeiros estão lá nos bons e maus momentos.",
                    "A empatia é essencial para construir relacionamentos sólidos.",
                    "O apoio mútuo é uma característica-chave da amizade duradoura."
                ]
            },
            {
                palavra: "Cachorro",
                dicas: [
                    "Um animal domesticado com uma grande variedade de raças.",
                    "Os cães têm uma incrível capacidade de comunicação não verbal.",
                    "São usados em várias funções, como cães de resgate e guias.",
                    "A inteligência dos cães permite treinamento complexo.",
                    "Cães são conhecidos por sua lealdade inabalável aos humanos."
                ]
            },
            {
                palavra: "Aventura",
                dicas: [
                    "Uma jornada emocionante e arriscada em busca de experiências únicas.",
                    "Exploradores famosos como Marco Polo buscaram aventuras.",
                    "A adrenalina é uma parte intrínseca das aventuras radicais.",
                    "Requer coragem para enfrentar o desconhecido.",
                    "Muitas vezes, resulta em histórias extraordinárias e memórias duradouras."
                ]
            }
        ]
    }


    getWord() {
        const indice = Math.floor(Math.random() * this.palavras.length)
        return this.palavras[indice]
    }

    guessedIt(palavra, guessed) {
        return palavra.toLowerCase() === guessed.toLowerCase()
    }

    getTip(dicas = []) {
        this.shuffleArray(dicas)
        if (dicas.length === 0) {
            return {remaningTips: [], tip: ""}
        }
        let dica = dicas.pop()
        return {remaningTips: dicas, tip: dica}
    }

    shouldGiveATip(attempts = 0) {
        return attempts % 2 === 0
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

module.exports = Game