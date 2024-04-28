package com.springboot.app.repository;

import com.springboot.app.model.Chore;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.yaml.snakeyaml.events.Event;

import java.util.List;

@Repository
public interface ChoreRepository extends JpaRepository<Chore, Long> {

    @Query(value = "SELECT c FROM Chore c " +
                   "WHERE (CASE WHEN :resident IS NULL THEN TRUE ELSE c.resident = :resident END) " +
                   "AND (CASE WHEN :dayDue IS NULL THEN TRUE ELSE c.dayDue = :dayDue END)" +
                   "AND (c.time < :timeLimit OR :timeLimit IS NULL)")
    public List<Chore> findFiltered(@Param("resident") String resident, @Param("dayDue") String dayDue, @Param("timeLimit") Integer timeLimit);


    @Query(value = "SELECT avg(c.time) FROM Chore c " +
            "WHERE (CASE WHEN :resident IS NULL THEN TRUE ELSE c.resident = :resident END) " +
            "AND (CASE WHEN :dayDue IS NULL THEN TRUE ELSE c.dayDue = :dayDue END) " +
            "AND (c.time < :timeLimit OR :timeLimit IS NULL)")
    public Double findAvgTime(@Param("resident") String resident, @Param("dayDue") String dayDue, @Param("timeLimit") Integer timeLimit);

    @Query(value = "SELECT avg(cnt) FROM (SELECT count(c.id) as cnt FROM Chore c " +
            "WHERE (CASE WHEN :resident IS NULL THEN TRUE ELSE c.resident = :resident END) " +
            "AND (CASE WHEN :dayDue IS NULL THEN TRUE ELSE c.dayDue = :dayDue END) " +
            "AND (c.time < :timeLimit OR :timeLimit IS NULL)" +
            "GROUP BY c.resident)")
    public Double findAvgChores(@Param("resident") String resident, @Param("dayDue") String dayDue, @Param("timeLimit") Integer timeLimit);

}
