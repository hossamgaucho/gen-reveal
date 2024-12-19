const questions = [
    {
      question: "من هو أفضل لاعب خط وسط في مصر؟",
      options: ["عاشور", "سيد", "فؤاد"],
      answer: "عاشور",
      image: "images/1.png", // Add image path
    },
    {
      question: "...قلبي عندك ياللي الكلام",
      options: ["عندك", "فيك", "منك"],
      answer: "عندك",
      image: "images/2.png", // Add image path
    },
    {
      question: "اسم حسام الرابع؟",
      options: ["محمد", "عمر", "صفا"],
      answer: "عمر",
      image: "images/3.png", // Add image path
    },
    {
        question: "ما هي عدد اسابيع حمل الطفل؟",
        options: ["132", "6", "38"],
        answer: "38",
        image: "images/4.png", // Add image path
    },
    {
        question: "ما هو الكوكب الأحمر؟",
        options: ["الارض", "المريخ", "المشتري"],
        answer: "المريخ",
        image: "images/5.png", // Add image path
    },
    {
        question: "الشخصية اللي شهرت اياد الموجي",
        options: ["ميرفت أمين", "كنزي مدبولي", "ريم وبربري"],
        answer: "كنزي مدبولي",
        image: "images/6.png", // Add image path
    },
    {
        question: "في اي عام هجري نحن الان؟",
        options: ["1446", "1347", "1445"],
        answer: "1446",
        image: "images/7.png", // Add image path
    },
    {
        question: "من هي ذات النطاقين؟",
        options: ["عائشة", "فاطمة", "أسماء"],
        answer: "أسماء",
        image: "images/8.png", // Add image path
    },
    {
        question: "أي هذة القيم يعبر عن قيمة الرقم باي",
        options: ["3.14159", "3.14123", "3.14195"],
        answer: "3.14159",
        image: "images/9.png", // Add image path
},
  ];
  
  const colors = ["#a30b37","#bd6b73","#bbb6df","#c6c8ee","#97abb1","#746f72","#735f3d","#5a352a","#a33b20","#a47963"];
  
  let currentQuestionIndex = 0;
  let allAnsweredCorrectly = true;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  const startButton = document.getElementById("startButton");
  const imageContainer = document.createElement("div");
  const countdownElement = document.createElement("div"); // For countdown display
  
  startButton.addEventListener("click", startGame);
  
  function startGame() {
    startButton.style.display = "none"; // Hide the start button
    document.body.appendChild(imageContainer); // Add the image container
    showQuestion();
  }
  
  function showQuestion() {
    if (currentQuestionIndex < questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      optionsElement.innerHTML = ""; // Clear previous options
      imageContainer.innerHTML = ""; // Clear previous image
  
      currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => handleAnswer(option));
        optionsElement.appendChild(button);
      });
    } else {
      // Show the "Are you ready?" question after all questions are answered correctly
      if (allAnsweredCorrectly) {
        questionElement.textContent = ":) هل انت مستعد";
        optionsElement.innerHTML = "";
        const readyButton = document.createElement("button");
        readyButton.textContent = "مستعد";
        readyButton.addEventListener("click", startCountdown);
        optionsElement.appendChild(readyButton);
      } else {
        resultElement.textContent = "لقد رسبت يا موكوس حاول مرة اخرى";
        resultElement.style.color = "red";
      }
    }
  }
  
  function handleAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      document.body.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      const img = document.createElement("img");
      img.src = currentQuestion.image;
      img.alt = "Question image";
      img.style.width = "200px";
      img.style.marginTop = "20px";
  
      imageContainer.innerHTML = ""; // Clear the previous image
      imageContainer.appendChild(img);
  
      resultElement.textContent = "✅ صح، اللي بعده";
      resultElement.style.color = "#1e272e";
  
      // Wait for 10 seconds before moving to the next question
      setTimeout(() => {
        currentQuestionIndex++;
        resultElement.textContent = ""; // Clear the result text
        showQuestion();
      }, 10000); // 10 seconds delay
    } else {
      resultElement.textContent = "👎 غلط، يا منيل";
      resultElement.style.color = "red";
      allAnsweredCorrectly = false;
    }
  }
  
  function startCountdown() {
    countdownElement.textContent = "Get ready... 5 seconds until the reveal!";
    document.body.appendChild(countdownElement); // Add countdown element to the page
  
    let countdown = 5;
    const countdownInterval = setInterval(() => {
      countdownElement.textContent = `Get ready... ${countdown} seconds until the reveal!`;
      countdown--;
  
      if (countdown < 0) {
        clearInterval(countdownInterval);
        revealGender(); // Proceed to the final reveal
      }
    }, 1000); // Update every second
  }
  
  function revealGender() {
    // Final slide: Reveal the gender
    document.body.style.backgroundColor = "#3498db"; // Set specific color
  
    // Add the final message
    resultElement.textContent = "🎉 It's a boy! 🎉";
    resultElement.style.color = "white";
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    imageContainer.innerHTML = ""; // Clear previous images
  
    // Add the final image
    const finalImage = document.createElement("img");
    finalImage.src = "images/its_a_boy.webp"; // Replace with your image path
    finalImage.alt = "It's a boy!";
    finalImage.style.width = "300px";
    finalImage.style.marginTop = "20px";
    imageContainer.appendChild(finalImage);
  }
  