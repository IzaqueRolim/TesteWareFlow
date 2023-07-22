package com.uea.TesteWareFlow.dto;

import com.uea.TesteWareFlow.model.Usuario;

import java.util.UUID;

public interface PastaProjection {
    UUID getIdPasta();
    String getNomePasta();
    UUID getIdUsuario();
    String getNomeUsuario();

    Usuario getUsuarios();
}