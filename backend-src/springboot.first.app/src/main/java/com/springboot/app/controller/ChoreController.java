package com.springboot.app.controller;

import com.springboot.app.exception.ResourceNotFoundException;
import com.springboot.app.model.Chore;
import com.springboot.app.repository.ChoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/")
public class ChoreController {
    @Autowired
    private ChoreRepository choreRepository;

    @GetMapping("/chores")
    public List<Chore> getallChores() {
        return choreRepository.findAll();
    }

    // create chore rest api
    @PostMapping("/chores")
    public Chore createChore(@RequestBody Chore chore) {
        return choreRepository.save(chore);
    }

    // get chore by id rest api
    @GetMapping("/chores/{id}")
    public ResponseEntity<Chore> getChoreById(@PathVariable Long id) {
        Chore chore = choreRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Chore with with id " + id + "does not exist"));
        return ResponseEntity.ok(chore);
    }

    // update chore rest api
    @PutMapping("/chores/{id}")
    public ResponseEntity<Chore> updateChore(@PathVariable Long id, @RequestBody Chore choreDetails) {
        Chore chore = choreRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Chore with with id " + id + "does not exist"));
        chore.setTitle(choreDetails.getTitle());
        chore.setResident(choreDetails.getResident());
        chore.setDayDue(choreDetails.getDayDue());

        chore.setTime(choreDetails.getTime());

        Chore updatedChore = choreRepository.save(chore);
        return ResponseEntity.ok(updatedChore);
    }

    //delete chore rest api
    @DeleteMapping("/chores/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteChore(@PathVariable Long id) {
        Chore chore = choreRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Chore with with id " + id + "does not exist"));
        choreRepository.delete(chore);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/chores/filter")
    public ResponseEntity<Map<String, Object>> getFilteredChores(@RequestParam(required = false) String resident, @RequestParam(required = false) String dayDue, @RequestParam(required = false) String timeLimit) {
        Integer timeLim = null;
        if (timeLimit != null) {
             timeLim = Integer.parseInt(timeLimit);
        }
        System.out.println(resident + dayDue + timeLimit);
        List<Chore> chores = choreRepository.findFiltered(resident, dayDue, timeLim);
        Double avgTime = choreRepository.findAvgTime(resident,dayDue, timeLim);
        Double avgChores = choreRepository.findAvgChores(resident,dayDue, timeLim);

        Map<String, Object> response = new HashMap<>();
        response.put("chores", chores);
        response.put("avgTime", avgTime.intValue());
        response.put("avgChores", avgChores.intValue());
        return ResponseEntity.ok(response);
    }

}
