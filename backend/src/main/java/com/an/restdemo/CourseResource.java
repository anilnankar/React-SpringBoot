package com.an.restdemo;

import java.net.URI;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import com.an.restdemo.*;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001", "http://localhost:4200" })
@RestController
public class CourseResource {

	@Autowired
	private ImageHardcodedService imageManagementService;

	@Autowired
	private CommentHardcodedService commentManagementService;

	@GetMapping("image")
	public List<Image> getAllImages() {
		return imageManagementService.findAll();
	}

	@GetMapping("/image/{id}")
	public Image getImage(@PathVariable long id) {
		return imageManagementService.findById(id);
	}
	
	@DeleteMapping("/image/{id}")
	public ResponseEntity<Void> deleteImage(@PathVariable long id) {
		Image image = imageManagementService.deleteById(id);

		if (image != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}
	
	@PostMapping("/image")
	public ResponseEntity<Void> createImage(@RequestBody Image image) {

		Image createdImage = imageManagementService.save(image);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdImage.getId())
				.toUri();

		return ResponseEntity.created(uri).build();
	}

	@GetMapping("comment")
	public List<Comment> getAllComments() {
		return commentManagementService.findAll();
	}	

	@GetMapping("/comment/{id}")
	public Comment getComment(@PathVariable long id) {
		return commentManagementService.findById(id);
	}
	
	@DeleteMapping("/comment/{id}")
	public ResponseEntity<Void> deleteComment(@PathVariable long id) {
		Comment comment = commentManagementService.deleteById(id);

		if (comment != null) {
			return ResponseEntity.noContent().build();
		}

		return ResponseEntity.notFound().build();
	}
	
}