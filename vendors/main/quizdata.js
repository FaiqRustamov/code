let currentPage = 1;
let con = 0;

var return_first = function () {
  var tmp = null;
 
   $.ajax({
    'async': false,
    method: "GET",
    url: "http://161.97.113.89/api/v1/test/?main_id=1",
    dataType: "json",
      'success': function (data) {
          tmp = data;
      }
  });
  return tmp;
}();

console.log(return_first)
let QuestionsArray=[];

for(let i=1; i<=return_first.length; i++){
   let arrayIndex = 0;
    let tempobj={
    question:return_first[arrayIndex].question,
    correctAnswer:return_first[arrayIndex].main,
    answers:return_first[arrayIndex].quest_test.map(a => a.question),
    point:return_first[arrayIndex].point
  }
  arrayIndex++;
  console.log(tempobj.point);
   QuestionsArray.push(tempobj);
}

console.log(QuestionsArray);


var QuestionsArray1 = [
  {
    question: 'Entomology is the science that studies:',
    answers: [
      'Behavior of human beings',
      'Insects',
      'The origin and history of technical and scientific terms',
      'The formation of rocks'
    ],
    correctAnswer: 0,
  },
  {
    question: 'Galileo was an Italian astronomer who:',
    answers: [
      'developed the telescope',
      'discovered four satellites of Jupiter',
      'discovered that the movement of pendulum produces a regular time measurement',
      'All of the above'
    ],
    correctAnswer: 0,
  },
  {
    question: 'Exposure to sunlight helps a person improve his health because:',
    answers: [
      'the infrared light kills bacteria in the body',
      'resistance power increases',
      'the pigment cells in the skin get stimulated and produce a healthy tan',
      'the ultraviolet rays convert skin oil into Vitamin D'
    ],
    correctAnswer: 0,
  },
  {
    question: '\'OS\' computer abbreviation usually means:',
    answers: [
      'Order of Significance',
      'Open Software',
      'Operating System',
      'Optical Sensor'
    ],
    correctAnswer: 0,
  },
  {
    question: 'Which scientist discovered the radioactive element radium?',
    answers: [
      'Isaac Newton',
      'Albert Einstein',
      'Benjamin Franklin',
      'Marie Curie'
    ],
    correctAnswer: 0,
  },
  {
    question: 'The great Victoria Desert is located in:',
    answers: [
      'Canada',
      'West Africa',
      'Australia',
      'North America'
    ],
    correctAnswer: 0,
  },
  {
    question: 'Euclid was',
    answers: [
      'Greek mathematician',
      'Contributor to the use of deductive principles of logic as the basis of geometry',
      'Propounded the geometrical theorems',
      'All of the above'
    ],
    correctAnswer: 0,
  },
  {
    question: 'Who invented Dynamite?',
    answers: [
      'Alfred B. Nobel',
      'Sir Alexander Graham Bell',
      'Benjamin Franklin',
      'Thomas Alva Edison'
   
    ],
    correctAnswer: 0,
  }
];
var quiz = document.getElementById('quiz'),
    quizNav = document.getElementsByClassName('quiz-navigation')[0];
quiz.addEventListener('submit',function(e) {
  e.preventDefault();
});
console.log(QuestionsArray1)

var QuestionElement = function(QuestionObject,parentElement,questionPosition) {
  this.question = QuestionObject;
  this.position = questionPosition;
  this.element = document.createElement('div');
  this.element.className = 'question-wrapper';
  this.inputs = [];
  this.labels = [];
  this.create = function() {
    var self = this;
    //var content = '<h2>' + (this.position + 1) + '. ' + QuestionObject.question +'</h2>';
    this.element.innerHTML = '<h2>' + (this.position + 1) + '. ' + QuestionObject.question +'</h2>';
    QuestionObject.answers.forEach(function(answer,index) {
      //content += '<div class="answer">';
      //-----------
      var answerWrapper = document.createElement('div');
      answerWrapper.className = 'answer';
      var input = document.createElement('input');
      input.type = 'radio';
      input.id = questionPosition + '-' + index + '-num';
      input.name = 'question-' + questionPosition;
      input.value = index;
      var label = document.createElement('label');
      label.htmlFor = questionPosition + '-' + index + '-num';
      label.textContent = answer;
      answerWrapper.appendChild(input);
      answerWrapper.appendChild(label);
      //console.log(answerWrapper.innerHTML);
      self.inputs.push(input);
      self.labels.push(label);
      self.element.appendChild(answerWrapper);
      input.addEventListener('change',function() {
        self.updateAnswer();
        //alert(self.isAnswerCorrect());
      });
      //-----------
      //content += '<input type="radio" id="' + questionPosition + '-' + index + '-num" name="question-' + questionPosition + '" value="' + index + '">';
      //content += '<label for="' + questionPosition + '-' + index + '-num">' + answer + '</label>';
      //content += '</div>';
    });
    //console.log(self.inputs);
    //this.element.innerHTML = content;
  };
  this.answer = null;
  this.updateAnswer = function() {
    //lecę przez wszystkie elementy z tym samym atrybutem name i sprawdzam który zaznaczony
    var self = this;
    this.inputs.forEach(function(input) {
      if (input.checked) {
        self.answer = input.value;
      }
    });
  }
  this.isAnswerCorrect = function() {
    if (this.answer === null) {
      return false;
    }
    return this.question.correctAnswer === Number(this.answer);
  };
  this.showCorrect = function() {
    this.labels[this.question.correctAnswer].style.color = '#090';
  };
  this.showUserAnswers = function() {
    if (this.answer) {
      this.labels[this.answer].style.color = '#900';
    }
  };
  this.append = function() {
    this.create();
    //parentElement.appendChild(this.element);//może być problem z this
    parentElement.insertBefore(this.element,quizNav);
  };
  this.show = function() {
    this.element.style.display = 'block';
  };
  this.hide = function() {
    this.element.style.display = 'none';
  }
}



