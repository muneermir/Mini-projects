//let a=new Date
//console.log(a.getDate())
function updateClock() {
            const now = new Date();
            
            // Format time
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            
            // Update time display with colored seconds
            const timeElement = document.getElementById('time');
            timeElement.innerHTML = `${hours}:${minutes}:<span class="seconds">${seconds}</span>`;
            
            // Format date
            const options = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };
            const dateString = now.toLocaleDateString('en-US', options);
            document.getElementById('date').textContent = dateString;
        }

        // Update immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);

        // Add some interactive effects on click
        const clockContainer = document.querySelector('.clock-container');
        
        clockContainer.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(2)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        clockContainer.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(2)';
        });