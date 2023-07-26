package com.uea.TesteWareFlow.repository;

import com.uea.TesteWareFlow.dto.PastaProjection;
import com.uea.TesteWareFlow.model.Pasta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PastaRepository extends JpaRepository<Pasta, UUID> {

    @Query(value = "SELECT\n" +
            "    p.id_pasta,\n" +
            "    p.nome,\n" +
            "    u.id_usuario,\n" +
            "    u.nome\n" +
            "FROM\n" +
            "    tb_pasta p\n" +
            "JOIN\n" +
            "    tb_pasta_usuarios tbup ON p.id_pasta = tbup.pastas_id_pasta\n" +
            "JOIN\n" +
            "    tb_usuario u ON tbup.usuarios_id_usuario = u.id_usuario WHERE  p.id_pasta=id;",nativeQuery = true)
    Optional<Pasta> findUsuarios(@Param("id")UUID id);

    @Query(value = "INSERT INTO usuario_pasta VALUES(:id_usuario,:id_pasta)",nativeQuery = true)
    void adicionarUsuarioPasta(UUID id_usuario,UUID id_pasta);

    Pasta findByNomePasta(String nomePasta);
}
