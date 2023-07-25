package com.uea.TesteWareFlow.service;

import com.uea.TesteWareFlow.dto.PastaDto;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import com.uea.TesteWareFlow.repository.PastaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UsuarioService {

    @Autowired
    PastaRepository pastaRepository;
    public ResponseEntity<?> adicionarPastaAoUsuario(Pasta pasta, Usuario usuario) {
        Usuario _usuario = usuario;
        List<Usuario> listaUsuarios = pasta.getUsuarios();
        listaUsuarios.add(_usuario);

        pasta.setUsuarios(listaUsuarios);
        UUID idPasta = pasta.getId_pasta();
        pasta.setId_pasta(idPasta ==null ? UUID.randomUUID(): idPasta);

        System.out.println(pasta);
        Pasta _pasta = pastaRepository.save(pasta);
        System.out.println(_pasta);

        return ResponseEntity.ok(PastaDto.transformaEmDTO(_pasta));
    }
}
