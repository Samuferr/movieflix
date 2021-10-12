package com.samuferr.movieflix.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.samuferr.movieflix.dto.GenreDTO;
import com.samuferr.movieflix.entities.Genre;
import com.samuferr.movieflix.repositories.GenreRepository;

@Service
public class GenreService {
	
	@Autowired
	private GenreRepository repository;
	
	@Transactional(readOnly = true)
	public List<GenreDTO> findAll(){
		List<Genre> list = repository.findAll();
		
		return list.stream().map(x -> new GenreDTO(x)).collect(Collectors.toList());
	}
}
