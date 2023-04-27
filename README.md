# projeto-integrador-2

### Cronograma de atividades - gantt

* Projeto integrador II

```mermaid
    gantt
        title Dimenlogia
        dateFormat  YYYY-MM-DD

        section Planejamento
        Tema                :done, a1, 2023-04-01, 7d
        Definição           :done, a2, after a1, 7d

        section Requisitos
        Problemas           :active, b1, after a2  , 7d
        Tecnologias         :active, b2, after b1  ,7d

        section Documentação
        Teoria         :c1, after b2, 14d
        Desenvolvimento      :c2, after c1, 14d
        Conclusão       :c3, after c2, 14d

        section Execução
        Protótipo           :d1, after c3, 14d
        Testes              :d2, after d1, 7d

        section Defesa
        Apresentação        :e1, after d2, 7d

```
