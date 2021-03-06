package ual.dra.artifact19;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface LargeImageRepository extends CrudRepository<LargeImage, Long> {

}
