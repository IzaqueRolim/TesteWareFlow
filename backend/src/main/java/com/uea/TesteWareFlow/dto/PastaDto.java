package com.uea.TesteWareFlow.dto;

import com.uea.TesteWareFlow.model.Arquivo;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PastaDto {
    private UUID id;

    private String nome;
    private LocalDate data_criacao;
    private String rota_compartilhamento;
    private List<Usuario> usuarios;
    private  List<Arquivo> arquivos;

    public static PastaDto transformaEmDTO(Pasta pasta){
        return new PastaDto(pasta.getId_pasta(),pasta.getNomePasta(),pasta.getData_criacao(),pasta.getRota_compartilhamento(),pasta.getUsuarios(),pasta.getArquivos());
    }
}
