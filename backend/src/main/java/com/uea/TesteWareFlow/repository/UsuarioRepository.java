package com.uea.TesteWareFlow.repository;

import com.uea.TesteWareFlow.dto.UsuarioDto;
import com.uea.TesteWareFlow.model.Usuario;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface UsuarioRepository extends JpaRepository<Usuario, UUID> {
    @Query(value = "SELECT tb_usuario(u.id_usuario, u.nome_usuario , u.email, u.pastas) FROM Usuario u WHERE u.id_usuario = :id",nativeQuery = true)
    UsuarioDto findUsuarioWithPastasById(UUID id);

    Usuario findByEmail(String email);
}
