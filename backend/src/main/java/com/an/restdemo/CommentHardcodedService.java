package com.an.restdemo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
public class CommentHardcodedService {

	private static List<Comment> Comments = new ArrayList<>();
	private static long idCounter = 0;

	static {
		Comments.add(new Comment(++idCounter, "anil@gmail.com", "1657281923844", "Test", 1,  68500232));
		Comments.add(new Comment(++idCounter, "test@gmail.com", "1657281908141", "Hi", 2, 84700520));
	}

	public List<Comment> findAll() {
		return Comments;
	}

	public Comment save(Comment Comment) {
		if (Comment.getId() == -1 || Comment.getId() == 0) {
			Comment.setId(++idCounter);
			Comments.add(Comment);
		} else {
			deleteById(Comment.getId());
			Comments.add(Comment);
		}
		return Comment;
	}

	public Comment deleteById(long id) {
		Comment Comment = findById(id);

		if (Comment == null)
			return null;

		if (Comments.remove(Comment)) {
			return Comment;
		}

		return null;
	}

	public Comment findById(long id) {
		for (Comment Comment : Comments) {
			if (Comment.getId() == id) {
				return Comment;
			}
		}

		return null;
	}
}