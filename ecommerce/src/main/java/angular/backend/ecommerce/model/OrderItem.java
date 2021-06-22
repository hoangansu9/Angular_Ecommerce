package angular.backend.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orderItem")
public class OrderItem {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "bookName")
  private String bookName;


  @Column(name = "price")
  private String price;

  @Column(name = "quantity")
  private int quantity;

  @ManyToOne
  Book book;

  @ManyToOne
  @JoinColumn(name = "order_id")
  private OrderBook orderBook;
}
