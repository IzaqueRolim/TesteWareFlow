package com.uea.TesteWareFlow.controller;

import com.uea.TesteWareFlow.dto.PastaDto;
import com.uea.TesteWareFlow.dto.PastaProjection;
import com.uea.TesteWareFlow.dto.UsuarioDto;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import com.uea.TesteWareFlow.repository.PastaRepository;
import com.uea.TesteWareFlow.repository.UsuarioRepository;
import com.uea.TesteWareFlow.service.UsuarioPastaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("pasta")
public class PastaController {

    @Autowired
    PastaRepository pastaRepository;
    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    UsuarioPastaService usuarioPastaService;

    @PostMapping("{id}")
    private ResponseEntity<PastaDto> createPasta(@RequestBody Pasta pasta, @PathVariable UUID id){
        Optional<Usuario> usuarioExistente = usuarioRepository.findById(id);

        if(usuarioExistente.isEmpty()){
            throw new Error("Usuario nao encontrado");
        }

//        Usuario _usuario = usuarioExistente.get();
//        List<Usuario> listaUsuarios = new ArrayList<>();
//        listaUsuarios.add(_usuario);
//
//        System.out.println(_usuario);
//        pasta.setUsuarios(listaUsuarios);
//        pasta.setId_pasta(UUID.randomUUID());
//
//        Pasta _pasta = pastaRepository.save(pasta);
//        System.out.println(_pasta);

        return usuarioPastaService.relacionarPastaUsuario(pasta,usuarioExistente.get());
    }

    @PutMapping
    private void adicionarUsuarioAPasta(){

    }

    @GetMapping("{id}")
    private ResponseEntity<?> procurarPastaPeloId(@PathVariable UUID id){
        Optional<Pasta> pastaEncontrada = pastaRepository.findById(id);

        if(pastaEncontrada.isEmpty()){
            return ResponseEntity.ok().body("Pasta nao encontrada");
        }

        return  ResponseEntity.ok(PastaDto.transformaEmDTO(pastaEncontrada.get()));
    }
}
