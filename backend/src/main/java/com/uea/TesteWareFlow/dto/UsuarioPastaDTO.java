package com.uea.TesteWareFlow.dto;

import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
public class UsuarioPastaDTO {
    private String emailUsuario;

    private UUID idPasta;
}