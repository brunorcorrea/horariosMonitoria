function Names(){
    let subjectId = document.getElementById("input").value;
    let edf = [
            {
                name: "Luiza Rafael",
                schedules: "Segunda-Feira: 17h30 - 20h30 <br> Terça-Feira: 17h30 - 20h30 <br> Quarta-Feira: 17h30 - 20h30"
            },
            {
                name: "Victória Rosa",
                schedules: " Segunda-Feira: 18h00 - 21h00 <br> Terça-Feira: 16h30 - 18h30 <br> Quarta-Feira: 16h30 - 18h30 <br> Quinta-Feira: 16h30 - 18h30"
            },
            {
                name: "Vitória Dias",
                schedules: "Segunda-Feira: 17h00 - 20h00 <br> Terça-Feira: 14h00 - 16h00 <br> Quarta-Feira: 15h00 - 18h00 <br> Quinta-Feira: 15h00 - 17h00"
            }
        ]

    let enf = [
            {
                name: "Ana Laura Fabris",
                schedules: "Segunda-Feira: 19h00 - 22h00 <br> Quarta-Feira: 19h00 - 22h00 <br> Quinta-Feira: 19h00 - 22h00"
            },
            {
                name: "Leticia Maboni",
                schedules: "Segunda-Feira: 19h00 - 22h00 <br> Quarta-Feira: 19h00 - 22h00 <br> Quinta-Feira: 19h00 - 22h00"
                
            },
            {
                name: " Marina Lucon",
                schedules: "Terça-Feira: 19h00 - 22h00 <br> Sexta-Feira: 18h30 - 21h30 <br> Sábado: 08h00 - 11h00"
            },
            {
                name: "Nathália Rocha",
                schedules: "Segunda-Feira: 08h00 - 10h00 <br> Terça-Feira: 08h00 - 09h00 <br> Quarta-Feira: 8h00 - 11h00 <br> Quinta-Feira: 09h00 - 11h00 <br> Sexta-Feira: 08h00 - 10h00"
            }
        ]

    let geo = [
            {
                name: "Camilly Claudino Leite",
                schedules: "Segunda-Feira: 18h30 - 21h30 <br> Quarta-Feira: 18h30 - 21h30 <br> Quinta-Feira: 18h30 - 21h30"
            },
            {
                name: "Isabella de Matos",
                schedules: "Terça-Feira: 18h00 - 21h00 <br> Sexta-Feira: 13h30 - 16h30 <br> Sábado: 8h00 - 11h00"
            },
            {
                name: "Nicolas Chiarotti",
                schedules: "Segunda-Feira: 18h00 - 21h00 <br> Terça-Feira: 18h00 - 21h00 <br> Quinta-Feira: 18h00 - 21h00"
            }
        ]

    let inf = [
            {
                name: "Bruno Corrêa",
                schedules: "Segunda-Feira: 18h30 - 21h30 <br> Quarta-Feira: 18h30 - 21h30 <br> Sexta-Feira: 13h00 - 16h00"
            },
            {
                name: "Eduardo Correia",
                schedules: "Terça-Feira: 14h00 - 17h00 <br> Quinta-Feira: 19h00 - 22h00 <br> Sábado: 08h00 - 11h00"
            }
        ]
    
    let qld = [
            {
                name: "Giovanna Jürgensen",
                schedules: "Segunda-Feira: 19h00 - 21h00 <br> Terça-Feira: 19h00 - 21h00 <br> Quarta-Feira: 19h00 - 21h00 <br> Quinta-Feira: 19h00 - 21h00 <br> Sábado: 09h00 - 10h00"
            },
            {
                name: "Mayara Ferraz",
                schedules: "Segunda-Feira: 13h30 - 15h30 <br> Terça-Feira: 13h30 - 15h30 <br> Quarta-Feira: 13h30 - 15h30 <br> Quinta-Feira: 13h30 - 15h30 <br> Sexta-Feira: 13h30 - 14h30"
            }
        ]

    let mec = [
            {
                name: "Felipi Vieira",
                schedules: "Quarta-Feira: 19h00 - 22h00 <br> Quinta-Feira: 19h00 - 22h00 <br> Sexta-Feira: 19h00 - 22h00"
            },
            {
                name: "Guilherme Rocha",
                schedules: "Segunda-Feira: 19h00 - 22h00 <br> Terça-Feira: 19h00 - 22h00 <br> Quinta-Feira: 19h00 - 22h00"
            },
            {
                name: "Lorena Milani",
                schedules: "Segunda-Feira: 19h00 - 22h00 <br> Terça-Feira: 19h00 - 22h00 <br> Quarta-Feira: 19h00 - 22h00"
            },
            {
                name: "Pedro Henrique",
                schedules: "Segunda-Feira: 14h00 - 17h00 <br> Terça-Feira: 14h00 - 17h00 <br> Quinta-Feira: 14h00 - 17h00"
            }
        ]
    
    let beq = [
            {
                name: "Gabriella Rezende",
                schedules: "Terça-Feira: 18h00 - 21h00 <br> Quinta-Feira: 18h00 - 21h00 <br> Sexta-Feira: 13h30 - 16h30"
            },
            {
                name: "Rebecca Vidigal",
                schedules: "Segunda-Feira: 18h00 - 21h00 <br> Quarta-Feira: 18h00 - 21h00 <br> Quinta-Feira: 18h00 - 21h"
            },
            {
                name: "Wendy Anjos",
                schedules: "Segunda-Feira: 14h00 - 17h00 <br> Terça-Feira: 18h00 - 19h00 <br> Quinta-Feira: 18h00 - 19h00 <br> Sexta-Feira: 18h00 - 19h00 <br> Sábado: 8h00 - 11h00"
            }
        ]

    let hum = [
            {
                name: "Brenda Pretel",
                schedules: "Segunda-Feira: 13h30 - 16h30 <br> Terça-Feira: 18h00 - 21h00 <br> Sexta-Feira: 13h00 - 16h00"
            },
            {
                name: "Maria Clara Herreria",
                schedules: "Segunda-Feira: 15h00 - 18h00 <br> Terça-Feira: 15h00 - 16h30 <br> Quarta-Feira: 13h30 - 15h00 <br> Quinta-Feira: 13h00 - 16h00"
            },
            {
                name: "Mirella Furtado",
                schedules: "Segunda-Feira: 12h30 - 15h30 <br> Quarta-Feira: 18h30 - 20h00 <br> Quinta-Feira: 18h30 - 20h00 <br> Sexta-Feira: 12h30 - 15h30"
            },
            {
                name: "Yan Correia",
                schedules: "Segunda-Feira: 16h00 - 19h00 <br> Sexta-Feira: 13h30 - 16h30 <br> Sábado: 08h00 - 11h00"
            }
        ]

    let fem = [
            {
                name: "Ana Caroline Martins",
                schedules: "Terça-Feira: 14h00 - 17h00 <br> Quarta-Feira: 14h00 - 17h00 <br> Quinta-Feira: 14h00 - 17h00"
            },
            {
                name: "Gustavo Granjeia",
                schedules: "Terça-Feira: 08h00 - 11h00 <br> Quarta-Feira: 08h00 - 11h00 <br> Quinta-Feira: 08h00 - 11h00"
            },
            {
                name: "Iuri Barbosa",
                schedules: "Terça-Feira: 13h10 - 16h10 <br> Sexta-Feira: 13h10 - 16h10 <br> Sábado: 8h30 - 11h30"
            },
            {
                name: "Marília Jampani",
                schedules: "Segunda-Feira: 18h00 - 21h00 <br> Terça-Feira: 18h00 - 21h00 <br> Quarta-Feira: 18h00 - 21h00"
            },
            {
                name: "Raphael Penachioni",
                schedules: "Terça-Feira: 18h00 - 20h00 <br> Quarta-Feira: 18h00 - 20h00 <br> Quinta-Feira: 18h00 - 20h00 <br> Sexta-Feira: 14h00 - 17h00"
            },
            {
                name: "Vitória Yumi",
                schedules: "Segunda-Feira: 18h00 - 21h00 <br> Quarta-Feira: 18h00 - 21h00 <br> Sexta-Feira: 14h00 - 17h00"
            }
        ]
    
    let courses = {edf,enf,geo,inf,qld,mec,beq,hum,fem};
    let course = courses[subjectId];
    
    let table = document.createElement("table");
    table.setAttribute("cellpadding","10px")
    let linha = document.createElement("tr");
    let data = document.createElement("td");
    let data1 = document.createElement("td");
    data.innerHTML = "Monitor(a):";
    data1.innerHTML = "Horários: ";
    linha.appendChild(data);
    linha.appendChild(data1);
    table.appendChild(linha);
    for(let i = 0;i < course.length;i++)
    {
        let row = document.createElement("tr");
        let name = course[i].name;
        let schedules = course[i].schedules;
        // let div = document.createElement("div");
        // div.innerHTML = "<br> Monitor(a): " + name + "<br> Horários: <br>" + schedules + "<br><hr>";
        // document.body.appendChild(div);
        let nome = document.createElement("td");
        nome.innerHTML = name;
        row.appendChild(nome);
        let horarios = document.createElement("td");
        document.body.appendChild(table);
        horarios.innerHTML = schedules;
        row.appendChild(horarios);
        table.appendChild(row);
        document.body.appendChild(table);
        }
        
    
}