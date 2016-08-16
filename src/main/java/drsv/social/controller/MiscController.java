package drsv.social.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/misc")
public class MiscController {
	
	@RequestMapping(method = RequestMethod.GET)
	public String test() {
		return "OK";
	}
	
	@RequestMapping("/user")
	public Principal user(Principal principal) {
		return principal;
	}

}
