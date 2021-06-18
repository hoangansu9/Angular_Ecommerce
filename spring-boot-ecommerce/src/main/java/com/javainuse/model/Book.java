package com.javainuse.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Collection;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "book")
public class Book {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "name")
  private String name;

  @Column(name = "author")
  private String author;

  @Column(name = "price")
  private String price;

  @Column(name = "picByte", length = 1000)
  private byte[] picByte;

  @Column(name = "category_id")
  private String category_id;


//  @JsonBackReference
//  @ManyToOne
//  @JoinColumn(name = "category_id", nullable = false)
//  private Category category;

}
