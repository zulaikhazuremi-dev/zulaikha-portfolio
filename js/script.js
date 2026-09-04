
// =========================
// PROJECT SCREENSHOT GALLERY
// =========================

const galleryMainImage = document.querySelector(".gallery-main img");
const galleryThumbs = document.querySelectorAll(".gallery-thumb");

galleryThumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const imagePath = thumb.getAttribute("data-image");

    if (galleryMainImage && imagePath) {
      galleryMainImage.src = imagePath;
    }

    galleryThumbs.forEach((item) => item.classList.remove("active"));
    thumb.classList.add("active");
  });
});

// Portfolio JavaScript

console.log("Zulaikha's portfolio loaded successfully.");

const projectData = {
  hr: {
    title: "Human Resource Management System",
    type: "Web Application",
    description: "HR management solution covering payroll, recruitment, attendance approvals, task assignment and financial tracking.",
    role: "Sole Software Developer",
    tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
    features: [
      "Payroll management",
      "Recruitment management",
      "Attendance approvals",
      "Task assignment",
      "Financial tracking",
      "Role-based workflows for Admin, Director, Manager, Supervisor and Staff"
    ]
  },

  "hr-mobile": {
    title: "Human Resource Mobile Application",
    type: "Android Mobile Application",
    description: "Mobile application migrated from the web-based HR Management System to improve accessibility.",
    role: "Sole Software Developer",
    tech: ["Flutter", "Dart", "PHP", "MySQL"],
    features: [
      "Mobile access to HR functions",
      "Employee-focused workflows",
      "Integration with backend services",
      "Android application deployment"
    ]
  },

  attendance: {
    title: "Attendance Application",
    type: "Mobile Application",
    description: "Digital attendance tracking application developed to monitor employee working hours and reduce manual processing.",
    role: "Sole Software Developer",
    tech: ["Flutter", "Dart", "PHP", "MySQL"],
    features: [
      "Digital attendance tracking",
      "Working-hour monitoring",
      "Attendance records",
      "Reduced manual attendance processing"
    ]
  },

  stock: {
    title: "Stock Ordering Application",
    type: "Mobile Inventory Application",
    description: "Mobile inventory management application designed for real-time stock tracking and monitoring.",
    role: "Sole Software Developer",
    tech: ["Flutter", "Dart", "PHP", "MySQL"],
    features: [
      "Stock tracking",
      "Inventory monitoring",
      "Stock ordering workflow",
      "Real-time stock information"
    ]
  },

  food: {
    title: "Food Merchant Application",
    type: "Food Ordering Application",
    description: "Food ordering application supporting restaurant browsing, menu viewing, food ordering, delivery address management and payment.",
    role: "Sole Software Developer",
    tech: ["Flutter", "Dart", "PHP", "MySQL"],
    features: [
      "Restaurant browsing",
      "Menu viewing",
      "Food ordering",
      "Delivery address management",
      "Payment flow"
    ]
  },

  pos: {
    title: "Point of Sale (POS) Application",
    type: "Standalone Business Application",
    description: "Standalone POS application supporting transaction calculations, invoice generation and multiple payment options.",
    role: "Sole Software Developer",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Sales transaction calculations",
      "Invoice generation",
      "Multiple payment options",
      "Transaction management"
    ]
  },

  repair: {
    title: "Phone Repair Business Management System",
    type: "Personal / Family Business Project",
    description: "A web-based management system built for a family phone repair business to organize day-to-day business operations.",
    role: "Developer",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Admin dashboard",
      "Sales management",
      "Repair management",
      "Stock ordering",
      "Payroll",
      "Expenses",
      "Payment vouchers",
      "Attendance"
    ]
  },

  invoice: {
    title: "Invoice Management System",
    type: "Web Application",
    description: "Invoice management system covering invoice generation, customer management, payment tracking and reporting.",
    role: "Sole Software Developer",
    tech: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
    features: [
      "Invoice generation",
      "Customer management",
      "Payment tracking",
      "Reporting"
    ]
  }
};

const projectModal = document.getElementById("projectModal");

if (projectModal) {
  projectModal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const projectKey = button.getAttribute("data-project");
    const project = projectData[projectKey];

    document.getElementById("projectModalLabel").textContent = project.title;

    document.getElementById("projectModalContent").innerHTML = `
      <p class="mb-3">${project.description}</p>

      <p class="mb-2">
        <strong>Role:</strong> ${project.role}
      </p>

      <p class="fw-bold text-dark mb-2">Technology</p>
      <div class="project-detail-tech mb-4">
        ${project.tech.map(tech => `<span>${tech}</span>`).join("")}
      </div>

      <p class="fw-bold text-dark mb-2">Key Features</p>
      <ul class="project-detail-list">
        ${project.features.map(feature => `<li>${feature}</li>`).join("")}
      </ul>
    `;
  });
}


// =========================
// SCROLL UI
// =========================

const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

  if (scrollProgress) {
    scrollProgress.style.width = `${progress}%`;
  }

  if (backToTop) {
    backToTop.classList.toggle("show", scrollTop > 500);
  }

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (scrollTop >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateScrollUI);
window.addEventListener("load", updateScrollUI);

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// =========================
// SCROLL REVEAL
// =========================

const revealSections = document.querySelectorAll(".reveal-section");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealSections.forEach((section) => {
  revealObserver.observe(section);
});


// Close the mobile navbar after selecting a section.
const navbarCollapse = document.getElementById("navbarNav");
const navbarLinks = document.querySelectorAll("#navbarNav .nav-link");

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse && navbarCollapse.classList.contains("show") && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    }
  });
});
