package com.uea.TesteWareFlow.dto;

import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioDto {
    private UUID id;
    private String nome;
    private String email;

    private List<Pasta> pastas;


    public static UsuarioDto transformaEmDTO(Usuario usuario){
        List<PastaParaUsuarioDto> pastaParaUsuarioDtos = new ArrayList<>();
        List<Pasta> pastaList = usuario.getPastas();
        pastaParaUsuarioDtos = pastaList.stream().map(element -> {
            return PastaParaUsuarioDto.transformaEmDTO(element);
        }).collect(Collectors.toList());


        return new UsuarioDto(usuario.getId_usuario(),usuario.getNomeUsuario(),usuario.getEmail(),usuario.getPastas());
    }

}
