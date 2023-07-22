package com.uea.TesteWareFlow.dto;

import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import java.util.List;
import java.util.UUID;

@Getter
@Data
@AllArgsConstructor
public class UsuarioDto {
    private UUID id;
    private String nome;
    private String email;

    private List<Pasta> pastas;


    public static UsuarioDto transformaEmDTO(Usuario usuario){
        return new UsuarioDto(usuario.getId_usuario(),usuario.getNomeUsuario(),usuario.getEmail(),usuario.getPastas());
    }

}
