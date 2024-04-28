package com.springboot.app.model;

import jakarta.persistence.*;

@Entity
@Table(name = "chores")

public class Chore {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "resident")
    private String resident;

    @Column(name = "dayDue")
    private String dayDue;

    @Column(name = "time")
    private int time;

    public Chore() {}

    public Chore(String title, String resident) {
        super();
        this.title = title;
        this.resident = resident;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getResident() {
        return resident;
    }

    public void setResident(String resident) {
        this.resident = resident;
    }


    public String getDayDue() {
        return dayDue;
    }

    public void setDayDue(String dayDue) {
        this.dayDue = dayDue;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }
}
