package com.uea.TesteWareFlow.controller;

import com.uea.TesteWareFlow.dto.*;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import com.uea.TesteWareFlow.repository.PastaRepository;
import com.uea.TesteWareFlow.repository.UsuarioRepository;
import com.uea.TesteWareFlow.service.PastaService;
import com.uea.TesteWareFlow.service.UsuarioPastaService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
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

    @PutMapping("{id}")
    private ResponseEntity<?> editarPasta(@RequestBody Pasta pasta, @PathVariable UUID id){
        Pasta pastaEncontrada = pastaRepository.findById(id).orElse(null);

        if (pastaEncontrada != null) {
            pastaEncontrada.setNomePasta(pasta.getNomePasta());

            return ResponseEntity.ok(pastaRepository.save(pastaEncontrada));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("")
    private ResponseEntity<Void> deletarPasta(@RequestBody UsuarioPastaDTO usuarioPastaDTO){
        Pasta pasta = pastaRepository.findById(usuarioPastaDTO.getIdPasta()).get();
        if(pastaRepository.existsById(usuarioPastaDTO.getIdPasta())){
            Usuario usuario = usuarioRepository.findByEmail(usuarioPastaDTO.getEmailUsuario());
            usuario.getPastas().remove(pasta);
            usuarioRepository.save(usuario);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("adicionarUsuario")
    private ResponseEntity<PastaDto> adicionarUsuarioAPasta(@RequestBody UsuarioPastaDTO usuarioPastaDTO){
        Usuario usuarioEncontrado = usuarioRepository.findByEmail(usuarioPastaDTO.getEmailUsuario());
        Pasta   pastaEncontrada   = pastaRepository.findById(usuarioPastaDTO.getIdPasta()).orElseThrow(() -> new EntityNotFoundException("Pasta não encontrada com o ID fornecido."));;

        System.out.println(usuarioEncontrado.getId_usuario());
        System.out.println(pastaEncontrada);

        return pastaService.adicionarUsuarioAPasta(pastaEncontrada,usuarioEncontrado);

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
