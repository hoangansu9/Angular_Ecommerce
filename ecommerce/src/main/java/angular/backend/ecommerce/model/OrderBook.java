package angular.backend.ecommerce.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orderBook")
public class OrderBook {

  @Id
  @Column(name = "id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "date")
  private String date;

  @Column(name = "name")
  private String name;

  @Column(name = "userName")
  private String userName;

  @Column(name = "phone")
  private String phone;

  @Column(name = "address")
  private String address;

  @OneToMany(mappedBy = "orderBook", cascade = CascadeType.ALL)
  private Collection<OrderItem> orderItems;

}
