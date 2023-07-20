package com.uea.TesteWareFlow.controller;

import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import com.uea.TesteWareFlow.repository.PastaRepository;
import com.uea.TesteWareFlow.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("pasta")
public class PastaController {

    @Autowired
    PastaRepository pastaRepository;
    @Autowired
    UsuarioRepository usuarioRepository;

    @PostMapping("{id}")
    private Pasta createPasta(@RequestBody Pasta pasta,@PathVariable Long id){
        Optional<Usuario> usuarioExistente = usuarioRepository.findById(id);

        if(usuarioExistente.isEmpty()){
            throw new Error("Usuario nao encontrado");
        }
        Usuario _usuario = usuarioExistente.get();

        Pasta _pasta = pastaRepository.save(pasta);

        List<Pasta> listaPasta = _usuario.getPastas();

        System.out.println(_pasta);
        System.out.println(listaPasta);

        listaPasta.add(_pasta);
        usuarioRepository.save(_usuario);

        return _pasta;
    }

    @PutMapping
    private void adicionarUsuarioAPasta(){

    }
}
