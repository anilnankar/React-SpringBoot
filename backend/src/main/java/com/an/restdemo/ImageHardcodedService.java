package com.an.restdemo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

@Service
public class ImageHardcodedService {

	private static List<Image> Images = new ArrayList<>();
	private static long idCounter = 0;

	static {
		Images.add(new Image(++idCounter, "a.jpg", "/tmp/a.jpg"));
		Images.add(new Image(++idCounter, "b.jpg", "/tmp/b.jpg"));
	}

	public List<Image> findAll() {
		return Images;
	}

	public Image save(Image Image) {
		if (Image.getId() == -1 || Image.getId() == 0) {
			Image.setId(++idCounter);
			Images.add(Image);
		} else {
			deleteById(Image.getId());
			Images.add(Image);
		}
		return Image;
	}

	public Image deleteById(long id) {
		Image Image = findById(id);

		if (Image == null)
			return null;

		if (Images.remove(Image)) {
			return Image;
		}

		return null;
	}

	public Image findById(long id) {
		for (Image Image : Images) {
			if (Image.getId() == id) {
				return Image;
			}
		}

		return null;
	}
}