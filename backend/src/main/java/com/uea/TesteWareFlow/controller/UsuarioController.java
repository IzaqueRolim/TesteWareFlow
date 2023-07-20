package com.uea.TesteWareFlow.controller;

import com.uea.TesteWareFlow.dto.PastaDto;
import com.uea.TesteWareFlow.dto.UsuarioPastaDTO;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import com.uea.TesteWareFlow.repository.PastaRepository;
import com.uea.TesteWareFlow.repository.UsuarioRepository;
import lombok.Getter;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    PastaRepository pastaRepository;


    PastaDto pastaDto;

    @PostMapping
    private Usuario createUser(@RequestBody Usuario usuario){
        Usuario usuarioExistente = usuarioRepository.findByEmail(usuario.getEmail());

        if(usuarioExistente!=null){
            throw new Error("Email usado por outro usuario!Tente outro");
        }

        return usuarioRepository.save(usuario);
    }

    @PostMapping("/adicionarPasta")
    private String criarPastaNaContaDoUsuario(@RequestBody UsuarioPastaDTO usuarioPastaDTO){
        Optional<Usuario> usuarioExistente  = usuarioRepository.findById(usuarioPastaDTO.getIdUsuario());
        Optional<Pasta> pastaExistente      = pastaRepository.findById(usuarioPastaDTO.getIdPasta());

        List<Pasta> pastas = new ArrayList<>();

        if(usuarioExistente.isEmpty()){
            throw new Error("Usuario nao encontrado");
        }

        Usuario usuario = usuarioExistente.get();
        Pasta pasta = pastaExistente.get();

        usuario.getPastas().add(pasta   );
        pasta.getUsuarios().add(usuario);

        usuarioRepository.save(usuario);
        pastaRepository.save(pasta);

        return "Pasta adicionada";
    }

    @GetMapping("{id}")
    private Usuario procurarUsuarioPeloId(@PathVariable Long id){
        return usuarioRepository.findById(id).get();
    }

}
