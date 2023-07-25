package com.uea.TesteWareFlow.dto;

import com.uea.TesteWareFlow.model.Arquivo;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@Getter
public class PastaParaUsuarioDto {
    private UUID id;
    private String nome;
    private LocalDate data_criacao;
    private String rota_compartilhamento;

        public static  PastaParaUsuarioDto transformaEmDTO(Pasta pasta){
        return new PastaParaUsuarioDto(pasta.getId_pasta(),pasta.getNomePasta(),pasta.getData_criacao(),pasta.getRota_compartilhamento());
    }

}
