let timeoutId;

        function changeColor() {
            const colorDiv = document.getElementById('color-div');
            const colorChangeBtn = document.getElementById('color-change-btn');
           

            // we can click on the button
            colorChangeBtn.disabled = true;

            // Set timeout to change color after 2 seconds and then we can't push on the button
            timeoutId = setTimeout(() => {
                colorDiv.style.backgroundColor = 'blue';
                colorChangeBtn.disabled = false;
            }, 2000);
        }

        function cancelColorChange() {
            const colorChangeBtn = document.getElementById('color-change-btn');

            // stop timeout if we push on the button
            clearTimeout(timeoutId);

            // Make the button unpressable
            colorChangeBtn.disabled = false;
        }