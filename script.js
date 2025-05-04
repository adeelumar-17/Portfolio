// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation
    const hamburger = document.querySelector(".hamburger")
    const navLinks = document.querySelector(".nav-links")
  
    if (hamburger) {
      hamburger.addEventListener("click", function () {
        this.classList.toggle("active")
        navLinks.classList.toggle("active")
      })
    }
  
    // Close mobile menu when clicking on a nav link
    const navItems = document.querySelectorAll(".nav-links a")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  
    // Typewriter effect
    const typedTextSpan = document.querySelector(".typed-text")
    const cursorSpan = document.querySelector(".cursor")
  
    const textArray = ["Cybersecurity", "Cloud Computing", "Back-end Development"]
    const typingDelay = 100
    const erasingDelay = 50
    const newTextDelay = 2000
    let textArrayIndex = 0
    let charIndex = 0
  
    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) {
          cursorSpan.classList.add("typing")
        }
        if (typedTextSpan) {
          typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
        }
        charIndex++
        setTimeout(type, typingDelay)
      } else {
        cursorSpan.classList.remove("typing")
        setTimeout(erase, newTextDelay)
      }
    }
  
    function erase() {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
          cursorSpan.classList.add("typing")
        }
        if (typedTextSpan) {
          typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1)
        }
        charIndex--
        setTimeout(erase, erasingDelay)
      } else {
        cursorSpan.classList.remove("typing")
        textArrayIndex++
        if (textArrayIndex >= textArray.length) textArrayIndex = 0
        setTimeout(type, typingDelay + 1100)
      }
    }
  
    if (textArray.length && typedTextSpan) {
      setTimeout(type, newTextDelay + 250)
    }
  
    // Scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.1 },
    )
  
    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("hidden")
      observer.observe(section)
    })
  
    // Skill bar animation
    const skillBars = document.querySelectorAll(".skill-progress-bar")
  
    function animateSkillBars() {
      skillBars.forEach((bar) => {
        const width = bar.style.width
        bar.style.width = "0"
        setTimeout(() => {
          bar.style.width = width
        }, 100)
      })
    }
  
    // Animate skill bars when skills section is in view
    const skillsSection = document.querySelector(".skills")
    if (skillsSection) {
      const skillsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateSkillBars()
            }
          })
        },
        { threshold: 0.1 },
      )
  
      skillsObserver.observe(skillsSection)
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Simple validation
        if (!name || !email || !subject || !message) {
          alert("Please fill in all fields")
          return
        }
  
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show a success message
        alert("Thank you for your message! I will get back to you soon.")
        contactForm.reset()
      })
    }
  
    // Add scroll class to header on scroll
    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Add CSS for scroll animations
    const style = document.createElement("style")
    style.textContent = `
          .hidden {
              opacity: 0;
              transform: translateY(50px);
              transition: all 1s ease;
          }
          
          .show {
              opacity: 1;
              transform: translateY(0);
          }
          
          header.scrolled {
              padding: 10px 0;
              background-color: rgba(10, 10, 10, 0.95);
          }
      `
    document.head.appendChild(style)
  })
  