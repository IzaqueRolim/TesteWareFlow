package com.uea.TesteWareFlow.controller;

import com.uea.TesteWareFlow.dto.*;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import com.uea.TesteWareFlow.repository.PastaRepository;
import com.uea.TesteWareFlow.repository.UsuarioRepository;
import com.uea.TesteWareFlow.service.PastaService;
import com.uea.TesteWareFlow.service.UsuarioPastaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

import javax.swing.text.html.Option;
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
    @Autowired
    PastaService pastaService;

    @PostMapping("{id}")
    private ResponseEntity<PastaDto> createPasta(@RequestBody PastaDtoInput pasta, @PathVariable UUID id){
        Optional<Usuario> usuarioExistente = usuarioRepository.findById(id);

        if(usuarioExistente.isEmpty()){
            throw new Error("Usuario nao encontrado");
        }


        return pastaService.criarNovaPasta(pasta,usuarioExistente.get());
    }

    @PutMapping("adicionarUsuario")
    private ResponseEntity<PastaDto> adicionarUsuarioAPasta(@RequestBody UsuarioPastaDTO usuarioPastaDTO){
        Optional<Usuario> usuarioEncontrado = usuarioRepository.findById(usuarioPastaDTO.getIdUsuario());
        Optional<Pasta>     pastaEncontrada     = pastaRepository.findById(usuarioPastaDTO.getIdPasta());

        System.out.println(usuarioEncontrado.get());
        System.out.println(pastaEncontrada.get());

        return pastaService.adicionarUsuarioAPasta(pastaEncontrada.get(),usuarioEncontrado.get());

    }

    @GetMapping("{id}")
    private ResponseEntity<?> procurarPastaPeloId(@PathVariable UUID id){
        Optional<Pasta> pastaEncontrada = pastaRepository.findById(id);

        if(pastaEncontrada.isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return  ResponseEntity.ok(PastaDto.transformaEmDTO(pastaEncontrada.get()));
    }
}
