package com.uea.TesteWareFlow.dto;

import lombok.Data;
import lombok.Getter;

import java.util.List;

@Getter
@Data
public class UsuarioDto {
    private Long id;
    private String nome;
    private String email;
    private List<PastaDto> pastas;
}
