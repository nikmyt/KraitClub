package cz.osu.kraitclub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping({"/"})
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MainController {

	//tady si nasereš API requesty od frontendu
	//a hodíš tu repository převážně a možná pár service
	//protože... repository... HMMM ŽE BY DB?

}
