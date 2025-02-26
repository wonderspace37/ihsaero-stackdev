// Main JavaScript file for Rocketry Club website

document.addEventListener('DOMContentLoaded', function() {
  console.log('Rocketry Club website loaded!');
  
  // Handle donation form other amount field
  const amountSelect = document.getElementById('amount');
  const otherAmountGroup = document.getElementById('otherAmountGroup');
  
  if (amountSelect) {
    amountSelect.addEventListener('change', function() {
      if (this.value === 'other') {
        otherAmountGroup.style.display = 'block';
      } else {
        otherAmountGroup.style.display = 'none';
      }
    });
  }
  
  // Handle donation form submission
  const donationForm = document.getElementById('donationForm');
  
  if (donationForm) {
    donationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // In a real application, this would submit to a payment processor
      // For demo purposes, we'll just show an alert
      alert('Thank you for your donation! This is a demo form - in a real application, you would be redirected to a payment processor.');
      
      // Reset form
      donationForm.reset();
      otherAmountGroup.style.display = 'none';
    });
  }
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Function to animate numbers counting up (for achievements section)
function animateNumbers() {
  const achievements = document.querySelectorAll('.achievement h3');
  
  achievements.forEach(achievement => {
    const target = parseInt(achievement.textContent);
    let count = 0;
    const duration = 2000; // 2 seconds
    const interval = duration / target;
    
    const counter = setInterval(() => {
      count++;
      achievement.textContent = count;
      
      if (count >= target) {
        achievement.textContent = target + (achievement.textContent.includes('+') ? '+' : '');
        clearInterval(counter);
      }
    }, interval);
  });
}

// Run animation when page loads if achievements section exists
if (document.querySelector('.achievement-grid')) {
  // Run animation after a short delay to ensure page is loaded
  setTimeout(animateNumbers, 500);
}