document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".headings li");
  const images = document.querySelectorAll(".image-container img");
  const contents = document.querySelectorAll(".right-column .content");

  headings.forEach((heading) => {
    heading.addEventListener("click", () => {
      // Remove 'active' class from all headings and add to the clicked one
      headings.forEach((h) => h.classList.remove("active"));
      heading.classList.add("active");

      // Update the displayed image
      const target = heading.getAttribute("data-heading");
      images.forEach((img) => {
        img.classList.add("hidden");
        img.classList.remove("active");
        if (img.getAttribute("data-heading") === target) {
          img.classList.add("active");
          img.classList.remove("hidden");
        }
      });

      // Update the displayed content
      contents.forEach((content) => {
        content.classList.remove("active");
        content.classList.add("hidden");
        if (content.getAttribute("data-heading") === target) {
          content.classList.add("active");
          content.classList.remove("hidden");
        }
      });
    });
  });
});