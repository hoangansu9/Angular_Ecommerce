package angular.backend.ecommerce.db;

import angular.backend.ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UserRepository extends JpaRepository<User, Long> {
}
