// script.js
document.addEventListener("DOMContentLoaded", function () {
  const categoryButtons = document.getElementById("category-buttons");
  const videoContainer = document.getElementById("video-container");
  const videoCardTemplate = document.getElementById("video-card-template");

  const categories = [
    "Python",
    "Datascience",
    "MachineLearning",
    "WebDevelelopment",
  ];

  const videoData = {
    Python: [
      {
        title: "Python for beginners",
        src: "https://www.youtube.com/embed/kqtD5dpn9C8?si=nh-xhXsZj8bDDYSz",
      },
      {
        title: "Django in 1 hour",
        src: "https://www.youtube.com/embed/rHux0gMZ3Eg?si=ygbTBNw9wwehBLNV",
      },
      {
        title: "Python full course",
        src: "https://www.youtube.com/embed/XKHEtdqhLK8?si=WmxAUnyjobdbvVSv",
      },
      {
        title: "Automated movie editing with movie.py",
        src: "https://www.youtube.com/embed/Q2d1tYvTjRw?si=6qPocMJlhcNsG1-F",
      },
    ],
    Datascience: [
      {
        title: "Data science road map",
        src: "https://www.youtube.com/embed/PFPt6PQNslE?si=1_-lv58A3LzT3ipk",
      },
      {
        title: "Is data science a good career",
        src: "https://www.youtube.com/embed/ax_NNtpSb0c?si=vy_7V8BAslAvzx4U",
      },
      {
        title: "What is data science",
        src: "https://www.youtube.com/embed/uIUvpJdYgSA?si=5xOZ8A4RX0Qcsozm",
      },
      {
        title: "Data science vs Data analytics🔥",
        src: "https://www.youtube.com/embed/dcXqhMqhZUo?si=uCIInZHk5frCYBHr",
      },
    ],
    MachineLearning: [
      {
        title: "Machine learning Basics",
        src: "https://www.youtube.com/embed/ukzFI9rgwfU?si=fZOLCuPxoC6EK6ZQ",
      },
      {
        title: "Machine Learning tutorial",
        src: "https://www.youtube.com/embed/gmvvaobm7eQ?si=t4_s9rywaB7-3wHk",
      },
      {
        title: "What is Machine Learning",
        src: "https://www.youtube.com/embed/VWl8BaaXb8o?si=8zr7cla1O32W_e83",
      },
      {
        title: "AI vs ML vs DL vs DS",
        src: "hhttps://www.youtube.com/embed/k2P_pHQDlp0?si=Rn_jzNKDlG7uU3Qy",
      },
    ],
    WebDevelelopment: [
      {
        title: "Fastest way to become a web developer",
        src: "https://www.youtube.com/embed/NWnBxQjssvQ?si=V0RCXp_pqDWXs7vW",
      },
      {
        title: "My Coding story",
        src: "https://www.youtube.com/embed/eFJGyT3C-Y0?si=HM4hsAWObbdaTOeF",
      },
      {
        title: "How to become a website designer",
        src: "https://www.youtube.com/embed/P-Sg7WQlyLw?si=pMvCa6XxC53iWnGj",
      },
      {
        title: "Web designer vs web developer",
        src: "https://www.youtube.com/embed/3fHvTDr04Dc?si=CxLlnt0A_Fn6ifqp",
      },
    ],
  };

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category;
    button.classList.add("btn");
    button.addEventListener("click", () => {
      categoryButtons
        .querySelectorAll(".btn")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      loadVideos(category);
    });
    categoryButtons.appendChild(button);
  });

  function loadVideos(category) {
    videoContainer.innerHTML = "";
    const videos = videoData[category];

    if (!videos) {
      videoContainer.innerHTML = "<p>No videos found for this category.</p>";
      return;
    }

    videos.forEach((video) => {
      const videoCard = videoCardTemplate.content.cloneNode(true);

      const iframeElement = videoCard.querySelector("iframe");
      iframeElement.src = video.src;

      const titleElement = videoCard.querySelector("h3");
      titleElement.textContent = video.title;

      const commentForm = videoCard.querySelector(".comment-form");
      const commentsSection = videoCard.querySelector(".comments-section");

      commentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const commentText = this.querySelector(".comment-box").value.trim();
        if (commentText) {
          const newCommentElement = document.createElement("div");
          newCommentElement.classList.add("comment");
          newCommentElement.innerHTML = `
            <div class="user-icon">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="comment-content">
              <strong>CurrentUser</strong>
              <p>${commentText}</p>
            </div>
          `;
          commentsSection.appendChild(newCommentElement);
          this.reset();
        } else {
          alert("Please enter a comment before submitting.");
        }
      });

      videoContainer.appendChild(videoCard);
    });
  }

  // Load default videos (Action category)
  categoryButtons.querySelector(".btn").classList.add("active");
  loadVideos("Python");
});