var questions = [];
QuestionsArray.forEach(function(q,index) {
  questions.push(new QuestionElement(q,quiz,index));
  questions[index].append();
});
//quiz.innerHTML += '<input type="submit" value="next">';


var Quiz = {
  showAnswers: function() {
    //var content = '<h2>Answers</h2>';
    questions.forEach(function(q) {
      /* content += '<div>';
      content += '</div>'; */
      q.show();
      q.showUserAnswers();
      q.showCorrect();
      q.inputs.forEach(function(inp) {
        inp.disabled = true;
        inp.style.display = 'none';
      });
    });
  }
}



var QuizNavigation = {
  currentQuestion: 0,
  nextBtn: document.getElementById('next'),
  prevBtn: document.getElementById('prev'),
  numberBtns: [],
  showQuestion: function(index) {
    questions.forEach(function(q) {
      if (q.position !== index) {
        q.hide();
        //console.log(q.position);
      }
    });
    questions[index].show();
    this.currentQuestion = index;
  },
  next: function() {
    var self = this;
    self.showQuestion(++self.currentQuestion);
  },
  prev: function() {
    this.showQuestion(--this.currentQuestion);
  },
  makeNumbers: function() {
    var self = this;
    questions.forEach(function(q) {
      var numberBtn = document.createElement('button');
      //numberBtn.textContent = q.position + 1;
      numberBtn.addEventListener('click',function() {
       // self.showQuestion(q.position);
        //self.checkPos();
      });
      //quizNav.appendChild(numberBtn);
      self.numberBtns.push(numberBtn);
      quizNav.insertBefore(numberBtn,self.nextBtn);

    });
  },
  checkPos: function() {
    this.numberBtns.forEach(function(btn) {
      btn.disabled = '';
    });
    this.numberBtns[this.currentQuestion].disabled = true;
    if (this.currentQuestion === 0) {
      this.prevBtn.disabled = true;
    } else {
      this.prevBtn.disabled = '';
      //alert("sss")
    }
    if (this.currentQuestion === (questions.length - 1)) {
      this.nextBtn.disabled = true;
      this.endQuizBtn.add();
    } else {
      this.nextBtn.disabled = '';
      this.endQuizBtn.remove();
    }
  },
  endQuizBtn: {
    element: document.createElement('a'),
    
    add: function() {
      var self = this;
      self.element.textContent = 'Nəticənə bax';
      quizNav.appendChild(self.element);
    },
    remove: function() {
      var self = this;
      if (quizNav.lastChild === self.element) {//tutaj pewnie można zrobić lepsze sprawdzenie
        quizNav.removeChild(self.element);
      }
    },
    clicked: function() {
      var score = 0;
      questions.forEach(function(q) {
        if (q.isAnswerCorrect()) {
          ++score;
        }
      });
      //var content = '<h2>Your score: ' + score + '</h2>';
      var showScore = document.createElement('h2');
      showScore.textContent = 'Nəticən: ' + score;
      //alert(score);
      quiz.appendChild(showScore);
      Quiz.showAnswers();
      quizNav.style.display = 'none';
    },
    addEvent: function() {
      var self = this;
      this.element.addEventListener('click',function() {
        self.clicked();
        //alert('fddsf');
      });
    }
  },
  handleEvents: function() {
    var self = this;
    this.nextBtn.addEventListener('click',function() {
      self.next();
      self.checkPos();
    });
    this.prevBtn.addEventListener('click',function() {
      self.prev();
      self.checkPos();
    });
    this.endQuizBtn.addEvent();
  }
};



QuizNavigation.showQuestion(0);
QuizNavigation.makeNumbers();
QuizNavigation.checkPos(questions[0]);
QuizNavigation.handleEvents();