class RecintosZoo {

    analisaRecintos(animal, quantidade) {
    }

}

describe('Recintos do Zoologico', () => {

    ('Deve rejeitar animal inválido', () => {
            const resultado = new RecintosZoo().analisaRecintos('leao', 3);
            expect(resultado.erro).toBe("Animal inválido");
            expect(resultado.recintosViaveis).toBeFalsy();
        });

    ('Deve rejeitar quantidade inválida', () => {
            const resultado = new RecintosZoo().analisaRecintos('MACACO', 1);
            expect(resultado.erro).toBe("Quantidade inválida");
            expect(resultado.recintosViaveis).toBeFalsy();
    });

    ('Não deve encontrar recintos para 4 HIPOPOTAMO', () => {
            const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 4);
            expect(resultado.erro).toBe("Não há recinto viável");
            expect(resultado.recintosViaveis).toBeFalsy();
        });

    ('Deve encontrar recinto para 1 crocodilo', () => {
        const resultado = new RecintosZoo().analisaRecintos('CROCODILO', 1);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 5 total: 8)');
        expect(resultado.recintosViaveis.length).toBe(1);
    });

    ('Deve encontrar recintos para 2 macacos', () => {

        const resultado = new RecintosZoo().analisaRecintos('MACACO', 2);
        expect(resultado.erro).toBeFalsy();
        expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 5 total: 10)');
        expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 3 total: 5)');
        expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 2 total: 7)');
        expect(resultado.recintosViaveis.length).toBe(3);
    });

    <script>
    var n1 = Number.parseFloat ( window.prompt('digite um animal:' ))
    var n2 = Number.parseInt(window.prompt('digite outro animal '))
     var s = n1 +n2
     window.alert('A soma dos valores é ' + s)
     
     
  </script>
});
