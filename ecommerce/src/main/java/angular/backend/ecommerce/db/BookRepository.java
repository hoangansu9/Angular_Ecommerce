package angular.backend.ecommerce.db;

import angular.backend.ecommerce.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;



public interface BookRepository extends JpaRepository<Book, Long> {
}