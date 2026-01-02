function accessLink() {
            // This is easily bypassed by viewing the source code
            var password = prompt("Please enter the password:");
            var correctPassword = "timerpass123"; // This is visible to everyone

            if (password === correctPassword) {
                // The user can find this URL in the code as well
                window.location.href = "timer.html";
            } else {
                alert("Incorrect password!");
            }
        }

