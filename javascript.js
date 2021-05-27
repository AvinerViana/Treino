function carregar(){
        var data = new Date()
        var dia = data.getDay()
        var foto = window.document.getElementById('foto')
        var texto = window.document.getElementById('texto')
        var som = window.document.getElementById('som')

            if (dia == 0) {
                titulo.innerHTML = "Mantra da Grande Compaixão"
                texto.innerHTML = "Utilizado para dissipar obstáculos cognitivos e emocionais relativos à raiva.<br> Primeiramente, mentalize pessoas e seres queridos e deseje a eles felicidade e amor <br> Quando surgir um sentimento de bem-querer e felicidade, mude o foco de seus bons votos para <br> aquelas pessoas com quem tem uma relação negativa e repita o mantra: <br> 'OM MANI PADME HUM!'"  
                img.src = 'avalokita.png'
        }
            else if (dia == 1) {
                titulo.innerHTML = "Mantra da Grande Sabedoria"
                texto.innerHTML = "Evoca nossa sabedoria interna e produz lucidez perante as dificuldades, eliminando os enganos cognitivos. Lembre-se de como é possível atingir a lucidez e mentalize que todas as aparências são ilusórias que são projeções de nossa mente deludida e repita 108 vezes o Mantra: <br> <p>'OM GATE GATE PARAGATE PARASAMGATE BODHI SVAHA!'</p>"
                foto.src = 'prajna.png'
            }
            else if (dia == 2){
                titulo.innerHTML = "Mantra de Guru Rinpoche"
                texto.innerHTML = "OM AH HUNG GURU PEMA SIDHI HUNG!"
                foto.src = 'guru.png'
        }   
            else if (dia == 3){
                titulo.innerHTML = "Mantra do Buddha da Medicina"
                texto.innerHTML = "OM BEKA DZE BEKA DZE MAHA BEKA DZE RADZA SAMUDGATE SOHA!"
                foto.src = 'medicina.png'
        }       
            else if (dia == 4){
                titulo.innerHTML = "Mantra Shakyamuni Buddha"
                texto.innerHTML = "O mantra de Buda Shakyamuni é considerado a essência de Buda e sua iluminação. Recitar esse mantra atrai energias de cura, de proteção e desenvolve a paciência. Além de purificar o karma obscuro, traz à tona nossa sabedoria interior naqueles momentos em que a insegurança toma conta. Esse é o mantra do Grande Vitorioso, aquele que transcende todos os sofrimentos, vence todas as negatividades, ilusões e nos revelou um caminho: o Equilíbrio Perfeito. Shakyamuni é o fundador histórico do Budismo, sendo ele próprio a personificação da Grande Compaixão. Seus ensinamentos nos levam para o caminho do equilíbrio e do amor incondicional e compassivo. <br> OM MUNI MUNI MAHAMUNI SHAKYAMUNI YE SOHA!"
                foto.src = "shakyamuni.png"
        }        
            else if (dia == 5){
                titulo.innerHTML = "Prece Dissipiando Obstáculos pelo Caminho"
                texto.innerHTML = "DÜ SUM SANG DJE GU RU RIN PO TCHE <br> NGÖ DRUB KUN DAG DE UA TCHEN POI JAB <br> BAR TCHED KUN SEL DUD DUL DRAG PO TSAL <br> SOL UA DEB SO DJIN DJI LAB TU SOL <br> TCHI NANG SANG UE BAR TCHED JI UA DANG <br> SAM PA LUN DJI DRUB PAR DJIN DJI LOB!"
                foto.src = "mandala.png"
        }
            else if (dia == 6){
                titulo.innerHTML = "Os Três Mantras Ferozes"
                texto.innerHTML = "TCHI YONG BA SHOG <br> Que venha o que vier!<br><br>GANG ITAR'GRO BA SONG <br> Que me leve para onde for! <br><br> TCHI KYANG DGO PA MED <br> Nada mais é necessário!"
                foto.src = "tsangpa.png"
        }
    }