programa {
  funcao inicio() {
    //Variáveis
    inteiro r_pf = 40
    inteiro r_pj = 33
    inteiro t_pf = 12
    inteiro t_pj = 42
    real v_pf = 2350.00
    real v_pj = 8900.00
    
    inteiro r_total = r_pf + r_pj
    inteiro t_total = t_pf + t_pj
    real v_total = v_pf + v_pj
    real m_valorpf = v_pf / r_pf
    real m_valorpj = v_pj / r_pj
    real m_tempopj = t_pj / r_pj
    real m_tempopf = t_pf / r_pf
    inteiro m_tmepopf_m = m_tempopf * 60
    inteiro m_tmepopj_m = m_tempopj * 60
    
    //Aparência
    escreva("Em nossa última pesquisa com o Capitão e a averiguação com o Rico, verificamos que tivemos...")
    escreva("\nRelatórios para PF: " + r_pf)
    escreva("\nRelatórios para PJ: " + r_pj)
    escreva("\nTivemos tempos diferentes para fazer os relatórios. O recruta ainda não sabe fazer relatórios eficientemente")
    escreva("\nHoras para fazer os relatórios PF: " + t_pf)
    escreva("\nHoras para fazer os relatórios PJ: " + t_pj)
    escreva("\nTambém temos os dados de quanto lucramos com os relatórios. Pelo visto o recruta sabe como fazer relatórios de sucesso...")
    escreva("\nObtido no relatório PF em reais: " + v_pf)
    escreva("\nObtido no relatório PJ em reais: " + v_pj)

    escreva("\n")
    escreva("\nFizemos um total de: " + r_total + " relatórios")
    escreva("\nTrabalhamos um total de: " + t_total + " horas")
    escreva("\nLucramos um total de R$: " + v_total + " Reais")
    
    escreva("\n")
    escreva("\nTemos uma média de valor recebido para cada relatório PF de R$: " + m_valorpf)
    escreva("\nTemos uma média de valor recebido para cada relatório PJ de R$: " + m_valorpj)

    escreva("\n")
    escreva("\nTemos uma média de tempo para fazer cada relatório PF de: " + m_tempopf)
    escreva("\nTemos uma média de tempo para fazer cada relatório PF de: " + m_tempopj)

    escreva("\n")
    escreva("\nEm minutos ficaria " + m_tmepopf_m + " minutos e " + m_tmepopj_m + " minutos, respectivamente.")

    
  }
}
