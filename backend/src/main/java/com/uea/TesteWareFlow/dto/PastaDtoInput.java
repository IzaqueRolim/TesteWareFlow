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
public class PastaDtoInput {
    private UUID id;
    private String nomePasta;

    public static PastaDtoInput transformaEmDTO(Pasta pasta){
        return new PastaDtoInput(pasta.getId_pasta(),pasta.getNomePasta());
    }
}
