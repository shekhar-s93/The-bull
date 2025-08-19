// const modal = document.querySelector(".modal");
// const modalImage = document.getElementById("modal-image");
// const closeBtn = document.querySelector(".close");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const fullscreenBtn = document.querySelector(".fullscreen");
// const imageCounter = document.getElementById("image-counter");

// const images = document.querySelectorAll(".gallery-item img");
// let currentIndex = 0;

// const updateImageCounter = () => {
//   imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
// };

// images.forEach((image, index) => {
//   image.addEventListener("click", () => {
//     modal.style.display = "flex";
//     modalImage.src = image.src;
//     currentIndex = index; 
//     updateImageCounter(); 
//   });
// });

// closeBtn.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// modal.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });

// const showNextImage = () => {
//   currentIndex = (currentIndex + 1) % images.length; 
//   modalImage.src = images[currentIndex].src;
//   updateImageCounter(); 
// };

// nextBtn.addEventListener("click", showNextImage);

// const showPreviousImage = () => {
//   currentIndex = (currentIndex - 1 + images.length) % images.length; 
//   modalImage.src = images[currentIndex].src;
//   updateImageCounter(); 
// };

// prevBtn.addEventListener("click", showPreviousImage);

// fullscreenBtn.addEventListener("click", () => {
//   if (modalImage.requestFullscreen) {
//     modalImage.requestFullscreen(); 
//   } else if (modalImage.webkitRequestFullscreen) {
//     modalImage.webkitRequestFullscreen(); 
//   } else if (modalImage.msRequestFullscreen) {
//     modalImage.msRequestFullscreen(); 
//   }
// });

// document.addEventListener("keydown", (event) => {
//   if (modal.style.display === "flex") {
//     if (event.key === "ArrowRight") {
//       showNextImage(); 
//     } else if (event.key === "ArrowLeft") {
//       showPreviousImage(); 
//     } else if (event.key === "Escape") {
//       modal.style.display = "none"; 
//     }
//   }
// });






const modal = document.querySelector(".modal");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const fullscreenBtn = document.querySelector(".fullscreen");
    const imageCounter = document.getElementById("image-counter");
    const actressName = document.getElementById("actress-name");
    const profileLink = document.getElementById("profile-link");

    const images = document.querySelectorAll(".gallery-item img");
    const imageData = [...images].map((img, index) => ({
      src: img.src,
      name: img.closest(".gallery-item").getAttribute("data-name"),
      profile: img.closest(".gallery-item").getAttribute("data-profile"),
      index: index,
    }));

    let currentIndex = 0;

    // Update image counter on modal open
    function updateImageCounter() {
      imageCounter.textContent = `${currentIndex + 1} / ${imageData.length}`;
    }

    // Open modal with clicked image
    function openModal(index) {
      currentIndex = index;
      updateModalContent();
      modal.style.display = "flex";
    }

    // Update modal content based on current index
    function updateModalContent() {
      const { src, name, profile } = imageData[currentIndex];
      modalImage.src = src;
      actressName.textContent = name;
      profileLink.href = profile;
      updateImageCounter();
    }

    // Close modal
    function closeModal() {
      modal.style.display = "none";
    }

    // Show previous image
    function showPreviousImage() {
      currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
      updateModalContent();
    }

    // Show next image
    function showNextImage() {
      currentIndex = (currentIndex + 1) % imageData.length;
      updateModalContent();
    }

    // Event listeners for gallery images
    images.forEach((img, index) => {
      img.addEventListener("click", () => openModal(index));
    });

    // Close modal on close button click
    closeBtn.addEventListener("click", closeModal);

    // Prev and Next buttons
    prevBtn.addEventListener("click", showPreviousImage);
    nextBtn.addEventListener("click", showNextImage);

    // Fullscreen button
    fullscreenBtn.addEventListener("click", () => {
      if (modalImage.requestFullscreen) {
        modalImage.requestFullscreen();
      }
    });

    // Close modal by clicking outside the modal image
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Keyboard navigation for left and right arrow keys
    document.addEventListener("keydown", (event) => {
      if (modal.style.display === "flex") {
        if (event.key === "ArrowRight") {
          showNextImage();
        } else if (event.key === "ArrowLeft") {
          showPreviousImage();
        } else if (event.key === "Escape") {
          closeModal();
        }
      }
    });