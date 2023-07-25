package com.uea.TesteWareFlow.service;

import com.uea.TesteWareFlow.dto.PastaDto;
import com.uea.TesteWareFlow.dto.UsuarioDto;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import com.uea.TesteWareFlow.repository.PastaRepository;
import com.uea.TesteWareFlow.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UsuarioPastaService {

        @Autowired
        UsuarioRepository usuarioRepository;

        @Autowired
        PastaRepository pastaRepository;


    public ResponseEntity<PastaDto> relacionarPastaUsuario(Pasta pasta,Usuario usuario){

        Usuario _usuario = usuario;
//        List<Usuario> listaUsuarios = pasta.getUsuarios();
//        listaUsuarios.add(_usuario);
//
//        pasta.setUsuarios(listaUsuarios);
        UUID idPasta = pasta.getId_pasta();
        pasta.setId_pasta(idPasta ==null ? UUID.randomUUID(): idPasta);

        System.out.println(pasta);
        Pasta _pasta = pastaRepository.save(pasta);
        System.out.println(_pasta);

        return ResponseEntity.ok(PastaDto.transformaEmDTO(_pasta));
    }
    public ResponseEntity<UsuarioDto> relacionarUsuarioPasta(Pasta pasta, Usuario usuario){

//        List<Pasta> listaPasta = usuario.getPastas();
//        listaPasta.add(pasta);
//        System.out.println(listaPasta);
//
//        usuario.setPastas(listaPasta);

        Usuario _usuario = usuarioRepository.save(usuario);
        System.out.println(_usuario);

        return ResponseEntity.ok(UsuarioDto.transformaEmDTO(_usuario));
    }
}
