let darkMode = localStorage.getItem("darkMode");
            const lightModeToggle = document.querySelector("#light_btn");
            const darkModeToggle = document.querySelector("#dark_btn");

            if (darkMode == "enable") {
                document.body.classList.add("dark-mode");

                darkModeToggle.setAttribute("hidden", "");
                lightModeToggle.removeAttribute("hidden", "");
            }
            else {
                document.body.classList.remove("dark-mode");

                darkModeToggle.removeAttribute("hidden", "");
                lightModeToggle.setAttribute("hidden", "");
            }

            function enableDarkMode() {
                document.body.classList.add("dark-mode");

                localStorage.setItem("darkMode", "enable");

                darkModeToggle.setAttribute("hidden", "");
                lightModeToggle.removeAttribute("hidden", "");

            }
            function disableDarkMode() {
                document.body.classList.remove("dark-mode");

                localStorage.setItem("darkMode", null);

                darkModeToggle.removeAttribute("hidden", "");
                lightModeToggle.setAttribute("hidden", "");
            }
