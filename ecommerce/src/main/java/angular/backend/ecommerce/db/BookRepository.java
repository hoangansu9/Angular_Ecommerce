package angular.backend.ecommerce.db;

import angular.backend.ecommerce.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;



public interface BookRepository extends JpaRepository<Book, Long> {

  Page<Book> findAll(Pageable pageable);
}
