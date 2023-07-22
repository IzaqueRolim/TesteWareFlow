package com.uea.TesteWareFlow.controller;

import com.uea.TesteWareFlow.dto.PastaDto;
import com.uea.TesteWareFlow.dto.UsuarioDto;
import com.uea.TesteWareFlow.dto.UsuarioPastaDTO;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import com.uea.TesteWareFlow.repository.PastaRepository;
import com.uea.TesteWareFlow.repository.UsuarioRepository;
import com.uea.TesteWareFlow.service.UsuarioPastaService;
import lombok.Getter;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    PastaRepository pastaRepository;

    @Autowired
    UsuarioPastaService usuarioPastaService;


    PastaDto pastaDto;

    @PostMapping
    private Usuario createUser(@RequestBody Usuario usuario){
        Usuario usuarioExistente = usuarioRepository.findByEmail(usuario.getEmail());

        if(usuarioExistente!=null){
            throw new Error("Email usado por outro usuario!Tente outro");
        }

        usuario.setId_usuario(UUID.randomUUID());


        return usuarioRepository.save(usuario);
    }

    @PostMapping(value = "/adicionarPasta")
    private ResponseEntity<?> criarPastaNaContaDoUsuario(@RequestBody UsuarioPastaDTO usuarioPastaDTO){
        Optional<Pasta> pastaEncontrada     = pastaRepository.findById(usuarioPastaDTO.getIdPasta());
        Usuario usuarioEncontrado  = usuarioRepository.findById(usuarioPastaDTO.getIdUsuario()).get();


        if(usuarioEncontrado == null || pastaEncontrada==null){
            return ResponseEntity.status(500).body("Usuário ou pasta não encontradas");
        }

        return usuarioPastaService.relacionarPastaUsuario(pastaEncontrada.get(),usuarioEncontrado);
    }

    @GetMapping("{id}")
    private Usuario procurarUsuarioPeloId(@PathVariable UUID id){
        return usuarioRepository.findById(id).get();
    }

}
