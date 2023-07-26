package com.uea.TesteWareFlow.controller;

import com.uea.TesteWareFlow.dto.PastaDto;
import com.uea.TesteWareFlow.dto.UsuarioDto;
import com.uea.TesteWareFlow.dto.UsuarioPastaDTO;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import com.uea.TesteWareFlow.repository.PastaRepository;
import com.uea.TesteWareFlow.repository.UsuarioRepository;
import com.uea.TesteWareFlow.service.UsuarioPastaService;
import com.uea.TesteWareFlow.service.UsuarioService;
import lombok.Getter;
import org.apache.catalina.User;
import org.apache.coyote.Response;
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
    @Autowired
    UsuarioService usuarioService;


    PastaDto pastaDto;
    @PostMapping("login")
    private ResponseEntity<?> login(@RequestBody Usuario usuario){
            Usuario usuarioEncontrado = usuarioRepository.findByEmail(usuario.getEmail());
            System.out.println(usuarioEncontrado);
            System.out.println(usuario.getSenha());
            System.out.println(usuario.getSenha().equals(usuarioEncontrado.getSenha()));
             boolean senhaEstaCorreta = usuario.getSenha().equals(usuarioEncontrado.getSenha());

            if(usuarioEncontrado != null && senhaEstaCorreta){
                    return ResponseEntity.ok(usuarioEncontrado);
            }

            return ResponseEntity.status(400).body("Usuario ou senha incorretos");
    }

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
        Usuario usuarioEncontrado  = usuarioRepository.findByEmail(usuarioPastaDTO.getEmailUsuario());

        System.out.println(pastaEncontrada.get());
        System.out.println(usuarioEncontrado);

        if(usuarioEncontrado == null || pastaEncontrada==null){
            return ResponseEntity.status(500).body("Usuário ou pasta não encontradas");
        }

        return usuarioService.adicionarPastaAoUsuario(pastaEncontrada.get(),usuarioEncontrado);
    }

    @PutMapping("{id}")
    private ResponseEntity<?> editarUsuario(@RequestBody Usuario usuario, @PathVariable UUID id){
        Usuario usuarioEncontrado = usuarioRepository.findById(id).orElse(null);

        if(usuarioEncontrado!= null){
            if(usuario.getNomeUsuario() != null){
                usuarioEncontrado.setNomeUsuario(usuario.getNomeUsuario());
            }
            if(usuario.getEmail() != null){
                usuarioEncontrado.setEmail(usuario.getEmail());
            }
            if(usuario.getSenha() != null){
                usuarioEncontrado.setSenha(usuario.getSenha());
            }

            return ResponseEntity.ok(usuarioRepository.save(usuarioEncontrado));
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("{id}")
    private ResponseEntity<?> procurarUsuarioPeloId(@PathVariable UUID id){
        return ResponseEntity.ok(UsuarioDto.transformaEmDTO(usuarioRepository.findById(id).get()));
    }

}
