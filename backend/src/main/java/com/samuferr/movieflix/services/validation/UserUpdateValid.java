package com.samuferr.movieflix.services.validation;

import javax.validation.Payload;

public @interface UserUpdateValid {
	String message() default "Validation error";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};
}