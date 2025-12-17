const form = document.getElementById('registrationForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const courseSelect = document.getElementById('course');
        const termsCheckbox = document.getElementById('terms');
        const output = document.getElementById('output');

        // Error elements
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const genderError = document.getElementById('genderError');
        const courseError = document.getElementById('courseError');
        const termsError = document.getElementById('termsError');

        // Output elements
        const outputName = document.getElementById('outputName');
        const outputEmail = document.getElementById('outputEmail');
        const outputGender = document.getElementById('outputGender');
        const outputCourse = document.getElementById('outputCourse');

        // Email validation regex
        function isValidEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        // Clear error
        function clearError(input, error) {
            input.classList.remove('input-error');
            error.classList.remove('show');
        }

        // Show error
        function showError(input, error) {
            if (input) {
                input.classList.add('input-error');
            }
            error.classList.add('show');
        }

        // Validate form
        function validateForm() {
            let isValid = true;

            // Clear all errors
            clearError(nameInput, nameError);
            clearError(emailInput, emailError);
            clearError(courseSelect, courseError);
            genderError.classList.remove('show');
            termsError.classList.remove('show');

            // Validate name
            if (nameInput.value.trim() === '') {
                showError(nameInput, nameError);
                isValid = false;
            }

            // Validate email
            if (!isValidEmail(emailInput.value.trim())) {
                showError(emailInput, emailError);
                isValid = false;
            }

            // Validate gender
            const gender = document.querySelector('input[name="gender"]:checked');
            if (!gender) {
                showError(null, genderError);
                isValid = false;
            }

            // Validate course
            if (courseSelect.value === '') {
                showError(courseSelect, courseError);
                isValid = false;
            }

            // Validate terms
            if (!termsCheckbox.checked) {
                showError(null, termsError);
                isValid = false;
            }

            return isValid;
        }

        // Handle form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (validateForm()) {
                // Get form values
                const name = nameInput.value.trim();
                const email = emailInput.value.trim();
                const gender = document.querySelector('input[name="gender"]:checked').value;
                const course = courseSelect.value;

                // Display output
                outputName.textContent = name;
                outputEmail.textContent = email;
                outputGender.textContent = gender;
                outputCourse.textContent = course;

                output.classList.add('show');

                // Scroll to output
                output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });

        // Clear errors on input
        nameInput.addEventListener('input', function() {
            if (nameInput.value.trim() !== '') {
                clearError(nameInput, nameError);
            }
        });

        emailInput.addEventListener('input', function() {
            if (isValidEmail(emailInput.value.trim())) {
                clearError(emailInput, emailError);
            }
        });

        document.querySelectorAll('input[name="gender"]').forEach(radio => {
            radio.addEventListener('change', function() {
                genderError.classList.remove('show');
            });
        });

        courseSelect.addEventListener('change', function() {
            if (courseSelect.value !== '') {
                clearError(courseSelect, courseError);
            }
        });

        termsCheckbox.addEventListener('change', function() {
            if (termsCheckbox.checked) {
                termsError.classList.remove('show');
            }
        });