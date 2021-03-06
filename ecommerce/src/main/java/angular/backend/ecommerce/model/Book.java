package angular.backend.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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

  @Lob
  @Basic(fetch = FetchType.LAZY)
  @Column(name = "picByte", length = 100000)
  private byte[] picByte;

  @Column(name = "category_id")
  private Long category_id;

}
