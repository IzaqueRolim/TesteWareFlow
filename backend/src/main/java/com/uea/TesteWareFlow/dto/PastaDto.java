package com.uea.TesteWareFlow.dto;

import com.uea.TesteWareFlow.model.Pasta;
import lombok.Data;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@Data
public class PastaDto {
    private Long id;

    private String nome;
    private LocalDate data_criacao;
    private String rota_compartilhamento;

    public PastaDto(Long id, String nome, LocalDate dataCriacao, String rotaCompartilhamento) {
        this.id = id;
        this.nome=nome;
        this.data_criacao=dataCriacao;
        this.rota_compartilhamento=rotaCompartilhamento;
    }

    public static PastaDto transformaEmDTO(Pasta pasta){
        return new PastaDto(pasta.getId(),pasta.getNome(),pasta.getData_criacao(),pasta.getRota_compartilhamento());
    }
}
